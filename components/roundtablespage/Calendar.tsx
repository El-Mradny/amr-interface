import Link from "next/link";
import {CalendarSection} from "@/types/components/roundtablesComponets";

interface CalendarProps {
    data: CalendarSection
}

const Calendar = ({data}:CalendarProps) => {
  return (
      <section className="calendar" aria-labelledby="calendar-title">
          <div className="wrap">
              <div className="sec-head">
                  <p className="eyebrow">{data.sec_head_P}</p>
                  <h2 id="calendar-title">{data.sec_head_h2}</h2>
                  <p>
                      {data.sec_head_P2}
                  </p>
              </div>

              <div className="cal-group">
                  {
                      data.calendars.map((c, i) => (
                          <article key={i} className="entry">
                              <div>
                                  <p className="date">{c.date}</p>
                                  <p className="place">{c.place}</p>
                              </div>
                              <div>
                                  <h3>{c.title}</h3>
                                  <p>
                                      {c.description}
                                  </p>
                                  <div className="tags">
                                      {c.tags.map(tag => (
                                          <span key={tag} className="tag">{tag}</span>
                                      ))}
                                  </div>
                              </div>
                              <div className="side">
                                  <span className="pill pill-done">{c.status}</span>
                                  <Link className="go" href={c.link_href}>
                                      {c.link_text} →
                                  </Link>
                              </div>
                          </article>
                      ))
                  }
                  {/*<article className="entry">*/}
                  {/*    <div>*/}
                  {/*        <p className="date">18 May 2026</p>*/}
                  {/*        <p className="place">House of Commons, Westminster</p>*/}
                  {/*    </div>*/}
                  {/*    <div>*/}
                  {/*        <h3>Translating AMR Research into Parliamentary Action</h3>*/}
                  {/*        <p>*/}
                  {/*            The inaugural roundtable. The agenda deliberately shifted*/}
                  {/*            from scrutiny to delivery, building on written evidence*/}
                  {/*            submitted to the Public Accounts Committee AMR inquiry. Five*/}
                  {/*            recommendations were agreed in the room and four outputs*/}
                  {/*            followed.*/}
                  {/*        </p>*/}
                  {/*        <div className="tags">*/}
                  {/*            <span className="tag">Hosted by Andrew Lewin MP</span>*/}
                  {/*            <span className="tag">Dr Danny Chambers MP</span>*/}
                  {/*            <span className="tag">Chaired by Prof Sam Salek</span>*/}
                  {/*            <span className="tag">UKHSA · BSAC · patient voice</span>*/}
                  {/*        </div>*/}
                  {/*    </div>*/}
                  {/*    <div className="side">*/}
                  {/*        <span className="pill pill-done">Complete</span>*/}
                  {/*        <Link className="go" href="/outputs/five-recommendations">*/}
                  {/*            Read the brief →*/}
                  {/*        </Link>*/}
                  {/*    </div>*/}
                  {/*</article>*/}
              </div>

          </div>
      </section>
  )
}
export default Calendar;