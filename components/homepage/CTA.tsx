import Link from "next/link";

const CTA = () => {
  return (
      <section className="cta" aria-labelledby="cta-title">
          <div className="wrap">
              <h2 id="cta-title">Get involved</h2>
              <p>
                  Register your interest to receive the call for reflections and the
                  policy brief that follows the next roundtable.
              </p>
              <div className="btns">
                  <Link className="btn btn-gold" href="/engage#register">
                      Register interest <span aria-hidden="true">→</span>
                  </Link>
                  <a className="btn btn-line" href="mailto:r.elshenawy@herts.ac.uk">
                      Email the Interface
                  </a>
              </div>
          </div>
      </section>
  )
}
export default CTA;