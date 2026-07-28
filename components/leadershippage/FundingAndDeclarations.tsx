
const FUNDING = [
    { k: "Funder", v: "Economic and Social Research Council, through the Impact Acceleration Account held at the University of Hertfordshire" },
    { k: "Administered by", v: "Policy Connect" },
    { k: "Award", v: "£5,000 [remove this line if you would rather not publish the figure]" },
    { k: "Period", v: "March to September 2026" },
    { k: "Purpose", v: "Translating existing evidence into policy — classified as impact activity, not new research" },
    { k: "Next", v: "The method and its outputs are intended to support future NIHR and MRC applications" },
];

const DECLARATIONS = [
    { k: "Commercial", v: "No commercial sponsorship, and no industry funding of any roundtable [confirm before publishing]" },
    { k: "Speaker fees", v: "None paid. Every expert contributor gives their time without a fee" },
    { k: "Venue", v: "Provided in kind through the All-Party Parliamentary Group on AMR" },
    { k: "Editorial", v: "The convenor is an Associate Editor at JAC-Antimicrobial Resistance and takes no part in decisions on Interface submissions to that journal" },
    { k: "Membership", v: "The convenor is a Trustee of BSAC, which contributes expertise to the programme in kind" },
    { k: "Corrections", v: "Any error in a declaration is corrected on this page and dated" },
];

const FundingAndDeclarations = () => {
  return (
      <section className="calendar" aria-labelledby="fund-title">
          <div className="wrap">
              <div className="sec-head">
                  <p className="eyebrow">Funding &amp; declarations</p>
                  <h2 id="fund-title">Where the money comes from</h2>
                  <p>
                      The programme runs on a small award and a large amount of donated
                      expertise. Both are stated here in full.
                  </p>
              </div>

              <div className="two-col">
                  <div>
                      <h3>Current funding</h3>
                      <ul className="dark-record">
                          {FUNDING.map((f) => (
                              <li key={f.k}>
                                  <b>{f.k}</b>
                                  <span>{f.v}</span>
                              </li>
                          ))}
                      </ul>
                  </div>

                  <div>
                      <h3>Declarations</h3>
                      <ul className="dark-record">
                          {DECLARATIONS.map((d) => (
                              <li key={d.k}>
                                  <b>{d.k}</b>
                                  <span>{d.v}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      </section>
  )
}
export default FundingAndDeclarations;