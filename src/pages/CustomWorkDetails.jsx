import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../components/ui/Button.jsx'
import { getCustomWorkBySlug } from '../data/customWork.js'

function CustomWorkDetails() {
  const { projectSlug } = useParams()
  const project = getCustomWorkBySlug(projectSlug)
  const [imageFailed, setImageFailed] = useState(false)

  if (!project) {
    return (
      <main className="custom-work-detail custom-work-detail--not-found">
        <section className="page-section">
          <span className="page-kicker">Project not found</span>
          <h1>This custom project is not available.</h1>
          <p>The custom-work catalogue does not include a project for this link.</p>
          <Link className="button" to="/custom-work">
            Return to Custom Work
          </Link>
        </section>
      </main>
    )
  }

  const showImage = project.heroImage && !imageFailed
  const description =
    project.positioning || project.summary || project.shortDescription
  const studioRole = project.studioRole || project.contribution
  const projectLabels = project.optionalLabels || project.editorialLabels

  return (
    <main className="custom-work-detail">
      <section className="custom-work-detail__hero">
        <div className="custom-work-detail__copy">
          <span className="page-kicker">
            {project.typeLabel || project.category}
          </span>
          <h1>{project.name}</h1>
          <p>{description}</p>
          {project.isPlaceholder ? (
            <small>Project photography and verified details will be added here.</small>
          ) : null}
          <Button to="/build-deck">Create Something Like This</Button>
        </div>

        <div
          className={`custom-work-detail__media custom-work-card__media--${project.visualTheme}`}
        >
          {showImage ? (
            <img
              alt={`${project.name} custom deck project`}
              decoding="async"
              fetchPriority="high"
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
      </section>

      {project.brief ? (
        <section
          className="custom-work-detail__overview"
          aria-labelledby="custom-work-overview-title"
        >
          <div className="custom-work-detail__section-heading">
            <span className="page-kicker">Project Brief</span>
            <h2 id="custom-work-overview-title">Built for conversation.</h2>
          </div>
          <div className="custom-work-detail__overview-copy">
            {studioRole ? (
              <dl className="custom-work-detail__meta">
                <div>
                  <dt>For</dt>
                  <dd>{project.clientOrOccasion}</dd>
                </div>
                <div>
                  <dt>Project type</dt>
                  <dd>{project.projectType}</dd>
                </div>
                <div>
                  <dt>Studio role</dt>
                  <dd>{studioRole}</dd>
                </div>
              </dl>
            ) : null}
            <p>{project.brief}</p>
            {project.overview?.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {project.caseStudySections?.length ? (
              <div className="custom-work-detail__case-sections">
                {project.caseStudySections.map((section) => (
                  <section key={section.title}>
                    <h3>{section.title}</h3>
                    <p>{section.body}</p>
                  </section>
                ))}
              </div>
            ) : null}
            {project.proofPoint ? (
              <aside className="custom-work-detail__proof">
                <span>Project proof</span>
                <p>{project.proofPoint}</p>
              </aside>
            ) : null}
            {project.deliverables?.length ? (
              <div className="custom-work-detail__deliverables">
                <h3>Deliverables</h3>
                <ul>
                  {project.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            {projectLabels?.length ? (
              <ul className="custom-work-detail__labels">
                {projectLabels.map((label) => (
                  <li key={label}>{label}</li>
                ))}
              </ul>
            ) : null}
          </div>
        </section>
      ) : null}

      {project.galleryImages.length ? (
        <section
          className="custom-work-detail__gallery"
          aria-labelledby="custom-work-gallery-title"
        >
          <div className="custom-work-detail__section-heading">
            <span className="page-kicker">Project Gallery</span>
            <h2 id="custom-work-gallery-title">Physical product storytelling.</h2>
          </div>
          <div className="custom-work-detail__gallery-grid">
            {project.galleryImages.map((image, index) => (
              <img
                alt={`${project.name} project detail ${index + 1}`}
                key={image}
                loading="lazy"
                src={image}
              />
            ))}
          </div>
        </section>
      ) : null}
    </main>
  )
}

export default CustomWorkDetails
