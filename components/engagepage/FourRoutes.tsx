import {FourRoutesSection} from "@/types/components/engageComponents";

interface FourRoutesProps {
    data: FourRoutesSection
}

const FourRoutes = async ({data}: FourRoutesProps) => {
    return (
        <section className="calendar" aria-labelledby="routes-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow">{data.sec_head_p}</p>
                    <h2 id="routes-title">{data.sec_head_h2}</h2>
                    <p>
                        {data.sec_head_p2}
                    </p>
                </div>

                {data.routes.map((r) => (
                    <div className="cal-group" id={r.id} key={r.id}>
                        <article className="entry">
                            <div className="kind-col">
                                <b>{r.n}</b>
                                <span>{r.who}</span>
                            </div>
                            <div>
                                <h3>{r.title}</h3>
                                <p>{r.body}</p>
                                <ul className="send">
                                    {r.send.map((s) => (
                                        <li key={s}>{s}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="side">
                                <span className={`pill ${r.pill}`}>{r.pillText}</span>
                                <a className="go" href={r.href}>{r.cta}</a>
                            </div>
                        </article>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default FourRoutes;