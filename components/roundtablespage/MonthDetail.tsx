const PEOPLE = [
    {n: "Andrew Lewin MP", r: "Host"},
    {n: "Dr Danny Chambers MP", r: "Host · veterinary surgeon"},
    {n: "Professor Sam Salek", r: "Chair · University of Hertfordshire"},
    {n: "Dr Alicia Demirjian", r: "Head of the AMR and Prescribing Team, UKHSA"},
    {n: "Professor Andrew Seaton", r: "President, British Society for Antimicrobial Chemotherapy"},
    {n: "Vanessa Carter", r: "AMR survivor · Founder, The AMR Narrative"},
    {n: "Professor Zoe Aslanpour", r: "Antimicrobial stewardship research, University of Hertfordshire"},
    {n: "Professor Ornella Corazza", r: "Parliamentary engagement, University of Hertfordshire"},
    {n: "Dr Rasha Abdelsalam Elshenawy", r: "Convenor and Principal Investigator"},
];

const RECORD = [
    {k: "Date", v: "18 May 2026"},
    {k: "Venue", v: "House of Commons, provided in kind through the APPG on AMR"},
    {k: "Format", v: "Two hours · four movements · recommendations drafted in the room"},
    {k: "Convenor", v: "Dr Rasha Abdelsalam Elshenawy, Principal Investigator"},
    {k: "Evidence base", v: "Written evidence to the Public Accounts Committee AMR inquiry"},
    {
        k: "Support",
        v: "ESRC Impact Acceleration Account, University of Hertfordshire; all expert contributors gave their time without a fee"
    },
];

const MonthDetail = () => {
  return (
      <section className="detail" aria-labelledby="detail-title">
          <div className="wrap">
              <div className="sec-head">
                  <p className="eyebrow on-ivory">May 2026 in detail</p>
                  <h2 id="detail-title">Who was in the room, and what they agreed</h2>
                  <p>
                      The venue was provided in kind through the All-Party
                      Parliamentary Group on AMR, and every expert contributor gave
                      their time without a fee.
                  </p>
              </div>

              <div className="detail-grid">
                  <div className="panel">
                      <h3>In the room</h3>
                      <ul className="who">
                          {PEOPLE.map((p) => (
                              <li key={p.n}>
                                  <b>{p.n}</b>
                                  <span>{p.r}</span>
                              </li>
                          ))}
                      </ul>
                      <p className="detail-note">
                          [Add the remaining parliamentary attendees once the attendance
                          record is finalised.]
                      </p>
                  </div>

                  <div className="stack">
                      <div className="panel">
                          <h3>The five recommendations</h3>
                          <ol className="recs">
                              <li>[Recommendation 1 — one sentence, with the named owner in brackets.]</li>
                              <li>[Recommendation 2 — one sentence, with the named owner in brackets.]</li>
                              <li>[Recommendation 3 — one sentence, with the named owner in brackets.]</li>
                              <li>[Recommendation 4 — one sentence, with the named owner in brackets.]</li>
                              <li>[Recommendation 5 — one sentence, with the named owner in brackets.]</li>
                          </ol>
                          <p className="detail-note">
                              Paste the final wording from the June 2026 policy brief. Each
                              line should read: recommendation — owner — indicator.
                          </p>
                      </div>

                      <div className="panel">
                          <h3>Session record</h3>
                          <ul className="record">
                              {RECORD.map((r) => (
                                  <li key={r.k}>
                                      <b>{r.k}</b>
                                      <span>{r.v}</span>
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}
export default MonthDetail;