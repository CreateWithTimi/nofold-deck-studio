import { Link, useParams } from 'react-router-dom'
import PageIntro from '../components/ui/PageIntro.jsx'
import { getDeckBySlug } from '../data/decks.js'

function DeckDetails() {
  const { deckSlug } = useParams()
  const deck = getDeckBySlug(deckSlug)

  if (!deck) {
    return (
      <section className="page-section">
        <PageIntro kicker="Deck not found" title="This deck is not available" />
        <p>
          <Link to="/editions">Return to editions</Link>
        </p>
      </section>
    )
  }

  return (
    <section className="page-section">
      <PageIntro kicker={deck.typeLabel} title={deck.title}>
        {deck.summary}
      </PageIntro>
    </section>
  )
}

export default DeckDetails
