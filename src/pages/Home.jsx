import DeckGrid from '../components/deck/DeckGrid.jsx'
import Button from '../components/ui/Button.jsx'
import PageIntro from '../components/ui/PageIntro.jsx'
import { customDeckProjects, editionDecks } from '../data/decks.js'

function Home() {
  return (
    <>
      <section className="page-section">
        <PageIntro kicker="Deck Studio" title="NO FOLD Deck Studio">
          A foundation for showcasing original NO FOLD Editions and custom
          physical card deck projects.
        </PageIntro>
        <div className="cluster" style={{ marginTop: 'var(--space-5)' }}>
          <Button to="/editions">Explore Editions</Button>
          <Button to="/build-deck" variant="secondary">
            Request a Custom Deck
          </Button>
        </div>
      </section>

      <section className="page-section">
        <PageIntro kicker="Editions" title="Original NO FOLD releases" />
        <DeckGrid
          decks={editionDecks}
          emptyMessage="NO FOLD Edition product entries will be added here when approved content is available."
        />
      </section>

      <section className="page-section">
        <PageIntro kicker="Custom Decks" title="Portfolio projects" />
        <DeckGrid
          decks={customDeckProjects}
          emptyMessage="Custom deck case studies will be added here when real project content is available."
        />
      </section>
    </>
  )
}

export default Home
