import CatalogueGrid from '../components/catalogue/CatalogueGrid.jsx'
import PageIntro from '../components/ui/PageIntro.jsx'
import { customDeckProjects, editionDecks } from '../data/decks.js'

function Editions() {
  return (
    <div className="catalogue-page">
      <section className="page-section catalogue-page__intro">
        <PageIntro kicker="EDITIONS" title="Find your table.">
          Original NO FOLD games and conversation decks designed for different
          kinds of people, moods and moments.
        </PageIntro>
      </section>

      <CatalogueGrid
        title="NO FOLD Editions"
        decks={editionDecks}
        emptyMessage="NO FOLD Edition entries are not populated yet."
      />

      <CatalogueGrid
        title="Conversation Decks"
        decks={customDeckProjects}
        emptyMessage="Conversation deck entries are not populated yet."
      />
    </div>
  )
}

export default Editions
