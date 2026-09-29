import { useMemo, useState } from 'react'
import { createWhatsAppHref } from '../../config/contact.js'
import { builderSteps } from '../../data/builderOptions.js'
import Button from '../ui/Button.jsx'
import BuilderOption from './BuilderOption.jsx'
import BuilderProgress from './BuilderProgress.jsx'

const initialFormData = {
  audience: '',
  deckType: '',
  quantity: '',
  name: '',
  email: '',
  phone: '',
  projectName: '',
  brief: '',
}

const requiredMessages = {
  audience: 'Choose who this deck is for.',
  deckType: 'Choose what kind of deck we are making.',
  quantity: 'Choose an estimated quantity.',
  name: 'Add your name.',
  contact: 'Add an email or WhatsApp / phone number.',
  brief: 'Share a short brief for the deck.',
}

function buildRequestSummary(formData) {
  return [
    'Hi, I’d like to create a custom deck.',
    '',
    `Who it’s for: ${formData.audience}`,
    `Deck type: ${formData.deckType}`,
    `Quantity: ${formData.quantity}`,
    `Project name: ${formData.projectName || 'Not provided'}`,
    '',
    'Brief:',
    formData.brief,
    '',
    `Name: ${formData.name}`,
    `Email: ${formData.email || 'Not provided'}`,
    `WhatsApp / Phone: ${formData.phone || 'Not provided'}`,
    '',
    'Please let me know the next steps.',
  ].join('\n')
}

function ReviewItem({ label, value }) {
  return (
    <div>
      <span>{label}</span>
      <strong>{value || 'Not provided'}</strong>
    </div>
  )
}

function BuildDeckFlow() {
  const [currentStep, setCurrentStep] = useState(0)
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [copyStatus, setCopyStatus] = useState('')

  const activeStep = builderSteps[currentStep]
  const requestSummary = useMemo(() => buildRequestSummary(formData), [formData])
  const whatsAppHref = createWhatsAppHref(requestSummary)

  function updateField(field, value) {
    setFormData((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: '', contact: '' }))
  }

  function validateStep(stepIndex = currentStep) {
    const step = builderSteps[stepIndex]
    const nextErrors = {}

    if (step.id === 'audience' && !formData.audience) {
      nextErrors.audience = requiredMessages.audience
    }

    if (step.id === 'deckType' && !formData.deckType) {
      nextErrors.deckType = requiredMessages.deckType
    }

    if (step.id === 'quantity' && !formData.quantity) {
      nextErrors.quantity = requiredMessages.quantity
    }

    if (step.id === 'brief' || step.id === 'review') {
      if (!formData.name.trim()) {
        nextErrors.name = requiredMessages.name
      }

      if (!formData.email.trim() && !formData.phone.trim()) {
        nextErrors.contact = requiredMessages.contact
      }

      if (!formData.brief.trim()) {
        nextErrors.brief = requiredMessages.brief
      }
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  function goNext() {
    if (!validateStep()) {
      return
    }

    setCurrentStep((step) => Math.min(step + 1, builderSteps.length - 1))
    setCopyStatus('')
  }

  function goBack() {
    setCurrentStep((step) => Math.max(step - 1, 0))
    setErrors({})
    setCopyStatus('')
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(requestSummary)
      setCopyStatus('Request summary copied.')
    } catch {
      setCopyStatus('Copy failed. You can select the summary text manually.')
    }
  }

  function handleSubmit(event) {
    event.preventDefault()

    if (!validateStep(builderSteps.length - 1)) {
      return
    }

    window.open(whatsAppHref, '_blank', 'noopener,noreferrer')

    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <main className="builder-page">
        <section className="builder-flow builder-flow--success">
          <span className="page-kicker">Custom Decks</span>
          <h1>Your request is ready.</h1>
          <p>
            Send the prepared message on WhatsApp and we’ll continue from there.
          </p>
          <div className="builder-summary-copy">
            <p>
              You can also copy the request below if WhatsApp did not open or
              you would rather send it manually.
            </p>
            <textarea
              aria-label="Prepared custom deck request"
              readOnly
              value={requestSummary}
            />
            <button className="button" onClick={copySummary} type="button">
              Copy Request Summary
            </button>
            {copyStatus ? <p className="builder-copy-status">{copyStatus}</p> : null}
          </div>
          <Button to="/editions" variant="secondary">
            Explore Decks
          </Button>
        </section>
      </main>
    )
  }

  return (
    <main className="builder-page">
      <section className="builder-flow" aria-labelledby="builder-flow-title">
        <BuilderProgress
          currentStep={currentStep}
          onStepSelect={setCurrentStep}
          steps={builderSteps}
        />

        <form className="builder-form" onSubmit={handleSubmit}>
          <div className="builder-form__heading">
            <span className="page-kicker">Custom Decks</span>
            <h1 id="builder-flow-title">{activeStep.heading}</h1>
            {activeStep.id === 'brief' ? (
              <p>
                Tell us what you want this deck to do, who it’s for, and
                anything you already have in mind.
              </p>
            ) : null}
          </div>

          {activeStep.type === 'options' ? (
            <>
              <div
                className="builder-options"
                role="group"
                aria-describedby={
                  errors[activeStep.id] ? `${activeStep.id}-error` : undefined
                }
              >
                {activeStep.options.map((option) => (
                  <BuilderOption
                    isSelected={formData[activeStep.id] === option}
                    key={option}
                    label={option}
                    onSelect={(value) => updateField(activeStep.id, value)}
                  />
                ))}
              </div>
              {errors[activeStep.id] ? (
                <p className="builder-error" id={`${activeStep.id}-error`}>
                  {errors[activeStep.id]}
                </p>
              ) : null}
            </>
          ) : null}

          {activeStep.type === 'details' ? (
            <div className="builder-fields">
              <label className="field">
                <span>Name</span>
                <input
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  autoComplete="name"
                  name="name"
                  onChange={(event) => updateField('name', event.target.value)}
                  type="text"
                  value={formData.name}
                />
                {errors.name ? (
                  <small className="builder-error" id="name-error">
                    {errors.name}
                  </small>
                ) : null}
              </label>
              <label className="field">
                <span>Email</span>
                <input
                  aria-describedby={errors.contact ? 'contact-error' : undefined}
                  autoComplete="email"
                  name="email"
                  onChange={(event) => updateField('email', event.target.value)}
                  type="email"
                  value={formData.email}
                />
              </label>
              <label className="field">
                <span>WhatsApp / Phone</span>
                <input
                  aria-describedby={errors.contact ? 'contact-error' : undefined}
                  autoComplete="tel"
                  name="phone"
                  onChange={(event) => updateField('phone', event.target.value)}
                  type="tel"
                  value={formData.phone}
                />
                {errors.contact ? (
                  <small className="builder-error" id="contact-error">
                    {errors.contact}
                  </small>
                ) : null}
              </label>
              <label className="field">
                <span>Project / Deck Name (optional)</span>
                <input
                  name="projectName"
                  onChange={(event) =>
                    updateField('projectName', event.target.value)
                  }
                  type="text"
                  value={formData.projectName}
                />
              </label>
              <label className="field builder-fields__brief">
                <span>Short brief / idea</span>
                <textarea
                  aria-describedby={errors.brief ? 'brief-error' : undefined}
                  name="brief"
                  onChange={(event) => updateField('brief', event.target.value)}
                  value={formData.brief}
                />
                {errors.brief ? (
                  <small className="builder-error" id="brief-error">
                    {errors.brief}
                  </small>
                ) : null}
              </label>
            </div>
          ) : null}

          {activeStep.type === 'review' ? (
            <div className="builder-review">
              <ReviewItem label="Audience" value={formData.audience} />
              <ReviewItem label="Deck type" value={formData.deckType} />
              <ReviewItem label="Quantity" value={formData.quantity} />
              <ReviewItem label="Project / Deck Name" value={formData.projectName} />
              <ReviewItem label="Name" value={formData.name} />
              <ReviewItem label="Email" value={formData.email} />
              <ReviewItem label="WhatsApp / Phone" value={formData.phone} />
              {Object.values(errors).filter(Boolean).length ? (
                <p className="builder-error">
                  Please complete the required details before sending.
                </p>
              ) : null}
            </div>
          ) : null}

          <div className="builder-actions">
            {currentStep > 0 ? (
              <button className="button button--secondary" onClick={goBack} type="button">
                Back
              </button>
            ) : null}
            {currentStep < builderSteps.length - 1 ? (
              <button className="button" onClick={goNext} type="button">
                Next
              </button>
            ) : (
              <button
                aria-label="Send My Request via WhatsApp (opens in a new tab)"
                className="button"
                type="submit"
              >
                Send My Request
              </button>
            )}
          </div>
        </form>
      </section>
    </main>
  )
}

export default BuildDeckFlow
