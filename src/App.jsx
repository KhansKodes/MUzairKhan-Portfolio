import { useEffect, useState } from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import Resume from './components/Resume'
import Experience from './components/Experience'
import Education from './components/Education'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import NeuralBackground from './components/NeuralBackground'
import AOS from 'aos'
import 'aos/dist/aos.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'boxicons/css/boxicons.min.css'

function App() {
  const [activeSection, setActiveSection] = useState('header')
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [prevSection, setPrevSection] = useState('header')

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })

    // Handle initial hash
    if (window.location.hash) {
      const sectionId = window.location.hash.substring(1)
      setActiveSection(sectionId)
      const element = document.getElementById(sectionId)
      if (element) {
        element.classList.add('section-show')
        if (sectionId !== 'header') {
          const header = document.getElementById('header')
          if (header) header.classList.add('header-hidden')
        }
      }
    } else {
      // Show header by default
      const header = document.getElementById('header')
      if (header) header.classList.remove('header-hidden')
    }
  }, [])

  const handleSectionChange = (sectionId) => {
    // Don't transition if clicking the same section
    if (sectionId === activeSection) return

    setIsTransitioning(true)
    setPrevSection(activeSection)
    
    // Add transition class to body first
    document.body.classList.add('tunnel-transition')
    
    // Get current and target sections
    const header = document.getElementById('header')
    const targetSection = document.getElementById(sectionId)
    
    // Determine current section
    let currentSection = null
    if (activeSection === 'header') {
      currentSection = header
    } else {
      currentSection = document.querySelector('section.section-show')
    }
    
    // Hide all sections first to prevent overlap
    document.querySelectorAll('section').forEach(section => {
      section.classList.remove('section-show')
    })
    if (header) {
      header.classList.add('header-hidden')
    }
    
    // Start exit animation for current section
    if (currentSection) {
      currentSection.classList.add('tunnel-exiting')
    }
    
    // Wait for exit animation to mostly complete before showing new section
    setTimeout(() => {
      setActiveSection(sectionId)
      
      // Remove exit class from old section
      if (currentSection) {
        currentSection.classList.remove('tunnel-exiting')
      }
      
      // Show target section after old one has exited
      if (sectionId === 'header') {
        if (header) {
          header.classList.remove('header-hidden')
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
      } else {
        if (header) header.classList.add('header-hidden')
        if (targetSection) {
          targetSection.classList.add('section-show')
        }
      }
      
      // Scroll to target section after it appears
      if (sectionId !== 'header' && targetSection) {
        setTimeout(() => {
          targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }, 450)
      }
      
      // Complete transition after animation
      setTimeout(() => {
        document.body.classList.remove('tunnel-transition')
        setIsTransitioning(false)
      }, 900) // Wait for enter animation to complete (0.9s)
    }, 800) // Wait for exit animation to complete (0.8s)
  }

  return (
    <>
      <NeuralBackground />
      <Navigation activeSection={activeSection} onSectionChange={handleSectionChange} />
      <div className="app-container">
        <Header onSectionChange={handleSectionChange} />
        <About onSectionChange={handleSectionChange} />
        <Resume />
        <Experience />
        <Education />
        <Portfolio />
        <Contact />
      </div>
    </>
  )
}

export default App

