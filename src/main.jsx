import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

const styles = `
:root{--bg:#f7fbff;--card:#ffffff;--muted:#f1f5f9;--primary:#0b5fff;--text:#071233}
*{box-sizing:border-box}
html,body,#root{height:100%;margin:0}
body{font-family:Inter,system-ui,-apple-system,'Segoe UI',Roboto,Arial;background:var(--bg);color:var(--text);-webkit-font-smoothing:antialiased}
.wrap{min-height:100%;display:flex;flex-direction:column}
.site-header{display:flex;justify-content:space-between;align-items:center;padding:1rem 1.5rem}
.brand{display:flex;flex-direction:column}
.brand h1{margin:0;color:var(--primary);font-size:1.25rem}
.brand p{margin:0;color:rgba(7,18,51,0.65);font-size:0.85rem}
.nav a{margin-left:1rem;color:var(--text);text-decoration:none}
.container{max-width:980px;margin:0 auto;padding:2rem}
.hero{display:flex;gap:2rem;align-items:center;background:linear-gradient(180deg,#ffffff,#fbfdff);padding:1.25rem;border-radius:12px;border:1px solid rgba(11,95,255,0.06)}
.hero-left h2{margin:0 0 0.5rem 0;font-size:1.75rem}
.lead{margin:0;color:#475569}
.ctas{margin-top:1rem}
.btn{display:inline-block;padding:0.55rem 0.9rem;border-radius:8px;background:var(--primary);color:white;text-decoration:none;font-weight:700;margin-right:0.5rem}
.clock-card{margin-left:auto;min-width:180px;padding:1rem;border-radius:10px;background:var(--card);box-shadow:0 6px 18px rgba(11,95,255,0.06);text-align:center}
.time{font-size:1.4rem;font-weight:700}
.date{color:#64748b;font-size:0.9rem}
.projects{margin-top:1.5rem}
.grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem;margin-top:1rem}
.card{background:var(--card);padding:1rem;border-radius:10px;border:1px solid rgba(7,18,51,0.04)}
.card h3{margin:0 0 0.25rem 0;color:var(--primary)}
.card p{margin:0 0 0.75rem 0;color:#475569}
.footer{padding:2rem;text-align:center;color:#64748b}
@media(max-width:800px){.hero{flex-direction:column}.clock-card{margin-left:0;width:100%}}
`

// inject styles once
if (!document.getElementById('nexusdev-styles')) {
  const s = document.createElement('style')
  s.id = 'nexusdev-styles'
  s.innerHTML = styles
  document.head.appendChild(s)
}

function useClock() {
  const [now, setNow] = useState(new Date())
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  return now
}

function ClockCard() {
  const now = useClock()
  return (
    <div className="clock-card">
      <div className="time">{now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}</div>
      <div className="date">{now.toLocaleDateString()}</div>
    </div>
  )
}

function Project({ title, description, url }) {
  return (
    <article className="card">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div>
        <a className="btn" href={url} target="_blank" rel="noopener noreferrer">View</a>
      </div>
    </article>
  )
}

export default function App() {
  const projects = [
    { title: 'Clockwatch', description: 'A focused time app with clean UI.', url: 'https://clockwatch.vercel.app' },
    { title: 'This Portfolio', description: 'Rebuilt as a single-file Vite app.', url: '#' }
  ]

  return (
    <div className="wrap">
      <header className="site-header">
        <div className="brand">
          <h1>NexusDev</h1>
          <p>Web developer</p>
        </div>
        <nav className="nav">
          <a href="#projects">Projects</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main className="container">
        <section className="hero">
          <div className="hero-left">
            <h2>Hi — I build focused, accessible web apps</h2>
            <p className="lead">Fast, clear interfaces inspired by modern tooling.</p>
            <div className="ctas">
              <a className="btn" href="#projects">See Projects</a>
              <a className="btn" href="#about">About</a>
            </div>
          </div>
          <ClockCard />
        </section>

        <section id="projects" className="projects">
          <h2>Projects</h2>
          <div className="grid">
            {projects.map((p) => (
              <Project key={p.title} {...p} />
            ))}
          </div>
        </section>

        <section id="about" className="about">
          <h2>About</h2>
          <p>
            I focus on clarity, accessibility, and performance. This single-file
            build keeps the project tiny and easy to deploy to Vercel or GitHub Pages.
          </p>
        </section>
      </main>

      <footer className="footer">Made by NexusDev · Built with React + Vite</footer>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
