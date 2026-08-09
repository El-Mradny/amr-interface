import Link from "next/link";
import { TranslationCycleSection} from "@/types/components/homeComponents";
import {JSX} from "react";

interface TranslationProps {
    data: TranslationCycleSection;
}

export default function TranslationCycle ({data}: TranslationProps): JSX.Element {
    return (
        <section className="cycle" id="cycle" aria-labelledby="cycle-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow">{data.sec_head_p}</p>
                    <h2 id="cycle-title">{data.sec_head_h1}</h2>
                    <p>
                        {data.sec_head_span}
                    </p>
                </div>
                <ol className="stages">
                    {data.stages.map((s) => (
                        <li className="stage" key={s.t}>
                            <b>{s.n}</b>
                            <h3>{s.t}</h3>
                            <p>{s.d}</p>
                        </li>
                    ))}
                </ol>
                <div className="cycle-foot">
                    <p>
                        {data.cycle_foot}
                    </p>
                    <Link className="btn btn-gold" href={data.link_href}>
                        {data.link_text} <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}