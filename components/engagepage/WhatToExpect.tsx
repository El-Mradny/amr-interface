
const AFTER = [
    { n: "Straight away", t: "A short confirmation", d: "One email confirming you are on the list. If you sent a message, the convenor replies personally — usually within a week, longer during recess." },
    { n: "Every cycle", t: "The policy brief", d: "Each brief arrives on the day it is published, with the recommendations, their owners and their indicators in the email itself rather than behind a link." },
    { n: "Four times a year", t: "The quarterly update", d: "A short note on what has moved in AMR policy, what the Interface has published, and what is coming to Parliament next. No more than that." },
];
const WhatToExpect = () => {
  return (
      <section className="after" aria-labelledby="after-title">
          <div className="wrap">
              <div className="sec-head">
                  <p className="eyebrow">After you register</p>
                  <h2 id="after-title">What to expect</h2>
              </div>
              <div className="after-grid">
                  {AFTER.map((a) => (
                      <article className="after-card" key={a.n}>
                          <b>{a.n}</b>
                          <h3>{a.t}</h3>
                          <p>{a.d}</p>
                      </article>
                  ))}
              </div>
          </div>
      </section>
  )
}
export default WhatToExpect