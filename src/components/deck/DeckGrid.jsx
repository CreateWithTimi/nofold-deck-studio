import DeckCard from './DeckCard.jsx'

function DeckGrid({ decks, emptyMessage }) {
  if (!decks.length) {
    return (
      <div className="empty-state">
        <p>{emptyMessage}</p>
      </div>
    )
  }

  return (
    <div className="deck-grid">
      {decks.map((deck) => (
        <DeckCard deck={deck} key={deck.slug} />
      ))}
    </div>
  )
}

export default DeckGrid
