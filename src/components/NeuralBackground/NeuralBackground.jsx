import { useEffect, useRef } from 'react'

const NeuralBackground = () => {
  const canvasRef = useRef(null)
  const animationIdRef = useRef(null)
  const nodesRef = useRef([])
  const mouseRef = useRef({ x: 0, y: 0, active: false })
  const isVisibleRef = useRef(true)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    const devicePixelRatio = window.devicePixelRatio || 1

    const config = {
      nodeCount: window.innerWidth < 768 ? 150 : 150,
      maxDistance: 150,
      nodeSpeed: 0.5,
      attractionStrength: 0.02,
      parallaxStrength: 0.1,
      nodeSize: 2,
      edgeOpacity: 0.1,
      glowSize: 3
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
      canvas.style.width = rect.width + 'px'
      canvas.style.height = rect.height + 'px'
      generateNodes()
    }

    const generateNodes = () => {
      nodesRef.current = []
      for (let i = 0; i < config.nodeCount; i++) {
        nodesRef.current.push({
          x: Math.random() * (canvas.width / devicePixelRatio),
          y: Math.random() * (canvas.height / devicePixelRatio),
          vx: (Math.random() - 0.5) * config.nodeSpeed,
          vy: (Math.random() - 0.5) * config.nodeSpeed,
          baseX: 0,
          baseY: 0
        })
      }
    }

    const updateNodes = () => {
      nodesRef.current.forEach(node => {
        node.baseX = node.x
        node.baseY = node.y

        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - node.x
          const dy = mouseRef.current.y - node.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 200) {
            const force = (200 - distance) / 200
            node.vx += dx * config.attractionStrength * force
            node.vy += dy * config.attractionStrength * force
          }

          const parallaxX = (mouseRef.current.x - canvas.width / devicePixelRatio / 2) * config.parallaxStrength
          const parallaxY = (mouseRef.current.y - canvas.height / devicePixelRatio / 2) * config.parallaxStrength
          node.x += parallaxX * 0.01
          node.y += parallaxY * 0.01
        }

        node.x += node.vx
        node.y += node.vy

        node.vx *= 0.98
        node.vy *= 0.98

        if (node.x < 0 || node.x > canvas.width / devicePixelRatio) {
          node.vx *= -0.8
          node.x = Math.max(0, Math.min(canvas.width / devicePixelRatio, node.x))
        }
        if (node.y < 0 || node.y > canvas.height / devicePixelRatio) {
          node.vy *= -0.8
          node.y = Math.max(0, Math.min(canvas.height / devicePixelRatio, node.y))
        }
      })
    }

    const drawGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height / devicePixelRatio)
      gradient.addColorStop(0, '#000000')
      gradient.addColorStop(1, '#000000')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width / devicePixelRatio, canvas.height / devicePixelRatio)
    }

    const drawEdges = () => {
      for (let i = 0; i < nodesRef.current.length; i++) {
        for (let j = i + 1; j < nodesRef.current.length; j++) {
          const node1 = nodesRef.current[i]
          const node2 = nodesRef.current[j]
          const dx = node1.x - node2.x
          const dy = node1.y - node2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < config.maxDistance) {
            const opacity = (1 - distance / config.maxDistance) * config.edgeOpacity
            ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(node1.x, node1.y)
            ctx.lineTo(node2.x, node2.y)
            ctx.stroke()
          }
        }
      }
    }

    const drawNodes = () => {
      nodesRef.current.forEach(node => {
        const glowGradient = ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, config.glowSize
        )
        glowGradient.addColorStop(0, 'rgba(59, 130, 246, 0.8)')
        glowGradient.addColorStop(1, 'rgba(59, 130, 246, 0)')

        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(node.x, node.y, config.glowSize, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = 'rgba(59, 130, 246, 0.6)'
        ctx.beginPath()
        ctx.arc(node.x, node.y, config.nodeSize, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width / devicePixelRatio, canvas.height / devicePixelRatio)
      drawGradient()
      drawEdges()
      drawNodes()
    }

    const animate = () => {
      if (!isVisibleRef.current) return

      updateNodes()
      render()
      animationIdRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
      mouseRef.current.active = true
    }

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        mouseRef.current.x = e.touches[0].clientX
        mouseRef.current.y = e.touches[0].clientY
        mouseRef.current.active = true
      }
    }

    const handleTouchEnd = () => {
      mouseRef.current.active = false
    }

    const handleVisibilityChange = () => {
      isVisibleRef.current = !document.hidden
      if (isVisibleRef.current) {
        animate()
      }
    }

    resize()
    animate()

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('touchmove', handleTouchMove, { passive: true })
    document.addEventListener('touchend', handleTouchEnd)
    window.addEventListener('resize', resize)
    window.addEventListener('orientationchange', () => {
      setTimeout(resize, 100)
    })
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current)
      }
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('touchmove', handleTouchMove)
      document.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [])

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  if (prefersReducedMotion) {
    return null
  }

  return (
    <canvas
      id="neural-bg"
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
        width: '100%',
        height: '100%'
      }}
    />
  )
}

export default NeuralBackground

