import DeckCard from './DeckCard.jsx'
import { getAllDecks } from '../../data/decks.js'

function RelatedDecks({ currentSlug }) {
  const relatedDecks = getAllDecks()
    .filter((deck) => deck.slug !== currentSlug)
    .slice(0, 3)

  if (!relatedDecks.length) {
    return null
  }

  return (
    <section className="related-decks" aria-labelledby="related-decks-title">
      <div className="deck-detail__section-heading">
        <span className="page-kicker">Catalogue</span>
        <h2 id="related-decks-title">More for the table</h2>
      </div>
      <div className="related-decks__grid">
        {relatedDecks.map((deck) => (
          <DeckCard deck={deck} key={deck.slug} />
        ))}
      </div>
    </section>
  )
}

export default RelatedDecks
