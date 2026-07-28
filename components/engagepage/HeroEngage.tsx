import Link from "next/link";

const JUMPS = [
    { n: "Route 01", t: "Parliamentary & policy staff", cta: "Brief us, or be briefed →", href: "#parliament" },
    { n: "Route 02", t: "Researchers", cta: "Submit evidence →", href: "#researchers" },
    { n: "Route 03", t: "Patients & advocates", cta: "Share your voice →", href: "#patients" },
    { n: "Route 04", t: "Public & press", cta: "Get the outputs →", href: "#press" },
];

const HeroEngage = () => {
  return (
      <section className="page-hero" aria-labelledby="page-title">
          <div className="wrap">
              <nav className="crumbs" aria-label="Breadcrumb">
                  <Link href="/">Home</Link>
                  <span aria-hidden="true">/</span>Engage
              </nav>
              <p className="eyebrow">Four audiences, four routes in</p>
              <h1 id="page-title">Find your route in</h1>
              <p className="lede">
                  The Interface only works if the right people can reach it. Pick the
                  description that fits you — each route says exactly what to send and
                  what happens next. One registration form covers all four.
              </p>

              <div className="jump-grid">
                  {JUMPS.map((j) => (
                      <a className="jump" href={j.href} key={j.n}>
                          <b>{j.n}</b>
                          <h2>{j.t}</h2>
                          <span>{j.cta}</span>
                      </a>
                  ))}
              </div>
          </div>
      </section>
  )
}
export default HeroEngage;