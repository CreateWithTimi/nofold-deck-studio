import Button from '../ui/Button.jsx'

const tableOptions = [
  {
    eyebrow: 'NO FOLD',
    title: 'Play ours.',
    description:
      'Social games built for conversations, competition and unforgettable tables.',
    cta: 'Explore Editions',
    to: '/editions',
    tone: 'nofold',
  },
  {
    eyebrow: 'CUSTOM DECKS',
    title: 'Make it yours.',
    description:
      'Turn your ideas, questions, stories or brand into a deck people can actually hold and play.',
    cta: 'Start a Deck',
    to: '/build-deck',
    tone: 'custom',
  },
]

function TableProductVisual({ tone }) {
  return (
    <div className={`table-visual table-visual--${tone}`} aria-hidden="true">
      <div className="table-visual__shadow" />
      <div className="table-card table-card--support">
        <span>{tone === 'custom' ? 'YOUR STORY. REAL CARDS.' : 'PLAY. CONNECT.'}</span>
      </div>
      <div className="table-deck">
        <span>{tone === 'custom' ? 'CUSTOM' : 'NO FOLD'}</span>
        <strong>{tone === 'custom' ? 'MAKE IT YOURS.' : 'NO FOLD'}</strong>
      </div>
      <div className="table-card table-card--front">
        <span>{tone === 'custom' ? 'IDEAS TO DECKS' : 'SAME TABLE'}</span>
      </div>
    </div>
  )
}

function TableOptionCard({ option }) {
  return (
    <article className={`table-option table-option--${option.tone}`}>
      <div className="table-option__body">
        <span className="table-option__eyebrow">{option.eyebrow}</span>
        <div className="table-option__copy">
          <h3>{option.title}</h3>
          <p>{option.description}</p>
        </div>
        <Button
          to={option.to}
          variant={option.tone === 'custom' ? 'secondary' : 'primary'}
          className="table-option__button"
        >
          {option.cta}
        </Button>
      </div>
      <TableProductVisual tone={option.tone} />
    </article>
  )
}

function ChooseYourTable() {
  return (
    <section className="choose-table" aria-labelledby="choose-table-title">
      <div className="choose-table__inner">
        <div className="choose-table__heading">
          <span className="page-kicker">Two ways to play</span>
          <h2 id="choose-table-title">Choose Your Table</h2>
        </div>

        <div className="choose-table__grid">
          {tableOptions.map((option) => (
            <TableOptionCard key={option.eyebrow} option={option} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ChooseYourTable
