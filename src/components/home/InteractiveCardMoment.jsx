import Button from '../ui/Button.jsx'

function RiveSlotPlaceholder() {
  return (
    <div className="interactive-card-placeholder" aria-hidden="true">
      <div className="interactive-card-placeholder__shadow" />
      <div className="interactive-card-placeholder__card interactive-card-placeholder__card--back" />
      <div className="interactive-card-placeholder__card interactive-card-placeholder__card--middle" />
      <div className="interactive-card-placeholder__card interactive-card-placeholder__card--front">
        <span>SCENARIO</span>
      </div>
    </div>
  )
}

function InteractiveCardMoment({
  riveSrc,
  stateMachineName,
  artboardName,
  fallbackImage,
}) {
  const hasRiveConfig = Boolean(riveSrc || stateMachineName || artboardName)

  return (
    <section
      className="interactive-moment"
      aria-labelledby="interactive-moment-title"
    >
      <div className="interactive-moment__inner">
        <div className="interactive-moment__copy">
          <span className="page-kicker">TRY THE TABLE</span>
          <div className="interactive-moment__headline">
            <h2 id="interactive-moment-title">Pick a card.</h2>
            <p>See what happens when the table gets interesting.</p>
          </div>
          <p className="interactive-moment__subline">
            One scenario. One response. One decision.
          </p>
          <Button to="/editions" className="interactive-moment__button">
            Explore NO FOLD
          </Button>
        </div>

        <div
          className="interactive-card-stage"
          aria-label="Interactive NO FOLD card preview"
        >
          <div
            className="interactive-card-stage__rive-slot"
            data-rive-src={riveSrc || undefined}
            data-rive-state-machine={stateMachineName || undefined}
            data-rive-artboard={artboardName || undefined}
          >
            {hasRiveConfig ? null : fallbackImage ? (
              <img
                className="interactive-card-stage__fallback-image"
                src={fallbackImage}
                alt=""
              />
            ) : (
              <RiveSlotPlaceholder />
            )}
          </div>
          <p className="interactive-card-stage__label">
            Interactive preview coming soon
          </p>
        </div>
      </div>
    </section>
  )
}

export default InteractiveCardMoment
