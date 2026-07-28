import Link from "next/link";


const ROUTES = [
    {
        href: "/engage#parliament",
        who: "Parliamentary & policy staff",
        title: "Brief us, or be briefed",
        d: "Request a briefing, table a question, or invite us to give evidence to a Select Committee.",
        go: "Get in touch →"
    },
    {
        href: "/engage#researchers",
        who: "Researchers",
        title: "Submit evidence",
        d: "Propose a roundtable topic, send a written reflection, or co-author the methodology paper.",
        go: "Submit →"
    },
    {
        href: "/engage#patients",
        who: "Patients & advocates",
        title: "Share your voice",
        d: "Contribute lived experience or join the standing patient and public involvement panel.",
        go: "Share →"
    },
    {
        href: "/engage#register",
        who: "Public & press",
        title: "Register for outputs",
        d: "Receive each policy brief and the quarterly update on AMR and Parliament.",
        go: "Register →"
    },
];

const Routes = () => {
  return (
      <section className="routes" aria-labelledby="routes-title">
          <div className="wrap">
              <div className="sec-head">
                  <p className="eyebrow">Four audiences, four routes in</p>
                  <h2 id="routes-title">Find your route in</h2>
              </div>
              <div className="routes-grid">
                  {ROUTES.map((r) => (
                      <Link className="route" href={r.href} key={r.href}>
                          <p className="who">{r.who}</p>
                          <h3>{r.title}</h3>
                          <p>{r.d}</p>
                          <p className="go">{r.go}</p>
                      </Link>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default Routes;