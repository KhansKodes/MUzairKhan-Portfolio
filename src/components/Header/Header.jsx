import TypingEffect from '../TypingEffect'
import './Header.css'

const Header = ({ onSectionChange }) => {
  const handleScrollClick = (sectionId) => {
    onSectionChange(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <header id="header">
      <div className="container">
        <div className="hero-content" data-aos="fade-up" data-aos-duration="1000">
          <div className="hero-text" data-aos="fade-right" data-aos-duration="1000">
            <h1 className="hero-title">
              <span className="name">Muhammad Uzair Khan</span>
            </h1>
            <h2 className="hero-subtitle">
              <TypingEffect />
            </h2>
            <p className="hero-description">
              Backend Developer & AI/ML Expert specializing in FastAPI, Django, OpenAI APIs, and PostgreSQL. 
              Building intelligent solutions that drive innovation.
            </p>
            <div className="hero-buttons">
              <a 
                href="#portfolio" 
                className="btn btn-primary btn-lg scroll-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollClick('portfolio')
                }}
              >
                <span>View My Work</span>
                <i className="bi bi-arrow-right"></i>
              </a>
              <a 
                href="#contact" 
                className="btn btn-outline btn-lg scroll-link"
                onClick={(e) => {
                  e.preventDefault()
                  handleScrollClick('contact')
                }}
              >
                <span>Get In Touch</span>
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>
          
          <div className="hero-image" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="image-container">
              <img src="/assets/img/me-Photoroom.jpg" alt="Muhammad Uzair Khan" className="profile-img" />
              <div className="image-glow"></div>
            </div>
          </div>
        </div>

        <div className="social-links" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
          <a href="https://github.com/KhansKodes" className="github" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/m-uzair-khann" className="linkedin" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

