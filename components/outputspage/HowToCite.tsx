const REUSE = [
    { k: "Licence", v: "[Confirm — CC BY 4.0 is recommended so that policy teams can quote and adapt freely with attribution.]" },
    { k: "Cost", v: "Free to read and redistribute. No registration is required to download an output." },
    { k: "Quoting", v: "Recommendations may be quoted in full in parliamentary and departmental papers." },
    { k: "Corrections", v: "Errors are corrected on the page, dated, and noted at the foot of the output." },
    { k: "Press", v: "Journalists can request comment or an interview through the Engage page." },
];

const HowToCite = () => {
  return (
      <section className="cite-band" aria-labelledby="cite-title">
          <div className="wrap">
              <div className="sec-head">
                  <p className="eyebrow on-ivory">For researchers and parliamentary staff</p>
                  <h2 id="cite-title">How to cite this work</h2>
                  <p>
                      Everything here is intended to be cited in evidence submissions,
                      committee papers and academic work. Please use the wording below
                      so that uptake can be tracked accurately.
                  </p>
              </div>

              <div className="cite-grid">
                  <div>
                      <div className="ref">
                          <b>Policy brief</b>
                          <p>
                              Elshenawy, R. A. (2026) <em>Five Recommendations for
                              Translating AMR Evidence into Action.</em> The AMR Interface,
                              University of Hertfordshire.
                              https://amrinterface.org/outputs/five-recommendations
                          </p>
                          <small>[Add the DOI once the brief is deposited in the UH repository.]</small>
                      </div>
                      <div className="ref">
                          <b>Methodology paper</b>
                          <p>
                              Elshenawy, R. A. et al. (2026) <em>The AMR Translation Cycle:
                              a replicable method for research-to-parliament translation.</em>{" "}
                              JAC-Antimicrobial Resistance. [Under review.]
                          </p>
                          <small>[Replace with the full citation, volume and DOI on acceptance.]</small>
                      </div>
                      <div className="ref">
                          <b>The programme itself</b>
                          <p>The AMR Interface (2026) https://amrinterface.org</p>
                          <small>
                              Use this when citing the roundtable series or the translation
                              method in general.
                          </small>
                      </div>
                  </div>

                  <div className="panel">
                      <h3>Reuse and permissions</h3>
                      <ul className="record">
                          {REUSE.map((r) => (
                              <li key={r.k}>
                                  <b>{r.k}</b>
                                  <span>{r.v}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </section>
  )
}
export default HowToCite;