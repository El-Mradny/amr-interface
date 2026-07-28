import Link from "next/link";

const FACTS = [
    { n: "4", t: "Outputs from every cycle" },
    { n: "1", t: "Published to date" },
    { n: "3", t: "In preparation" },
    { n: "Free", t: "To read, with no paywall" },
];
const HeroOutputs = () => {
  return (
      <section className="page-hero" aria-labelledby="page-title">
          <div className="wrap">
              <nav className="crumbs" aria-label="Breadcrumb">
                  <Link href="/">Home</Link>
                  <span aria-hidden="true">/</span>Outputs
              </nav>
              <p className="eyebrow">The cumulative archive</p>
              <h1 id="page-title">Policy briefs, papers &amp; reports</h1>
              <p className="lede">
                  Everything the Interface produces is public, dated and citable.
                  Each roundtable is designed to leave four artefacts behind, so that
                  a reader who was not in the room can still see what was argued,
                  what was agreed and who owns it.
              </p>
              <div className="facts">
                  {FACTS.map((f) => (
                      <div className="fact" key={f.t}>
                          <b>{f.n}</b>
                          <span>{f.t}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  )
}
export default HeroOutputs