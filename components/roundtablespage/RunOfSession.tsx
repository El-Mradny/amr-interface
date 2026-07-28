const SLOTS = [
    { m: "15 min", t: "Welcome & context", d: "The host MP opens; the chair sets the question the session has to answer." },
    { m: "45 min", t: "Evidence", d: "Short, non-technical presentations from researchers, the regulator, the professional body and a patient advocate — convergent evidence, not competing pitches." },
    { m: "45 min", t: "Discussion & co-creation", d: "Facilitated discussion in which parliamentarians and experts draft the recommendations together, in the room, with owners attached." },
    { m: "15 min", t: "Summary & next steps", d: "The chair reads the recommendations back, and the publication timetable is agreed before anyone leaves." },
];
const RunOfSession = () => {
  return (
      <section className="session" aria-labelledby="session-title">
          <div className="wrap">
              <div className="sec-head">
                  <p className="eyebrow">How each roundtable runs</p>
                  <h2 id="session-title">Two hours, four movements</h2>
                  <p>
                      The format is fixed so that the output is comparable across
                      cycles. Bar widths below are proportional to the time each part
                      actually takes.
                  </p>
              </div>

              <div className="timebar" aria-hidden="true">
                  <i /><i /><i /><i />
              </div>
              <div className="timeslots">
                  {SLOTS.map((s) => (
                      <div className="slot" key={s.t}>
                          <b>{s.m}</b>
                          <h3>{s.t}</h3>
                          <p>{s.d}</p>
                      </div>
                  ))}
              </div>

              <p className="session-note">
                  Nothing is drafted afterwards behind closed doors. Recommendations
                  are written in the room, read back before the session ends, and
                  published under the names of the people who agreed them — which is
                  why parliamentarians are offered co-authorship on the methodology
                  paper.
              </p>
          </div>
      </section>
  )
}
export default RunOfSession;