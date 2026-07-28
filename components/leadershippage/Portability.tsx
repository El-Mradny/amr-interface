const PORT_POINTS = [
    { t: "The method is written down", d: "The six-stage Translation Cycle is documented in a peer-reviewed paper precisely so that it can be repeated — by this programme, or by someone else in a different policy domain." },
    { t: "The record is independent", d: "The domain, the archive and the outputs sit with the programme rather than inside an institutional site, so that a change of employer does not break a single citation." },
    { t: "The relationships are named", d: "Hosts, chairs and contributors are published for every session. Nothing depends on a private contact list." },
];

const HOSTING = [
    { k: "Host", v: "University of Hertfordshire, School of Health, Medicine and Life Sciences" },
    { k: "Mechanism", v: "ESRC Impact Acceleration Account award, administered through Policy Connect" },
    { k: "Term", v: "March to September 2026" },
    { k: "Ownership", v: "The programme, its method and its outputs remain with the founder" },
    { k: "Continuity", v: "Hosting can transfer without interrupting the roundtable calendar or the archive" },
];

const Portability = () => {
  return (
      <section className="portable" aria-labelledby="port-title">
          <div className="wrap">
              <div className="sec-head">
                  <p className="eyebrow on-ivory">Built to outlast the grant</p>
                  <h2 id="port-title">A portable programme</h2>
                  <p>
                      Most impact projects end when their funding does. The Interface
                      was designed the other way round: the university hosts it, but it
                      does not own it.
                  </p>
              </div>

              <div className="port-grid">
                  <ul className="port-points">
                      {PORT_POINTS.map((p) => (
                          <li key={p.t}>
                              <b>{p.t}</b>
                              <p>{p.d}</p>
                          </li>
                      ))}
                  </ul>

                  <div className="panel">
                      <h3>Current hosting</h3>
                      <ul className="record">
                          {HOSTING.map((h) => (
                              <li key={h.k}>
                                  <b>{h.k}</b>
                                  <span>{h.v}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </section>
  )
}
export default Portability