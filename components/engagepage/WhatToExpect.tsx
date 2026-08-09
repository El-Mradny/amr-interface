import {WhatToExpectSection} from "@/types/components/engageComponents";

interface WhatToExpectProps {
    data: WhatToExpectSection
}

const WhatToExpect = ({data}: WhatToExpectProps) => {
    return (
        <section className="after" aria-labelledby="after-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow">{data.sec_head_p}</p>
                    <h2 id="after-title">{data.sec_head_h2}</h2>
                </div>
                <div className="after-grid">
                    {data.after.map((a) => (
                        <article className="after-card" key={a.n}>
                            <b>{a.n}</b>
                            <h3>{a.t}</h3>
                            <p>{a.d}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default WhatToExpect