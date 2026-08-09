import {GovernanceSection} from "@/types/components/leadershipComponets";

interface GovernanceProps {
    data: GovernanceSection
}

const Governance = async ({data}: GovernanceProps) => {
    return (
        <section className="publish" aria-labelledby="gov-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow">{data.sec_head_p}</p>
                    <h2 id="gov-title">{data.sec_head_h2}</h2>
                    <p>
                        {data.sec_head_p2}
                    </p>
                </div>
                <div className="pub-grid">
                    {data.rules.map((r) => (
                        <article className="pub" key={r.n}>
                            <b>{r.n}</b>
                            <h3>{r.t}</h3>
                            <p>{r.d}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Governance;