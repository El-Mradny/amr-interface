import prisma from "@/lib/prisma";
import {HowItWorksSection} from "@/types/components/homeComponents";

export default async function HowItWorks({name,}: { name: string }) {
    const component = await prisma.component.findUnique({
        where: {
            name: name,
        },
    });

    if (!component) return <div></div>;
    const componentData = component.data as unknown as HowItWorksSection
    return (
        <section className="how" aria-labelledby="how-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow">{componentData.sec_head_p}</p>
                    <h2 id="how-title">{componentData.sec_head_h2}</h2>
                    <p>{componentData.sec_head_span}</p>
                </div>
                <div className="cards-3">
                    {
                        componentData.cards.map((card) => {
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