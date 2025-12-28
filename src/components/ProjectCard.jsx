export default function ProjectCard({ title, description, url }) {
  return (
    <article className="card">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <div className="card-actions">
        <a className="btn" href={url} target="_blank" rel="noopener noreferrer">
          View
        </a>
      </div>
    </article>
  )
}
