import Button from '../components/ui/Button.jsx'
import PageIntro from '../components/ui/PageIntro.jsx'

function NotFound() {
  return (
    <section className="page-section">
      <PageIntro kicker="404" title="Page not found">
        The page you are looking for is not part of the studio foundation.
      </PageIntro>
      <div style={{ marginTop: 'var(--space-5)' }}>
        <Button to="/">Return home</Button>
      </div>
    </section>
  )
}

export default NotFound
