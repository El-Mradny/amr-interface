import Link from "next/link";

const CTAOutputs = () => {
  return (
      <section className="cta" aria-labelledby="cta-title">
          <div className="wrap">
              <h2 id="cta-title">Get each output on release</h2>
              <p>
                  Register once to receive every policy brief, the methodology paper
                  when it is accepted, and the quarterly update on AMR and Parliament.
              </p>
              <div className="btns">
                  <Link className="btn btn-gold" href="/engage#register">
                      Register interest <span aria-hidden="true">→</span>
                  </Link>
                  <Link className="btn btn-line" href="/roundtables">
                      See where they come from
                  </Link>
              </div>
          </div>
      </section>
  )
}
export default CTAOutputs