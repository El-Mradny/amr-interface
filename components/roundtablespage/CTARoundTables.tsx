import Link from "next/link";

const CTARoundTables = () => {
  return (
      <section className="cta" aria-labelledby="cta-title">
          <div className="wrap">
              <h2 id="cta-title">Propose a topic for the next roundtable</h2>
              <p>
                  The agenda for the next roundtable is open. Researchers,
                  professional bodies and patient organisations can put forward
                  evidence, and parliamentary offices can ask to be included.
              </p>
              <div className="btns">
                  <Link className="btn btn-gold" href="/engage#researchers">
                      Submit a proposal <span aria-hidden="true">→</span>
                  </Link>
                  <a className="btn btn-line" href="mailto:r.elshenawy@herts.ac.uk">
                      Email the Interface
                  </a>
              </div>
          </div>
      </section>
  )
}
export default CTARoundTables