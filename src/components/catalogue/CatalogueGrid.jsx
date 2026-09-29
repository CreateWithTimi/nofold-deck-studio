import DeckCard from '../deck/DeckCard.jsx'

function CatalogueGrid({ decks, emptyMessage, title }) {
  return (
    <section className="catalogue-section" aria-labelledby={`${title}-title`}>
      <div className="catalogue-section__inner">
        <div className="catalogue-section__header">
          <h2 id={`${title}-title`}>{title}</h2>
        </div>

        {decks.length ? (
          <div className="catalogue-grid">
            {decks.map((deck) => (
              <DeckCard key={deck.slug} deck={deck} />
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>{emptyMessage}</p>
          </div>
        )}
      </div>
    </section>
  )
}

export default CatalogueGrid
