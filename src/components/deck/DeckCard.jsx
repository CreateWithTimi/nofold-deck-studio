import { useState } from 'react'
import { Link } from 'react-router-dom'

function DeckCard({ deck }) {
  const [imageFailed, setImageFailed] = useState(false)
  const deckName = deck.name || deck.title
  const ctaLabel = deck.ctaLabel || 'View Deck'
  const visualTheme = deck.visualTheme || 'default'
  const target = ctaLabel === 'Create Something Like This' ? '/build-deck' : `/decks/${deck.slug}`
  const showImage = deck.heroImage && !imageFailed

  return (
    <Link
      className={`deck-card${showImage ? ' deck-card--has-image' : ''}`}
      to={target}
    >
      <div
        className={`deck-card__media deck-card__media--${visualTheme}`}
        aria-hidden="true"
      >
        {showImage ? (
          <img
            className="deck-card__image"
            src={deck.heroImage}
            alt=""
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <>
            <div className="deck-card__shadow" />
            <div className="deck-card__box">
              <span>{deckName}</span>
            </div>
            <div className="deck-card__single deck-card__single--rear" />
            <div className="deck-card__single deck-card__single--front" />
          </>
        )}
      </div>
      <div className="deck-card__meta">
        <span className="deck-card__eyebrow">{deck.typeLabel}</span>
        <h3>{deckName}</h3>
        {deck.priceLabel ? (
          <span className="deck-card__price">{deck.priceLabel}</span>
        ) : null}
        {deck.summary ? <p>{deck.summary}</p> : null}
        <span className="deck-card__cta">{ctaLabel}</span>
      </div>
    </Link>
  )
}

export default DeckCard
