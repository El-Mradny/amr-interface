import {FundingAndDeclarationsSection} from "@/types/components/leadershipComponets";

interface FundingAndDeclarationsProps {
    data: FundingAndDeclarationsSection
}

const FundingAndDeclarations = ({data}: FundingAndDeclarationsProps) => {
    return (
        <section className="calendar" aria-labelledby="fund-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow">{data.sec_head_p}</p>
                    <h2 id="fund-title">{data.sec_head_h2}</h2>
                    <p>
                        {data.sec_head_p2}
                    </p>
                </div>

                <div className="two-col">
                    <div>
                        <h3>Current funding</h3>
                        <ul className="dark-record">
                            {data.funds.map((f) => (
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
                            {data.declarations.map((d) => (
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