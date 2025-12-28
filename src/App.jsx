import Header from './components/Header'
import ProjectCard from './components/ProjectCard'

const projects = [
  {
    title: 'Clockwatch',
    description: 'A sleek time-tracking web app with a clean UI.',
    url: 'https://clockwatch.vercel.app'
  }
]

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <section id="about" className="about">
          <h2>About NexusDev</h2>
          <p>
            Hi — I'm NexusDev. I build focused, accessible web experiences
            using modern tools.
          </p>
        </section>

        <section id="projects" className="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        <footer className="footer">
          <p>Made by NexusDev · Built with React</p>
        </footer>
      </main>
    </div>
  )
}
