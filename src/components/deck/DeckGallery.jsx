function DeckGallery({ deck }) {
  const galleryItems = [
    {
      image: deck.spreadImage,
      label: `${deck.name} spread view`,
      variant: 'spread',
    },
    {
      image: deck.detailImage,
      label: `${deck.name} detail view`,
      variant: 'detail',
    },
  ].filter((item) => item.image)

  if (!galleryItems.length) {
    return null
  }

  return (
    <section className="deck-gallery" aria-labelledby="deck-gallery-title">
      <div className="deck-detail__section-heading">
        <span className="page-kicker">Gallery</span>
        <h2 id="deck-gallery-title">Product views</h2>
      </div>
      <div className="deck-gallery__grid">
        {galleryItems.map((item) => (
          <figure
            className={`deck-gallery__item deck-gallery__item--${item.variant}`}
            key={item.variant}
          >
            <img src={item.image} alt={item.label} loading="lazy" />
          </figure>
        ))}
      </div>
    </section>
  )
}

export default DeckGallery
