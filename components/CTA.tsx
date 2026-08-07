import Link from "next/link";
import prisma from "@/lib/prisma";
import {CTASection} from "@/types/components/cta";

const CTA = async ({ name,}:  { name: string } ) => {



    const component = await prisma.component.findUnique({
        where: {
            name: name,
        },
    });

    if (!component) return <div></div>;
    const componentData = component.data as unknown as CTASection
    return (
        <section className="cta" aria-labelledby="cta-title">
            <div className="wrap">
                <h2 id="cta-title">{componentData.cta_title_h2}</h2>
                <p>
                    {componentData.cta_title_p}
                </p>
                <div className="btns">
                    <Link className="btn btn-gold" href={componentData.btns[0].href}>
                        {componentData.btns[0].title} <span aria-hidden="true">→</span>
                    </Link>
                    <a className="btn btn-line" href={componentData.btns[1].href}>
                        {componentData.btns[1].title}
                    </a>
                </div>
            </div>
        </section>
    )
}
export default CTA;