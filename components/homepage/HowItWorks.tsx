
import {HowItWorksSection} from "@/types/components/homeComponents";

interface HowItworkProps {
    data: HowItWorksSection
}


export default async function HowItWorks({data,}: HowItworkProps) {
    console.log("How It works",data)
    return (
        <section className="how" aria-labelledby="how-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow">{data.sec_head_p}</p>
                    <h2 id="how-title">{data.sec_head_h2}</h2>
                    <p>{data.sec_head_span}</p>
                </div>
                <div className="cards-3">
                    {
                        data.cards.map((card) => {
                            return (
                                <article key={card.n} className="card">
                                    <p className="num">{card.n}</p>
                                    <h3>{card.h3}</h3>
                                    <p>
                                        {card.p}
                                    </p>
                                </article>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}