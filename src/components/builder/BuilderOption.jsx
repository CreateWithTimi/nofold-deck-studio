function BuilderOption({ isSelected, label, onSelect }) {
  return (
    <button
      aria-pressed={isSelected}
      className={`builder-option${isSelected ? ' builder-option--selected' : ''}`}
      onClick={() => onSelect(label)}
      type="button"
    >
      {label}
    </button>
  )
}

export default BuilderOption
