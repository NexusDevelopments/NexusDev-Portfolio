import Header from './components/Header'
import Clock from './components/Clock'
import ProjectCard from './components/ProjectCard'

const projects = [
  {
    title: 'Clockwatch',
    description: 'A sleek time-tracking web app with a clean UI.',
    url: 'https://clockwatch.vercel.app'
  },
  {
    title: 'Portfolio',
    description: 'This portfolio — rebuilt for clarity and performance.',
    url: '#'
  }
]

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="container">
        <section className="hero">
          <div className="hero-inner">
            <h1>Hi — I&apos;m NexusDev</h1>
            <p className="lead">I build focused, fast web experiences.</p>
            <div className="hero-ctas">
              <a className="btn" href="#projects">View Projects</a>
              <a className="btn ghost" href="#about">About</a>
            </div>
          </div>
          <aside className="hero-side">
            <Clock />
          </aside>
        </section>

        <section id="projects" className="projects">
          <h2>Projects</h2>
          <div className="projects-grid">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </section>

        <section id="about" className="about">
          <h2>About</h2>
          <p>
            I focus on clean interfaces, accessibility, and performance. This
            site is a compact React + Vite starter tailored for hosting on
            GitHub Pages or Vercel.
          </p>
        </section>

        <footer className="footer">
          <p>Made by NexusDev · Built with React</p>
        </footer>
      </main>
    </div>
  )
}
