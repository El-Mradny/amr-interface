import Link from "next/link";

const OUTPUTS = [
    {
        href: "/outputs/five-recommendations",
        kind: "Policy brief",
        title: "Five Recommendations",
        meta: "June 2026 · 1,650 words",
        go: "Read the brief →"
    },
    {
        href: "/outputs/translation-cycle",
        kind: "Peer-reviewed",
        title: "The Translation Cycle",
        meta: "JAC-AMR · under review",
        go: "Read preprint →"
    },
    {
        href: "/outputs/esrc-iaa-final-report",
        kind: "Funder report",
        title: "ESRC IAA Final Report",
        meta: "March 2027",
        go: "Download →"
    },
    {
        href: "/outputs/research-to-action-roadmap",
        kind: "Public roadmap",
        title: "Research → Action",
        meta: "BSAC & UKHSA · 2026",
        go: "View roadmap →"
    },
];

const Outputs =()=>{
    return(
        <section className="outputs" aria-labelledby="outputs-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow on-ivory">The cumulative archive</p>
                    <h2 id="outputs-title">Policy briefs, reports &amp; publications</h2>
                    <p>Everything the Interface produces is public, dated and citable.</p>
                </div>
                <div className="out-grid">
                    {OUTPUTS.map((o) => (
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