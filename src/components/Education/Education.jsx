import './Education.css'

const Education = () => {
  const education = [
    {
      title: 'BS Computer Science',
      period: '2021 - 2025',
      institution: 'Capital University of Science and Technology (CUST)'
    },
    {
      title: 'FSc Pre‑Engineering',
      period: '2018 - 2020',
      institution: 'Peshawar Model Degree College Boys‑I'
    },
    {
      title: 'Matriculation',
      period: '2018',
      institution: 'Peshawar Model School Charsadda'
    }
  ]

  const certifications = [
    {
      title: 'Samsung Innovation Campus — Artificial Intelligence Bootcamp',
      period: 'Oct 2024 – Dec 2024'
    },
    {
      title: "Harvard CS50's Artificial Intelligence with Python",
      period: 'Feb 2025'
    }
  ]

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-title">
          <h2>Education</h2>
          <p>My Academic Background & Certifications</p>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <h3 className="education-title">Education</h3>
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="education-item" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                style={{ '--index': index }}
              >
                <h4>{edu.title}</h4>
                <h5>{edu.period}</h5>
                <p><em>{edu.institution}</em></p>
              </div>
            ))}
          </div>
          <div className="col-lg-6">
            <h3 className="education-title">Certifications</h3>
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="education-item" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                style={{ '--index': index + education.length }}
              >
                <h4>{cert.title}</h4>
                <h5>{cert.period}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

