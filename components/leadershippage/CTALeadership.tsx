import Link from "next/link";

const CTALeadership = () => {
  return (
      <section className="cta" aria-labelledby="cta-title">
          <div className="wrap">
              <h2 id="cta-title">Host, fund or partner the next cycle</h2>
              <p>
                  The Interface is looking for partners for the next roundtable cycle
                  and for the funding that carries the annual report to Parliament.
                  Institutions, funders and professional bodies are welcome to get in
                  touch.
              </p>
              <div className="btns">
                  <a className="btn btn-gold" href="mailto:r.elshenawy@herts.ac.uk">
                      Contact the convenor <span aria-hidden="true">→</span>
                  </a>
                  <Link className="btn btn-line" href="/outputs">
                      Read the outputs first
                  </Link>
              </div>
          </div>
      </section>
  )
}
export default CTALeadership;