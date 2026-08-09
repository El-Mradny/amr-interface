import Link from "next/link";
import {RoundTablesSecton} from "@/types/components/homeComponents";
interface RoundProps {
    data: RoundTablesSecton;
}
export default async function RoundTables({data}:RoundProps) {
    return (
        <section className="rounds" aria-labelledby="rounds-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow">{data.sec_head_p}</p>
                    <h2 id="rounds-title">{data.sec_head_h2}</h2>
                    <p>
                        {data.sec_head_span}
                    </p>
                </div>
                <div className="round-list">
                    {
                        data.rounds.map((r,i) => (
                            <Link key={i} className={r.type} href={r.href}>
                                <p className="when">{r.when}<small>{r.status}</small></p>
                                <div>
                                    <h3>{r.heading}</h3>
                                    <p>
                                        {r.paragraph}
                                    </p>
                                </div>
                                <p className="go">{r.go} →</p>
                            </Link>
                        ))
                    }
                    {/*<Link className="round" href="/roundtables/may-2026">*/}
                    {/*    <p className="when">May 2026<small>Complete</small></p>*/}
                    {/*    <div>*/}
                    {/*        <h3>Translating AMR Research into Parliamentary Action</h3>*/}
                    {/*        <p>*/}
                    {/*            House of Commons. Hosted by Andrew Lewin MP and Dr Danny*/}
                    {/*            Chambers MP, chaired by Professor Sam Salek. Five*/}
                    {/*            recommendations, four outputs.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <p className="go">View roundtable →</p>*/}
                    {/*</Link>*/}
                    {/*<Link className="round planned" href="/roundtables">*/}
                    {/*    <p className="when">Autumn 2026<small>In planning</small></p>*/}
                    {/*    <div>*/}
                    {/*        <h3>From recommendations to implementation</h3>*/}
                    {/*        <p>*/}
                    {/*            The accountability session: what has been adopted, what has*/}
                    {/*            stalled, and what the next National Action Plan review needs*/}
                    {/*            to carry.*/}
                    {/*        </p>*/}
                    {/*    </div>*/}
                    {/*    <p className="go">Propose a topic →</p>*/}
                    {/*</Link>*/}
                </div>
            </div>
        </section>
    )
}