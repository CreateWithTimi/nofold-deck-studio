import { Link } from 'react-router-dom'

function DeckCard({ deck }) {
  return (
    <Link className="deck-card" to={`/decks/${deck.slug}`}>
      <div className="deck-card__media" aria-hidden="true" />
      <div className="deck-card__meta">
        <span className="deck-card__eyebrow">{deck.typeLabel}</span>
        <h3>{deck.title}</h3>
        {deck.summary ? <p>{deck.summary}</p> : null}
        {deck.price ? <strong>{deck.price}</strong> : null}
      </div>
    </Link>
  )
}

export default DeckCard
