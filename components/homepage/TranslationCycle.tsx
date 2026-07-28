import Link from "next/link";

const STAGES = [
    { n: "Stage 1", t: "Listen", d: "Scan the evidence base, live inquiries and lived experience to set the agenda." },
    { n: "Stage 2", t: "Convene", d: "Put research, Parliament, regulators and patients at one table for two hours." },
    { n: "Stage 3", t: "Distil", d: "Co-create recommendations in the room, with owners and indicators attached." },
    { n: "Stage 4", t: "Publish", d: "Issue the policy brief and the peer-reviewed record of the method." },
    { n: "Stage 5", t: "Uptake", d: "Track citation, adoption and alignment with the National Action Plan." },
    { n: "Stage 6", t: "Account", d: "Return to Parliament and report, on the record, on what moved." },
];

export default function TranslationCycle (){
    return (
        <section className="cycle" id="cycle" aria-labelledby="cycle-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow">The methodology</p>
                    <h2 id="cycle-title">The AMR Translation Cycle</h2>
                    <p>
                        A replicable six-stage method and the operational backbone of the
                        Interface. Every stage produces a citable artefact, and every
                        cycle feeds the next.
                    </p>
                </div>
                <ol className="stages">
                    {STAGES.map((s) => (
                        <li className="stage" key={s.t}>
                            <b>{s.n}</b>
                            <h3>{s.t}</h3>
                            <p>{s.d}</p>
                        </li>
                    ))}
                </ol>
                <div className="cycle-foot">
                    <p>
                        The cycle is deliberately portable: it is owned by the
                        researcher, not the institution, so it can travel with the
                        programme and be replicated in other policy domains.
                    </p>
                    <Link className="btn btn-gold" href="/outputs/translation-cycle">
                        Explore the Translation Cycle <span aria-hidden="true">→</span>
                    </Link>
                </div>
            </div>
        </section>
    )
}