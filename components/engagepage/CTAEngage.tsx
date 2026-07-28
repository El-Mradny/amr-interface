import Link from "next/link";

const CTAEngage = () => {
  return (
      <section className="cta" aria-labelledby="contact-title">
          <div className="wrap">
              <h2 id="contact-title">Or simply write to us</h2>
              <p>
                  If a form is not the right way to say it, the convenor&rsquo;s inbox
                  is open. Please put the route in your subject line so that it
                  reaches the right pile quickly.
              </p>
              <div className="btns">
                  <a className="btn btn-gold" href="mailto:r.elshenawy@herts.ac.uk">
                      r.elshenawy@herts.ac.uk <span aria-hidden="true">→</span>
                  </a>
                  <Link className="btn btn-line" href="/leadership">
                      Who you will be writing to
                  </Link>
              </div>
          </div>
      </section>
  )
}
export default CTAEngage