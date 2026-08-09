import {HowToCiteSection} from "@/types/components/outputsComponents";

interface HowToCiteProps {
    data: HowToCiteSection
}

const HowToCite = ({data}: HowToCiteProps) => {
    return (
        <section className="cite-band" aria-labelledby="cite-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow on-ivory">{data.sec_head_p}</p>
                    <h2 id="cite-title">{data.sec_head_h2}</h2>
                    <p>
                        {data.sec_head_p2}
                    </p>
                </div>

                <div className="cite-grid">
                    <div>
                        {data.articles.map(a => (
                            <div key={a.t} className="ref">
                                <b>{a.t}</b>
                                <p>
                                    {a.d}
                                </p>
                                <small>{a.n}</small>
                            </div>
                        ))}
                        {/*<div className="ref">*/}
                        {/*    <b>Policy brief</b>*/}
                        {/*    <p>*/}
                        {/*        Elshenawy, R. A. (2026) <em>Five Recommendations for*/}
                        {/*        Translating AMR Evidence into Action.</em> The AMR Interface,*/}
                        {/*        University of Hertfordshire.*/}
                        {/*        https://amrinterface.org/outputs/five-recommendations*/}
                        {/*    </p>*/}
                        {/*    <small>[Add the DOI once the brief is deposited in the UH repository.]</small>*/}
                        {/*</div>*/}
                        {/*<div className="ref">*/}
                        {/*    <b>Methodology paper</b>*/}
                        {/*    <p>*/}
                        {/*        Elshenawy, R. A. et al. (2026) <em>The AMR Translation Cycle:*/}
                        {/*        a replicable method for research-to-parliament translation.</em>{" "}*/}
                        {/*        JAC-Antimicrobial Resistance. [Under review.]*/}
                        {/*    </p>*/}
                        {/*    <small>[Replace with the full citation, volume and DOI on acceptance.]</small>*/}
                        {/*</div>*/}
                        {/*<div className="ref">*/}
                        {/*    <b>The programme itself</b>*/}
                        {/*    <p>The AMR Interface (2026) https://amrinterface.org</p>*/}
                        {/*    <small>*/}
                        {/*        Use this when citing the roundtable series or the translation*/}
                        {/*        method in general.*/}
                        {/*    </small>*/}
                        {/*</div>*/}
                    </div>

                    <div className="panel">
                        <h3>{data.panel_title}</h3>
                        <ul className="record">
                            {data.reuses.map((r) => (
                                <li key={r.k}>
                                    <b>{r.k}</b>
                                    <span>{r.v}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default HowToCite;