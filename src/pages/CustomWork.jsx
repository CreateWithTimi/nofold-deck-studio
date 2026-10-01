import CustomWorkGrid from '../components/custom-work/CustomWorkGrid.jsx'
import Button from '../components/ui/Button.jsx'
import PageIntro from '../components/ui/PageIntro.jsx'
import { customWorkProjects } from '../data/customWork.js'

function CustomWork() {
  return (
    <div className="custom-work-page">
      <section className="page-section custom-work-page__intro">
        <PageIntro kicker="CUSTOM WORK" title="Made for their table.">
          Decks created for brands, events, communities and occasions — each
          built around the people using them.
        </PageIntro>
      </section>

      <section className="custom-work-showcase" aria-label="Custom work projects">
        <CustomWorkGrid projects={customWorkProjects} />
      </section>

      <section className="custom-work-cta" aria-labelledby="custom-work-cta-title">
        <div className="custom-work-cta__inner">
          <div>
            <span className="page-kicker">Your Table</span>
            <h2 id="custom-work-cta-title">Want something made for your people?</h2>
            <p>
              Tell us the occasion, audience or idea and we’ll help shape it
              into a deck.
            </p>
          </div>
          <Button to="/build-deck">Build Your Deck</Button>
        </div>
      </section>
    </div>
  )
}

export default CustomWork
