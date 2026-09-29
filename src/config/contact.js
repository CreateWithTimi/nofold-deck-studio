export const BUSINESS_WHATSAPP_NUMBER = '2348165429119'

export function createWhatsAppHref(message) {
  return `https://wa.me/${BUSINESS_WHATSAPP_NUMBER}?text=${encodeURIComponent(
    message,
  )}`
}
