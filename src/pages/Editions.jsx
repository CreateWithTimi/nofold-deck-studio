import DeckGrid from '../components/deck/DeckGrid.jsx'
import PageIntro from '../components/ui/PageIntro.jsx'
import { editionDecks } from '../data/decks.js'

function Editions() {
  return (
    <section className="page-section">
      <PageIntro kicker="NO FOLD Editions" title="Original game editions">
        Consumer NO FOLD card game releases live here. Prices, availability, and
        edition details should only be added when confirmed.
      </PageIntro>
      <DeckGrid
        decks={editionDecks}
        emptyMessage="Edition entries are not populated yet."
      />
    </section>
  )
}

export default Editions
