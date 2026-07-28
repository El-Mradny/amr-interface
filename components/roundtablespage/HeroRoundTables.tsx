import Link from "next/link";
const FACTS = [
    { n: "2×", t: "Roundtables a year, on a fixed calendar" },
    { n: "120", t: "Minutes, start to finish" },
    { n: "20+", t: "Senior stakeholders in the room" },
    { n: "4", t: "Public outputs from every cycle" },
];

const HeroRoundTables = () => {
  return (
      <section className="page-hero" aria-labelledby="page-title">
          <div className="wrap">
              <nav className="crumbs" aria-label="Breadcrumb">
                  <Link href="/">Home</Link>
                  <span aria-hidden="true">/</span>Roundtables
              </nav>
              <p className="eyebrow">The standing calendar</p>
              <h1 id="page-title">AMR Parliamentary Roundtables</h1>
              <p className="lede">
                  Two hours in Westminster, twice a year, on a shared agenda. Each
                  roundtable is scheduled to parliamentary sitting patterns so that
                  parliamentarians can actually be in the room — and each one closes
                  with recommendations that carry a named owner and a measurable
                  indicator.
              </p>
              <div className="facts">
                  {FACTS.map((f) => (
                      <div className="fact" key={f.n}>
                          <b>{f.n}</b>
                          <span>{f.t}</span>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  )
}
export default HeroRoundTables;