import Link from "next/link";
import {ArchiveSection} from "@/types/components/outputsComponents";

interface ArchiveProps {
    data: ArchiveSection;
}

const Archive = async ({data}: ArchiveProps) => {
    const groups = ["Published", "Under review", "Forthcoming"];
    return (
        <section className="calendar" aria-labelledby="archive-title">
            <div className="wrap">
                <div className="sec-head">
                    <p className="eyebrow">{data.sec_head_p}</p>
                    <h2 id="archive-title">{data.sec_head_h2}</h2>
                    <p>
                        {data.sec_head_p2}
                    </p>
                </div>

                <div className="legend" aria-hidden="true">
                    <span><i className="k-done"/>Published</span>
                    <span><i className="k-review"/>Under review</span>
                    <span><i className="k-soon"/>Forthcoming</span>
                </div>

                {groups.map((group) => (
                    <div key={group}>
                        <p className="group-label">{group}</p>
                        {data.outputs.filter((o) => o.status === group).map((o) => (
                            <div className="cal-group" role="group" aria-label={`${group} outputs`} key={o.title}>
                                <article className={`entry${o.modifier}`}>
                                    <div className="kind-col">
                                        <b>{o.kind}</b>
                                        <span>{o.meta}</span>
                                    </div>
                                    <div>
                                        <h3>{o.title}</h3>
                                        <p>{o.body}</p>
                                        <div className="tags">
                                            {o.tags.map((t) => (
                                                <span className="tag" key={t}>{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="side">
                                        <span className={`pill ${o.pill}`}>{o.status}</span>
                                        <Link className="go" href={o.href}>{o.cta}</Link>
                                    </div>
                                </article>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </section>
    )
}
export default Archive