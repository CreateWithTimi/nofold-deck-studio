import PageIntro from '../components/ui/PageIntro.jsx'
import { requestAudienceOptions } from '../data/decks.js'

function BuildDeck() {
  return (
    <section className="page-section">
      <PageIntro kicker="Custom Decks" title="Request a custom deck">
        A front-end request form foundation for custom physical card deck
        inquiries. Submission handling will be added in a later phase.
      </PageIntro>

      <form className="form-grid">
        <label className="field">
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" />
        </label>
        <label className="field">
          <span>Requester type</span>
          <select name="audienceType" defaultValue="">
            <option value="" disabled>
              Select one
            </option>
            {requestAudienceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Project notes</span>
          <textarea name="notes" />
        </label>
        <p className="muted">
          This form is presentational in V1 and does not submit anywhere yet.
        </p>
      </form>
    </section>
  )
}

export default BuildDeck
