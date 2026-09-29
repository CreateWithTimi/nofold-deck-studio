import { Link, useParams } from 'react-router-dom'
import DeckGallery from '../components/deck/DeckGallery.jsx'
import RelatedDecks from '../components/deck/RelatedDecks.jsx'
import Button from '../components/ui/Button.jsx'
import { getDeckBySlug, getDeckOrderHref } from '../data/decks.js'

function DeckDetails() {
  const { deckSlug } = useParams()
  const deck = getDeckBySlug(deckSlug)
  const deckName = deck?.name || deck?.title
  const detailCtaLabel = deck?.detailCtaLabel || deck?.ctaLabel || 'Ask About This Deck'
  const detailCtaHref = getDeckOrderHref(deck)
  const isExternalCta = detailCtaHref?.startsWith('http')

  if (!deck) {
    return (
      <main className="deck-detail deck-detail--not-found">
        <section className="page-section deck-detail__not-found">
          <span className="page-kicker">Deck not found</span>
          <h1>This deck is not available.</h1>
          <p>The catalogue does not currently include a deck for this link.</p>
          <Link className="button" to="/editions">
            Return to Editions
          </Link>
        </section>
      </main>
    )
  }

  return (
    <main className="deck-detail">
      <section className="deck-detail-hero" aria-labelledby="deck-detail-title">
        <div className="deck-detail-hero__copy">
          <span className="page-kicker">{deck.typeLabel}</span>
          <div className="deck-detail-hero__heading">
            <h1 id="deck-detail-title">{deckName}</h1>
            <p>{deck.positioning || deck.summary}</p>
          </div>
          {deck.priceLabel ? (
            <p className="deck-detail-hero__price">{deck.priceLabel}</p>
          ) : null}
          <div className="deck-detail-hero__actions">
            <Button
              aria-label={
                isExternalCta
                  ? `${detailCtaLabel} on WhatsApp (opens in a new tab)`
                  : undefined
              }
              href={isExternalCta ? detailCtaHref : undefined}
              rel={isExternalCta ? 'noopener noreferrer' : undefined}
              target={isExternalCta ? '_blank' : undefined}
              to={isExternalCta ? undefined : detailCtaHref}
            >
              {detailCtaLabel}
            </Button>
            {deck.secondaryCtaLabel ? (
              <Button to="/build-deck" variant="secondary">
                {deck.secondaryCtaLabel}
              </Button>
            ) : null}
          </div>
        </div>

        {deck.heroImage ? (
          <figure className="deck-detail-hero__media">
            <img src={deck.heroImage} alt={`${deckName} product image`} />
          </figure>
        ) : null}
      </section>

      <DeckGallery deck={deck} />

      {deck.useCases?.length ? (
        <section className="deck-use-cases" aria-labelledby="deck-use-cases-title">
          <div className="deck-detail__section-heading">
            <span className="page-kicker">Use Cases</span>
            <h2 id="deck-use-cases-title">Made for moments like…</h2>
          </div>
          <ul className="deck-use-cases__list">
            {deck.useCases.map((useCase) => (
              <li key={useCase}>{useCase}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {deck.salesDescription ? (
        <section className="deck-sales-note" aria-labelledby="deck-sales-title">
          <div className="deck-detail__section-heading">
            <span className="page-kicker">Positioning</span>
            <h2 id="deck-sales-title">Why bring this to the table?</h2>
          </div>
          <p>{deck.salesDescription}</p>
        </section>
      ) : null}

      <section className="deck-overview" aria-labelledby="deck-overview-title">
        <div className="deck-detail__section-heading">
          <span className="page-kicker">Overview</span>
          <h2 id="deck-overview-title">Deck positioning</h2>
        </div>
        <div className="deck-overview__grid">
          <div>
            <span>Type</span>
            <strong>{deck.typeLabel}</strong>
          </div>
          <div>
            <span>Project Type</span>
            <strong>{deck.projectType}</strong>
          </div>
          <div>
            <span>Summary</span>
            <p>{deck.summary}</p>
          </div>
        </div>
      </section>

      <RelatedDecks currentSlug={deck.slug} />
    </main>
  )
}

export default DeckDetails
