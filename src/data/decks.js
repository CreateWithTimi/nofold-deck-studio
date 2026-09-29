import { createWhatsAppHref } from '../config/contact.js'

const deckImageModules = import.meta.glob('../assets/decks/*/*.png', {
  eager: true,
  import: 'default',
  query: '?url',
})

function deckAsset(slug, imageName) {
  return deckImageModules[`../assets/decks/${slug}/${imageName}.png`]
}

function deckImages(slug) {
  return {
    heroImage: deckAsset(slug, 'hero'),
    spreadImage: deckAsset(slug, 'spread'),
    detailImage: deckAsset(slug, 'detail'),
  }
}

function orderMessage(deckName, priceLabel) {
  return `Hi, I’d like to order the ${deckName.toUpperCase()} deck for ${priceLabel}.`
}

export const editionDecks = [
  {
    slug: 'nofold-original',
    name: 'NO FOLD Original',
    title: 'NO FOLD Original',
    typeLabel: 'NO FOLD Edition / Game Deck',
    summary: 'A catalogue placeholder for the original NO FOLD game deck.',
    projectType: 'product',
    featured: true,
    ctaLabel: 'View Deck',
    detailCtaLabel: 'Get NO FOLD',
    detailCtaTo: '/build-deck',
    secondaryCtaLabel: null,
    visualTheme: 'nofold-original',
    ...deckImages('nofold-original'),
  },
  {
    slug: 'nofold-superteamng',
    name: 'NO FOLD × SuperteamNG',
    title: 'NO FOLD × SuperteamNG',
    typeLabel: 'NO FOLD Edition',
    summary: 'A catalogue placeholder for a NO FOLD edition project.',
    projectType: 'edition',
    featured: true,
    ctaLabel: 'View Edition',
    detailCtaLabel: 'View Edition',
    detailCtaTo: '/editions',
    secondaryCtaLabel: null,
    visualTheme: 'nofold-original',
    ...deckImages('nofold-superteamng'),
  },
]

export const customDeckProjects = [
  {
    slug: 'pulse',
    name: 'Pulse',
    title: 'Pulse',
    typeLabel: 'Custom / Connection Deck',
    summary: 'For conversations that go beyond small talk.',
    projectType: 'product',
    featured: true,
    ctaLabel: 'View Deck',
    detailCtaLabel: 'Order This Deck',
    detailCtaTo: '/build-deck',
    secondaryCtaLabel: 'Create Your Own Deck',
    price: 10000,
    priceLabel: '₦10,000',
    positioning: 'For conversations that go beyond small talk.',
    salesDescription:
      'Great for date nights, close friends, couples, hangouts and moments where you want to understand each other better.',
    useCases: [
      'Date Night',
      'Couples',
      'Close Friends',
      'Game Night',
      'Deeper Conversations',
    ],
    orderMessage: orderMessage('Pulse', '₦10,000'),
    visualTheme: 'pulse',
    ...deckImages('pulse'),
  },
  {
    slug: 'signature',
    name: 'Signature',
    title: 'Signature',
    typeLabel: 'Custom Signature Deck',
    summary: 'For intentional conversations around a more refined table.',
    projectType: 'product',
    featured: true,
    ctaLabel: 'View Deck',
    detailCtaLabel: 'Order This Deck',
    detailCtaTo: '/build-deck',
    secondaryCtaLabel: 'Create Your Own Deck',
    price: 10000,
    priceLabel: '₦10,000',
    positioning: 'For intentional conversations around a more refined table.',
    salesDescription:
      'Designed for intimate gatherings, dinner conversations, couples and people who enjoy meaningful connection without making the moment feel forced.',
    useCases: [
      'Dinner Table',
      'Couples',
      'Intimate Gatherings',
      'Friends',
      'Meaningful Conversations',
    ],
    orderMessage: orderMessage('Signature', '₦10,000'),
    visualTheme: 'signature',
    ...deckImages('signature'),
  },
  {
    slug: 'spark',
    name: 'Spark',
    title: 'Spark',
    typeLabel: 'Custom Deck',
    summary:
      'For turning strangers, new friends and quiet rooms into conversations.',
    projectType: 'product',
    featured: false,
    ctaLabel: 'View Deck',
    detailCtaLabel: 'Order This Deck',
    detailCtaTo: '/build-deck',
    secondaryCtaLabel: 'Create Your Own Deck',
    price: 10000,
    priceLabel: '₦10,000',
    positioning:
      'For turning strangers, new friends and quiet rooms into conversations.',
    salesDescription:
      'An easy deck to bring out when the room needs energy. Great for first conversations, parties, game nights, dates and breaking the ice naturally.',
    useCases: [
      'First Conversations',
      'Parties',
      'New Friends',
      'Game Night',
      'Dates',
      'Icebreakers',
    ],
    orderMessage: orderMessage('Spark', '₦10,000'),
    visualTheme: 'pulse',
    ...deckImages('spark'),
  },
  {
    slug: 'after-hours',
    name: 'After Hours',
    title: 'After Hours',
    typeLabel: 'Custom Deck',
    summary:
      'For when the night gets quieter and the conversations get bolder.',
    projectType: 'product',
    featured: false,
    ctaLabel: 'View Deck',
    detailCtaLabel: 'Order This Deck',
    detailCtaTo: '/build-deck',
    secondaryCtaLabel: 'Create Your Own Deck',
    price: 10000,
    priceLabel: '₦10,000',
    positioning:
      'For when the night gets quieter and the conversations get bolder.',
    salesDescription:
      'Built for date nights, couples, close friends and late-night hangs where playful, revealing and unexpected conversations belong.',
    useCases: [
      'Date Night',
      'Couples',
      'Late Night',
      'Close Friends',
      'Playful Conversations',
    ],
    orderMessage: orderMessage('After Hours', '₦10,000'),
    visualTheme: 'restaurant',
    ...deckImages('after-hours'),
  },
  {
    slug: 'origin',
    name: 'Origin',
    title: 'Origin',
    typeLabel: 'Custom Deck',
    summary:
      'For conversations about who we are, where we come from and what shaped us.',
    projectType: 'product',
    featured: false,
    ctaLabel: 'View Deck',
    detailCtaLabel: 'Order This Deck',
    detailCtaTo: '/build-deck',
    secondaryCtaLabel: 'Create Your Own Deck',
    price: 10000,
    priceLabel: '₦10,000',
    positioning:
      'For conversations about who we are, where we come from and what shaped us.',
    salesDescription:
      'Made for family, partners, close friends and anyone who wants to move beyond surface-level conversation into memories, identity and meaningful stories.',
    useCases: [
      'Family',
      'Partners',
      'Close Friends',
      'Storytelling',
      'Deeper Conversations',
    ],
    orderMessage: orderMessage('Origin', '₦10,000'),
    visualTheme: 'elite247hub',
    ...deckImages('origin'),
  },
]

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

export function getFeaturedDecks() {
  return getAllDecks().filter((deck) => deck.featured)
}

export function getDeckOrderHref(deck) {
  if (deck?.orderMessage) {
    return createWhatsAppHref(deck.orderMessage)
  }

  return deck?.detailCtaTo || '/build-deck'
}
