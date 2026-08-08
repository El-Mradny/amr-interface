import Link from "next/link";

import {CTASection} from "@/types/components/cta";


interface CTAProps {
    data: CTASection;
}

const CTA = async ({data}: CTAProps) => {
    return (
        <section className="cta" aria-labelledby="cta-title">
            <div className="wrap">
                <h2 id="cta-title">{data.cta_title_h2}</h2>
                <p>
                    {data.cta_title_p}
                </p>
                <div className="btns">
                    <Link className="btn btn-gold" href={data.btns[0].href}>
                        {data.btns[0].title} <span aria-hidden="true">→</span>
                    </Link>
                    <a className="btn btn-line" href={data.btns[1].href}>
                        {data.btns[1].title}
                    </a>
                </div>
            </div>
        </section>
    )
}
export default CTA;