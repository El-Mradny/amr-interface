import {HowToPublishSection} from "@/types/components/outputsComponents";

interface HowtopublishProps {
    data: HowToPublishSection
}

const HowToPublish = async ({data}: HowtopublishProps) => {
    return (
        <section className="publish" aria-labelledby="publish-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow">{data.sec_head_p}</p>
                    <h2 id="publish-title">{data.sec_head_h2}</h2>
                </div>
                <div className="pub-grid">
                    {data.principles.map((p) => (
                        <article className="pub" key={p.n}>
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

export default HowToPublish