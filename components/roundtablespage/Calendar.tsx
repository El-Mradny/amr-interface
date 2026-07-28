import Link from "next/link";

const Calendar = () => {
  return (
      <section className="calendar" aria-labelledby="calendar-title">
          <div className="wrap">
              <div className="sec-head">
                  <p className="eyebrow">The record so far</p>
                  <h2 id="calendar-title">The calendar</h2>
                  <p>
                      A standing series, not a one-off event. Every session stays on
                      this page permanently, and the next date is announced here first.
                  </p>
              </div>

              <div className="cal-group">
                  <article className="entry">
                      <div>
                          <p className="date">18 May 2026</p>
                          <p className="place">House of Commons, Westminster</p>
                      </div>
                      <div>
                          <h3>Translating AMR Research into Parliamentary Action</h3>
                          <p>
                              The inaugural roundtable. The agenda deliberately shifted
                              from scrutiny to delivery, building on written evidence
                              submitted to the Public Accounts Committee AMR inquiry. Five
                              recommendations were agreed in the room and four outputs
                              followed.
                          </p>
                          <div className="tags">
                              <span className="tag">Hosted by Andrew Lewin MP</span>
                              <span className="tag">Dr Danny Chambers MP</span>
                              <span className="tag">Chaired by Prof Sam Salek</span>
                              <span className="tag">UKHSA · BSAC · patient voice</span>
                          </div>
                      </div>
                      <div className="side">
                          <span className="pill pill-done">Complete</span>
                          <Link className="go" href="/outputs/five-recommendations">
                              Read the brief →
                          </Link>
                      </div>
                  </article>
              </div>

          </div>
      </section>
  )
}
export default Calendar;