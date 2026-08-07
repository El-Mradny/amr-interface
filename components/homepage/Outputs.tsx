import Link from "next/link";
import {OutputsSection} from "@/types/components/homeComponents";

interface OutputsProp{
    data: OutputsSection;
}

const Outputs = async ({data}: OutputsProp)=>{
    return(
        <section className="outputs" aria-labelledby="outputs-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow on-ivory">{data.sec_head_p}</p>
                    <h2 id="outputs-title">{data.sec_head_h2}</h2>
                    <p>{data.sec_head_span}</p>
                </div>
                <div className="out-grid">
                    {data.outputCards.map((o) => (
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