import { useState } from 'react'
import { Link } from 'react-router-dom'

function CustomWorkCard({ isPriority = false, project }) {
  const [imageFailed, setImageFailed] = useState(false)
  const showImage = project.heroImage && !imageFailed
  const description = project.summary || project.shortDescription

  return (
    <article className="custom-work-card">
      <Link
        aria-label={`View ${project.name} project`}
        className="custom-work-card__link"
        to={`/custom-work/${project.slug}`}
      >
        <div
          className={`custom-work-card__media custom-work-card__media--${project.visualTheme}`}
        >
          {showImage ? (
            <img
              alt={`${project.name} custom deck project`}
              decoding="async"
              fetchPriority={isPriority ? 'high' : 'auto'}
              loading={isPriority ? 'eager' : 'lazy'}
              onError={() => setImageFailed(true)}
              src={project.heroImage}
            />
          ) : (
            <div className="custom-work-card__fallback" aria-hidden="true">
              <span>CWT Custom</span>
              <div className="custom-work-card__deck custom-work-card__deck--back" />
              <div className="custom-work-card__deck custom-work-card__deck--front">
                <strong>{project.category.split(' / ')[0]}</strong>
              </div>
            </div>
          )}
        </div>

        <div className="custom-work-card__copy">
          <span className="custom-work-card__category">{project.category}</span>
          <h2>{project.name}</h2>
          <p>{description}</p>
          <span className="custom-work-card__cta">
            {project.ctaLabel || 'View Project'}
          </span>
        </div>
      </Link>
    </article>
  )
}

function CustomWorkGrid({ projects }) {
  return (
    <div className="custom-work-grid">
      {projects.map((project, index) => (
        <CustomWorkCard
          isPriority={index === 0}
          key={project.slug}
          project={project}
        />
      ))}
    </div>
  )
}

export default CustomWorkGrid
