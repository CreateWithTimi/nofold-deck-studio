import { Link } from 'react-router-dom'
import DeckCard from '../deck/DeckCard.jsx'
import { getFeaturedDecks } from '../../data/decks.js'

function FeaturedDecks() {
  const featuredDecks = getFeaturedDecks()

  return (
    <section className="featured-decks" aria-labelledby="featured-decks-title">
      <div className="featured-decks__inner">
        <div className="featured-decks__header">
          <div className="featured-decks__copy">
            <h2 id="featured-decks-title">Featured Decks</h2>
            <p>A few things we’ve put on the table.</p>
          </div>
          <Link className="featured-decks__all" to="/editions">
            See All
          </Link>
        </div>

        <div className="featured-decks__rail" aria-label="Featured decks">
          {featuredDecks.map((deck) => (
            <DeckCard key={deck.slug} deck={deck} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturedDecks
