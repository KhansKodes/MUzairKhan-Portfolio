import { useState, useEffect } from 'react'

const TypingEffect = () => {
  const [displayText, setDisplayText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

  const texts = ['Software Engineer', 'Backend Developer', 'AI/ML Expert', 'Python Developer']
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    let timeoutId
    let currentCharIndex = charIndex
    let currentIsDeleting = isDeleting
    let currentTextIndex = textIndex

    const typeText = () => {
      const currentText = texts[currentTextIndex]
      
      if (currentIsDeleting) {
        currentCharIndex--
        setDisplayText(currentText.substring(0, currentCharIndex))
        setCharIndex(currentCharIndex)
      } else {
        currentCharIndex++
        setDisplayText(currentText.substring(0, currentCharIndex))
        setCharIndex(currentCharIndex)
      }

      let typeSpeed = currentIsDeleting ? 50 : 100

      if (!currentIsDeleting && currentCharIndex === currentText.length) {
        typeSpeed = 2000
        currentIsDeleting = true
        setIsDeleting(true)
      } else if (currentIsDeleting && currentCharIndex === 0) {
        currentIsDeleting = false
        setIsDeleting(false)
        currentTextIndex = (currentTextIndex + 1) % texts.length
        setTextIndex(currentTextIndex)
        typeSpeed = 500
      }

      timeoutId = setTimeout(typeText, typeSpeed)
    }

    const initialTimer = setTimeout(typeText, 2000)
    
    return () => {
      clearTimeout(initialTimer)
      if (timeoutId) clearTimeout(timeoutId)
    }
  }, [])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <>
      <span className="typing-text">{displayText}</span>
      <span className="cursor" style={{ opacity: showCursor ? 1 : 0 }}>|</span>
    </>
  )
}

export default TypingEffect

