import { useEffect } from 'react'
import './About.css'

const About = ({ onSectionChange }) => {
  useEffect(() => {
    // Initialize PureCounter if available
    if (window.PureCounter) {
      new window.PureCounter()
    }
  }, [])

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-me">
          <div className="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right" data-aos-duration="800">
              <div className="about-image-container">
                <img src="/assets/img/me.jpg" className="img-fluid about-img" alt="Muhammad Uzair Khan" />
                <div className="about-image-overlay">
                  <div className="about-stats">
                    <div className="stat-item">
                      <span className="stat-number">1+</span>
                      <span className="stat-label">Years Experience</span>
                    </div>
                    <div className="stat-item">
                      <span className="stat-number">23+</span>
                      <span className="stat-label">Projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-duration="800" data-aos-delay="200">
              <h3>Software Engineer</h3>
              <p className="fst-italic">
                Results-driven Backend Developer and AI/ML Expert with hands-on experience in building production-ready FastAPI and Django applications integrated with OpenAI APIs, Firebase, and PostgreSQL. Skilled in designing scalable RESTful APIs, fine-tuning NLP models, and developing AI-powered automation tools. Adept at solving real-world problems with intelligent backend solutions, with a strong focus on AI agent frameworks and automation platforms.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+92 347 914 3285</span></li>
                    <li><i className="bi bi-chevron-right"></i> <strong>Location:</strong> <span>Pakistan</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span>mukhan3223@gmail.com</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="counts">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="count-box" style={{ '--index': 0 }}>
                <i className="bi bi-emoji-smile"></i>
                <span data-purecounter-start="0" data-purecounter-end="11" data-purecounter-duration="1" className="purecounter">11</span>
                <p>Happy Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box" style={{ '--index': 1 }}>
                <i className="bi bi-journal-richtext"></i>
                <span data-purecounter-start="0" data-purecounter-end="23" data-purecounter-duration="1" className="purecounter">23</span>
                <p>Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box" style={{ '--index': 2 }}>
                <i className="bi bi-headset"></i>
                <span data-purecounter-start="0" data-purecounter-end="400" data-purecounter-duration="1" className="purecounter">400</span>
                <p>Hours Of Support</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box" style={{ '--index': 3 }}>
                <i className="bi bi-award"></i>
                <span data-purecounter-start="0" data-purecounter-end="6" data-purecounter-duration="1" className="purecounter">6</span>
                <p>Awards</p>
              </div>
            </div>
          </div>
        </div>

        <div className="skills">
          <div className="section-title">
            <h2>Skills</h2>
          </div>

          <div className="skills-grid">
            <div className="skill-category" style={{ '--index': 0 }}>
              <h3 className="category-title">Backend Development</h3>
              <div className="skill-tags">
                <span className="skill-tag primary">Python</span>
                <span className="skill-tag primary">Django</span>
                <span className="skill-tag primary">FastAPI</span>
                <span className="skill-tag">PostgreSQL</span>
                <span className="skill-tag">REST APIs</span>
                <span className="skill-tag">GraphQL</span>
              </div>
            </div>

            <div className="skill-category" style={{ '--index': 1 }}>
              <h3 className="category-title">AI & Machine Learning</h3>
              <div className="skill-tags">
                <span className="skill-tag primary">OpenAI APIs</span>
                <span className="skill-tag primary">Hugging Face</span>
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">scikit-learn</span>
                <span className="skill-tag">NLP</span>
              </div>
            </div>

            <div className="skill-category" style={{ '--index': 2 }}>
              <h3 className="category-title">Cloud & DevOps</h3>
              <div className="skill-tags">
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">AWS</span>
                <span className="skill-tag">Firebase</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">CI/CD</span>
                <span className="skill-tag">Linux</span>
              </div>
            </div>

            <div className="skill-category" style={{ '--index': 3 }}>
              <h3 className="category-title">Data & Analytics</h3>
              <div className="skill-tags">
                <span className="skill-tag">Pandas</span>
                <span className="skill-tag">NumPy</span>
                <span className="skill-tag">Matplotlib</span>
                <span className="skill-tag">Seaborn</span>
                <span className="skill-tag">Jupyter</span>
                <span className="skill-tag">Data Visualization</span>
              </div>
            </div>
          </div>
        </div>

        <div className="services">
          <div className="section-title">
            <h2>Professional Services</h2>
            <p>What I Can Do For You</p>
          </div>

          <div className="row">
            <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
              <div className="icon-box" style={{ '--index': 0 }}>
                <div className="icon"><i className="bx bx-code-alt"></i></div>
                <h4><a href="">Backend Development</a></h4>
                <p>Building scalable and robust backend systems using Django, FastAPI, and PostgreSQL for production-ready applications.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
              <div className="icon-box" style={{ '--index': 1 }}>
                <div className="icon"><i className="bx bx-brain"></i></div>
                <h4><a href="">AI/ML Integration</a></h4>
                <p>Implementing AI-powered solutions using OpenAI APIs, Hugging Face Transformers, and custom ML models for intelligent automation.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
              <div className="icon-box" style={{ '--index': 2 }}>
                <div className="icon"><i className="bx bx-data"></i></div>
                <h4><a href="">Database Design</a></h4>
                <p>Designing and optimizing database schemas, managing PostgreSQL, Firebase, and Supabase for efficient data storage and retrieval.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box" style={{ '--index': 3 }}>
                <div className="icon"><i className="bx bx-network-chart"></i></div>
                <h4><a href="">RESTful APIs</a></h4>
                <p>Creating well-documented and efficient REST APIs with proper authentication, validation, and error handling for seamless integration.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box" style={{ '--index': 4 }}>
                <div className="icon"><i className="bx bx-cloud"></i></div>
                <h4><a href="">Cloud Deployment</a></h4>
                <p>Deploying applications on cloud platforms like Vercel, Google Cloud, and managing containerized applications with Docker.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
              <div className="icon-box" style={{ '--index': 5 }}>
                <div className="icon"><i className="bx bx-cog"></i></div>
                <h4><a href="">Automation Solutions</a></h4>
                <p>Building intelligent automation workflows using n8n, Make.com, and custom scripts to streamline business processes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

