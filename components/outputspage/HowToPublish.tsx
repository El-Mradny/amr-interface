

const PRINCIPLES = [
    {
        n: "Principle 01",
        t: "Open by default",
        d: "Every output is free to read on release. Nothing sits behind a form, a paywall or an embargo longer than a publisher requires."
    },
    {
        n: "Principle 02",
        t: "Named accountability",
        d: "Recommendations carry the name of an owner and an indicator. A recommendation nobody owns is an opinion, and it does not go in a brief."
    },
    {
        n: "Principle 03",
        t: "Dated and durable",
        d: "Outputs keep their URL permanently. Corrections are made in place and dated, so a citation made today still resolves in five years."
    },
];

const HowToPublish = () => {
  return(
      <section className="publish" aria-labelledby="publish-title">
          <div className="wrap">
              <div className="sec-head">
                  <p className="eyebrow">The standard applied to every output</p>
                  <h2 id="publish-title">How we publish</h2>
              </div>
              <div className="pub-grid">
                  {PRINCIPLES.map((p) => (
                      <article className="pub" key={p.n}>
                          <b>{p.n}</b>
                          <h3>{p.t}</h3>
                          <p>{p.d}</p>
                      </article>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default HowToPublish