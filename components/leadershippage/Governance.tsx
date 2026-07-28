const RULES = [
    { n: "Rule 01", t: "Independent agenda", d: "Topics are set by the convenor on the evidence, in consultation with the APPG secretariat and participating researchers. No funder, sponsor or department sets the agenda or sees recommendations before they are agreed in the room." },
    { n: "Rule 02", t: "Declared interests", d: "Every contributor declares relevant interests before speaking, and the declarations sit in the session record. Anyone with a commercial interest in a recommendation does not draft it." },
    { n: "Rule 03", t: "Patients in the room", d: "Lived experience is a standing part of the evidence session, not a closing remark. The patient contribution carries the same weight as the clinical and regulatory ones." },
];

const Governance = () => {
  return (
      <section className="publish" aria-labelledby="gov-title">
          <div className="wrap">
              <div className="sec-head">
                  <p className="eyebrow">How decisions get made</p>
                  <h2 id="gov-title">Governance</h2>
                  <p>
                      The Interface is small by design. These are the rules it runs by,
                      and they are published here so that participants can hold it to
                      them.
                  </p>
              </div>
              <div className="pub-grid">
                  {RULES.map((r) => (
                      <article className="pub" key={r.n}>
                          <b>{r.n}</b>
                          <h3>{r.t}</h3>
                          <p>{r.d}</p>
                      </article>
                  ))}
              </div>
          </div>
      </section>
  )
}
export default Governance;