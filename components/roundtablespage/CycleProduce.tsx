import {CycleProduceSection} from "@/types/components/roundtablesComponets";

interface CycleProduceProps {
    data: CycleProduceSection
}

const CycleProduce = async ({data}: CycleProduceProps) => {
    return (
        <section className="produces" aria-labelledby="produces-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow">{data.sec_head_P}</p>
                    <h2 id="produces-title">{data.sec_head_h2}</h2>
                </div>
                <div className="prod-grid">
                    {data.produces.map((p) => (
                        <article className="prod" key={p.n}>
                            <b>{p.n}</b>
                            <h3>{p.t}</h3>
                            <p>{p.d}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default CycleProduce;