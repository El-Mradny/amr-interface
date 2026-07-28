import Link from "next/link";

export default function RoundTables() {
    return (
        <section className="rounds" aria-labelledby="rounds-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow">A standing calendar, not a one-off</p>
                    <h2 id="rounds-title">AMR Parliamentary Roundtables</h2>
                    <p>
                        Two hours, in Westminster, twice a year — scheduled to
                        parliamentary sitting patterns so that parliamentarians can
                        actually be in the room.
                    </p>
                </div>
                <div className="round-list">
                    <Link className="round" href="/roundtables/may-2026">
                        <p className="when">May 2026<small>Complete</small></p>
                        <div>
                            <h3>Translating AMR Research into Parliamentary Action</h3>
                            <p>
                                House of Commons. Hosted by Andrew Lewin MP and Dr Danny
                                Chambers MP, chaired by Professor Sam Salek. Five
                                recommendations, four outputs.
                            </p>
                        </div>
                        <p className="go">View roundtable →</p>
                    </Link>
                    <Link className="round planned" href="/roundtables">
                        <p className="when">Autumn 2026<small>In planning</small></p>
                        <div>
                            <h3>From recommendations to implementation</h3>
                            <p>
                                The accountability session: what has been adopted, what has
                                stalled, and what the next National Action Plan review needs
                                to carry.
                            </p>
                        </div>
                        <p className="go">Propose a topic →</p>
                    </Link>
                </div>
            </div>
        </section>
    )
}