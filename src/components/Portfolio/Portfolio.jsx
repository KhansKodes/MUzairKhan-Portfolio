import './Portfolio.css'

const Portfolio = () => {
  const projects = [
    {
      title: 'Strive Foundation',
      description: 'Production web app: public landing page plus secure portals for patients, volunteers, and donors. Role-based JWT auth, cloud media storage, and admin tools. Deployed on Google Cloud with CI/CD for zero-downtime releases.',
      tech: ['React', 'Django', 'PostgreSQL', 'Cloud Run', 'Docker'],
      link: 'https://strivefoundation.co',
      linkText: 'Live Demo'
    },
    {
      title: 'Flashspark (Personalized Learning Platform)',
      description: 'AI-powered flashcard and quiz generator using FastAPI, OpenAI, and Firebase. Enables dynamic quiz creation from user-provided content; improved personalized learning experience for 20+ testers.',
      tech: ['FastAPI', 'OpenAI', 'Firebase', 'PostgreSQL', 'Vercel'],
      link: 'https://flashspark-cust.vercel.app/',
      linkText: 'Live Demo'
    },
    {
      title: 'Persuasive Techniques Detector (Samsung Innovation Campus)',
      description: 'Fine-tuned Transformer models for propaganda detection using Hugging Face; built dataset pipeline and evaluation metrics to identify persuasive techniques in memes.',
      tech: ['Hugging Face', 'Python', 'Scikit-Learn', 'Transformers'],
      link: 'https://github.com/KhansKodes/Detection-of-Persuasion-Techniques-in-Memes.git',
      linkText: 'GitHub'
    },
    {
      title: 'RAG-based AI Assistant (Document Retrieval & Chat Interface)',
      description: 'Built an AI-powered RAG system that auto-ingests Google Drive docs and enables real-time, context-aware chat responses using OpenAI, Supabase, and n8n.',
      tech: ['OpenAI', 'Supabase', 'n8n', 'Python'],
      link: 'https://github.com/KhansKodes/RAG-based-AI-Assistant-with-Document-Retrieval-Chat-Interface.git',
      linkText: 'GitHub'
    },
    {
      title: 'Travel Assistant (AI Trip Planner Chatbot)',
      description: 'GPT powered travel assistant with conversational memory (Firebase). FastAPI REST backend, responsive web UI, real time chat feel with typing indicators, session management, and solid error handling.',
      tech: ['FastAPI', 'OpenAI', 'Firebase', 'Python', 'HTML/CSS/JS'],
      link: 'https://github.com/KhansKodes/Travel_Assistant.git',
      linkText: 'GitHub'
    },
    {
      title: 'TWHC (Healthcare Marketing Landing)',
      description: 'Lightning fast site built with React + Vite and deployed on Vercel. Mobile first, semantic, and accessibility minded with near instant loads. Minimal SPA architecture, HMR enabled dev workflow, and production ESLint rules.',
      tech: ['React', 'Vite', 'Vercel', 'ESLint', 'SPA'],
      link: 'https://twhc.vercel.app/',
      linkText: 'Live Demo'
    },
    {
      title: 'Flowqet',
      subtitle: 'Personalized budget web app',
      description: 'Set a monthly cap, add categorized expenses, and track spent vs. remaining in real time.',
      tech: ['NEXT.JS', 'TYPESCRIPT', 'TAILWIND CSS', 'SHADCN UI', 'FIREBASE RTDB', 'FIREBASE AUTH', 'RECHARTS'],
      link: 'https://flowqet.vercel.app',
      linkText: 'Live Demo'
    },
    {
      title: 'Borrowix',
      subtitle: 'Peer to peer rentals marketplace',
      description: 'List items, get AI price suggestions, chat with borrowers/owners, and build trust with reviews.',
      tech: ['NEXT.JS', 'TYPESCRIPT', 'FIREBASE (FIRESTORE, AUTH, STORAGE)', 'GENKIT (GOOGLE AI)', 'TAILWIND CSS', 'SHADCN/UI', 'CLOUDINARY'],
      link: 'https://borrowfix.vercel.app',
      linkText: 'Live Demo'
    }
  ]

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>My Works</p>
        </div>

        <div className="row">
          {projects.map((project, index) => (
            <div key={index} className="col-lg-4 col-md-6 mb-4">
              <div 
                className="project-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                style={{ '--index': index }}
              >
                <div className="project-content">
                  <h4 className="project-title">
                    {project.title}
                    {project.subtitle && (
                      <>
                        <br />
                        <small>{project.subtitle}</small>
                      </>
                    )}
                  </h4>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                      <i className="bx bx-link"></i> {project.linkText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

