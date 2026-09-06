export const editionDecks = []

export const customDeckProjects = []

export const deckTypes = [
  {
    id: 'editions',
    label: 'NO FOLD Editions',
    description: 'Original NO FOLD consumer game releases and edition showcases.',
  },
  {
    id: 'custom',
    label: 'Custom Decks',
    description:
      'Portfolio and request-driven physical deck projects for groups, brands, events, and organizations.',
  },
]

export const requestAudienceOptions = [
  'Individual',
  'Brand',
  'Restaurant',
  'Community',
  'Event',
  'Organization',
]

export function getAllDecks() {
  return [...editionDecks, ...customDeckProjects]
}

export function getDeckBySlug(slug) {
  return getAllDecks().find((deck) => deck.slug === slug)
}
