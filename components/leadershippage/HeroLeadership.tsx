import Link from "next/link";

const FACTS = [
    { n: "2026", t: "Founded, and led by its founder" },
    { n: "ESRC", t: "Impact Acceleration Account, current funding" },
    { n: "In kind", t: "All expert contributions, including the venue" },
    { n: "Portable", t: "Owned by the researcher, not the institution" },
];

const HeroLeadership = () => {
  return (
      <section className="page-hero" aria-labelledby="page-title">
          <div className="wrap">
              <nav className="crumbs" aria-label="Breadcrumb">
                  <Link href="/">Home</Link>
                  <span aria-hidden="true">/</span>Leadership &amp; governance
              </nav>
              <p className="eyebrow">Leadership &amp; governance</p>
              <h1 id="page-title">Who runs the AMR Interface</h1>
              <p className="lede">
                  The Interface is researcher-led and independent. It is convened by
                  one named academic, hosted by a university rather than owned by
                  one, and built so that the method survives the grant that started
                  it.
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
export default HeroLeadership;