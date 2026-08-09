import {PortabilitySection} from "@/types/components/leadershipComponets";

interface PortabilityProps {
    data: PortabilitySection
}

const Portability = async ({data}: PortabilityProps) => {
    return (
        <section className="portable" aria-labelledby="port-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow on-ivory">{data.sec_head_p}</p>
                    <h2 id="port-title">{data.sec_head_h2}</h2>
                    <p>
                        {data.sec_head_p2}
                    </p>
                </div>

                <div className="port-grid">
                    <ul className="port-points">
                        {data.points.map((p) => (
                            <li key={p.t}>
                                <b>{p.t}</b>
                                <p>{p.d}</p>
                            </li>
                        ))}
                    </ul>

                    <div className="panel">
                        <h3>Current hosting</h3>
                        <ul className="record">
                            {data.hosting.map((h) => (
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