
const PRODUCES = [
    {
        n: "Output 01",
        t: "Policy brief",
        d: "Recommendations with owners and indicators, distributed to Health Select Committee members, relevant APPGs and DHSC."
    },
    {
        n: "Output 02",
        t: "Peer-reviewed paper",
        d: "The translation methodology, documented so that it can be replicated — with participating parliamentarians offered co-authorship."
    },
    {
        n: "Output 03",
        t: "Public record",
        d: "This page: who attended, what was agreed, and what happened next, kept permanently online."
    },
    {
        n: "Output 04",
        t: "Uptake report",
        d: "Citation and adoption tracked against each recommendation, reported back to Parliament annually."
    },
];

const CycleProduce = () => {
  return (
      <section className="produces" aria-labelledby="produces-title">
          <div className="wrap">
              <div className="sec-head">
                  <p className="eyebrow">Every roundtable leaves a record</p>
                  <h2 id="produces-title">Four outputs from every cycle</h2>
              </div>
              <div className="prod-grid">
                  {PRODUCES.map((p) => (
                      <article className="prod" key={p.n}>
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
export default CycleProduce;