import './Resume.css'

const Resume = () => {
  return (
    <section id="resume" className="resume">
      <div className="container">
        <div className="section-title">
          <h2>Resume</h2>
          <p>Check My Resume</p>
        </div>
        <br />
        <div className="row">
          <div className="col text-center">
            <div className="pdf-icon">
              <i className="bi bi-filetype-pdf"></i>
            </div>
            <a href="/M Uzair Khan.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-pdf me-2">
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume

