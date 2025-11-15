import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'IT & Web Support Officer',
      period: 'Aug 2025 - Present',
      company: 'Strive Eradication of Disability Foundation',
      responsibilities: [
        'Supported and maintained web properties, deployments, and integrations.',
        'Resolved IT support requests and improved day‑to‑day operational workflows.'
      ]
    },
    {
      title: 'Software Engineer',
      period: 'Feb 2025 - July 2025',
      company: 'Kodevs',
      responsibilities: [
        'Designed and maintained backend systems in Django and REST APIs.',
        'Collaborated with frontend teams and managed database performance.'
      ]
    },
    {
      title: 'Backend Developer Intern',
      period: 'July 2024 - Aug 2024',
      company: 'Pakistan International Airlines',
      responsibilities: [
        'Built and maintained backend services; integrated PostgreSQL and REST endpoints.'
      ]
    }
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="row experience-layout">
          <div className="col-lg-4 experience-left" data-aos="fade-right" data-aos-duration="800">
            <div className="experience-image-container">
              <img src="/assets/img/me.jpg" className="img-fluid experience-img" alt="Muhammad Uzair Khan" />
            </div>
            <div className="experience-title-wrapper">
              <div className="section-title experience-section-title">
                <h2>Experience</h2>
                <p>My Professional Journey</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 experience-content" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
            <h3 className="experience-title">Professional Experience</h3>
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="experience-item" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                style={{ '--index': index }}
              >
                <h4>{exp.title}</h4>
                <h5>{exp.period}</h5>
                <p><em>{exp.company}</em></p>
                <ul>
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

