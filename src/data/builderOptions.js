export {
  BUSINESS_WHATSAPP_NUMBER as BUILD_DECK_WHATSAPP_NUMBER,
} from '../config/contact.js'

export const builderSteps = [
  {
    id: 'audience',
    heading: 'Who’s this deck for?',
    type: 'options',
    options: [
      'Personal',
      'Brand / Business',
      'Event',
      'Restaurant / Hospitality',
      'Community',
      'Wedding',
      'Something Else',
    ],
  },
  {
    id: 'deckType',
    heading: 'What are we making?',
    type: 'options',
    options: [
      'Conversation Deck',
      'Game Deck',
      'Promotional Deck',
      'Educational Deck',
      'Custom Experience',
      'Not Sure Yet',
    ],
  },
  {
    id: 'quantity',
    heading: 'How many do you need?',
    type: 'options',
    options: ['1–10', '10–50', '50–100', '100+', 'Not Sure Yet'],
  },
  {
    id: 'brief',
    heading: 'Tell us about it.',
    type: 'details',
  },
  {
    id: 'review',
    heading: 'Review your request.',
    type: 'review',
  },
]
