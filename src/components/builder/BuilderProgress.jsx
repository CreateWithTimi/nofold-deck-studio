function BuilderProgress({ currentStep, onStepSelect, steps }) {
  const progress = ((currentStep + 1) / steps.length) * 100

  return (
    <div className="builder-progress" aria-label="Request progress">
      <div className="builder-progress__meta">
        <span>
          {currentStep + 1} of {steps.length}
        </span>
        <span>{steps[currentStep].heading}</span>
      </div>
      <div className="builder-progress__track" aria-hidden="true">
        <span style={{ width: `${progress}%` }} />
      </div>
      <div className="builder-progress__steps">
        {steps.map((step, index) => (
          <button
            aria-current={index === currentStep ? 'step' : undefined}
            className={index <= currentStep ? 'is-available' : ''}
            disabled={index > currentStep}
            key={step.id}
            onClick={() => onStepSelect(index)}
            type="button"
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  )
}

export default BuilderProgress
