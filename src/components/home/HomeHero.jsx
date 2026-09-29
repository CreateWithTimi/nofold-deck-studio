import Button from '../ui/Button.jsx'

function HomeHero() {
  return (
    <section className="home-hero" aria-labelledby="home-hero-title">
      <div className="home-hero__content">
        <div className="home-hero__copy">
          <h1 id="home-hero-title">Cards worth putting on the table.</h1>
          <p>
            Play NO FOLD or create a custom deck for your people, brand or
            occasion.
          </p>
        </div>
        <div className="home-hero__actions" aria-label="Hero actions">
          <Button to="/editions" className="home-hero__button">
            Explore NO FOLD
          </Button>
          <Button
            to="/build-deck"
            variant="secondary"
            className="home-hero__button"
          >
            Build Your Deck
          </Button>
        </div>
        <p className="home-hero__attribution">
          Designed × Produced by CreateWithTimi
        </p>
      </div>

      <div className="home-hero__stage" aria-hidden="true">
        <div className="deck-scene">
          <div className="deck-shadow deck-shadow--main" />
          <article className="hero-card hero-card--back">
            <span>PLAY. CONNECT. REPEAT.</span>
          </article>
          <article className="hero-card hero-card--side">
            <span>SAME TABLE. DIFFERENT STORIES.</span>
          </article>
          <article className="hero-deck-box">
            <span className="hero-deck-box__kicker">NO FOLD</span>
            <strong>SAME TABLE. DIFFERENT STORIES.</strong>
            <span className="hero-deck-box__footer">PLAY. CONNECT. REPEAT.</span>
          </article>
          <article className="hero-card hero-card--front">
            <span>NO FOLD</span>
          </article>
        </div>
      </div>
    </section>
  )
}

export default HomeHero
