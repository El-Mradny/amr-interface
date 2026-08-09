import {MonthDetailSection} from "@/types/components/roundtablesComponets";

interface MonthDetailProps {
    data: MonthDetailSection
}

const MonthDetail = async ({data}: MonthDetailProps) => {
    return (
        <section className="detail" aria-labelledby="detail-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow on-ivory">{data.sec_head_P}</p>
                    <h2 id="detail-title">{data.sec_head_h2}</h2>
                    <p>
                        {data.sec_head_P2}
                    </p>
                </div>

                <div className="detail-grid">
                    <div className="panel">
                        <h3>In the room</h3>
                        <ul className="who">
                            {data.people.map((p) => (
                                <li key={p.n}>
                                    <b>{p.n}</b>
                                    <span>{p.r}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="detail-note">
                            {data.people_note}
                        </p>
                    </div>

                    <div className="stack">
                        <div className="panel">
                            <h3>{data.recommendation_title}</h3>
                            <ol className="recs">
                                {data.recommendations.map((r) => (

                                    <li key={r}>{r}</li>
                                ))}
                            </ol>
                            <p className="detail-note">
                                {data.recommendations_note}
                            </p>
                        </div>

                        <div className="panel">
                            <h3>Session record</h3>
                            <ul className="record">
                                {data.records.map((r) => (
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