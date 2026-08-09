import {RunOfSessionSection} from "@/types/components/roundtablesComponets";

interface RunOfSessionProps {
    data: RunOfSessionSection
}

const RunOfSession = async ({data}: RunOfSessionProps) => {
    return (
        <section className="session" aria-labelledby="session-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow">{data.sec_head_P}</p>
                    <h2 id="session-title">{data.sec_head_h2}</h2>
                    <p>
                        {data.sec_head_P2}
                    </p>
                </div>

                <div className="timebar" aria-hidden="true">
                    <i/><i/><i/><i/>
                </div>
                <div className="timeslots">
                    {data.slots.map((s) => (
                        <div className="slot" key={s.t}>
                            <b>{s.m}</b>
                            <h3>{s.t}</h3>
                            <p>{s.d}</p>
                        </div>
                    ))}
                </div>

                <p className="session-note">
                    {data.note}
                </p>
            </div>
        </section>
    )
}
export default RunOfSession;