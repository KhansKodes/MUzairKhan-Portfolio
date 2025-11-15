import { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation = ({ activeSection, onSectionChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'header', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
  ]

  const handleNavClick = (e, sectionId) => {
    e.preventDefault()
    onSectionChange(sectionId)
    setIsMobileMenuOpen(false)
    document.body.style.overflow = ''
    
    // Scroll to section
    const element = document.getElementById(sectionId)
    if (element) {
      if (sectionId === 'header') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  const toggleMobileMenu = (e) => {
    e.preventDefault()
    setIsMobileMenuOpen(!isMobileMenuOpen)
    document.body.style.overflow = isMobileMenuOpen ? '' : 'hidden'
  }

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMobileMenuOpen && !e.target.closest('.navbar') && !e.target.closest('.navbar-mobile')) {
        setIsMobileMenuOpen(false)
        document.body.style.overflow = ''
      }
    }

    const handleEscape = (e) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
        document.body.style.overflow = ''
      }
    }

    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav id="navbar" className="navbar">
        <div className="container">
          <div className="nav-brand">
            <a 
              href="#header" 
              className="brand-link scroll-link"
              onClick={(e) => handleNavClick(e, 'header')}
            >
              Muhammad Uzair Khan
            </a>
          </div>
          
          <ul className="nav-menu">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  className={`nav-link scroll-link ${activeSection === item.id ? 'active' : ''}`}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="nav-toggle">
            <i 
              className={`bi ${isMobileMenuOpen ? 'bi-x' : 'bi-list'} mobile-nav-toggle`}
              onClick={toggleMobileMenu}
            ></i>
          </div>
        </div>
      </nav>

      <div className={`navbar-mobile ${isMobileMenuOpen ? 'active' : ''}`}>
        <button 
          className="mobile-menu-close"
          onClick={toggleMobileMenu}
          aria-label="Close menu"
        >
          <i className="bi bi-x"></i>
        </button>
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                className={`nav-link scroll-link ${activeSection === item.id ? 'active' : ''}`}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Navigation

