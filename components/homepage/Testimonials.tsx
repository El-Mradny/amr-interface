const Testimonials = () => {
  return (
      <section className="voice" aria-labelledby="voice-title">
          <div className="wrap">
              <h2 id="voice-title" className="eyebrow" style={{color: "var(--gold-2)"}}>
                  The patient voice
              </h2>
              <blockquote>
                  <span className="mark" aria-hidden="true">&ldquo;</span>
                  <p>
                      You cannot create policies for patients without working with the
                      people who are affected. There is nothing about us without us.
                  </p>
                  <cite>
                      Vanessa Carter
                      <span>
                  AMR survivor · Founder, The AMR Narrative · Chair, WHO Task
                  Force of AMR Survivors
                </span>
                  </cite>
              </blockquote>
          </div>
      </section>
  )
}
export default Testimonials