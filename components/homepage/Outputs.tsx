import Link from "next/link";
import prisma from "@/lib/prisma";
import {OutputsSection} from "@/types/components/homeComponents";


const Outputs = async ({name,}: { name: string })=>{
    const component = await prisma.component.findUnique({
        where: {
            name: name,
        },
    });

    if (!component) return <div></div>;
    const componentData = component.data as unknown as OutputsSection
    return(
        <section className="outputs" aria-labelledby="outputs-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow on-ivory">{componentData.sec_head_p}</p>
                    <h2 id="outputs-title">{componentData.sec_head_h2}</h2>
                    <p>{componentData.sec_head_span}</p>
                </div>
                <div className="out-grid">
                    {componentData.outputCards.map((o) => (
                        <Link className="out" href={o.href} key={o.href}>
                            <p className="kind">{o.kind}</p>
                            <h3>{o.title}</h3>
                            <p className="meta">{o.meta}</p>
                            <p className="go">{o.go}</p>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default Outputs;