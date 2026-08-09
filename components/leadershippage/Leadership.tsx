import {LeadershipSection} from "@/types/components/leadershipComponets";

interface LeadershipProps {
    data: LeadershipSection
}

const Leadership = async ({data}: LeadershipProps) => {
    return (
        <section className="lead" aria-labelledby="lead-title">
            <div className="wrap">
                <div className="bio-grid">
                    <figure style={{margin: 0}}>
                        <div className="portrait">
                            {/* Swap the monogram for a photograph when you have one:
                      <Image src="/images/rasha-elshenawy.jpg" width={660} height={880}
                             alt="Dr Rasha Abdelsalam Elshenawy" /> */}
                            <span className="monogram" aria-hidden="true">RE</span>
                        </div>
                        <figcaption className="portrait-cap">
                            {data.figcaption}
                        </figcaption>
                    </figure>

                    <div className="bio">
                        <p className="eyebrow">{data.bio_p}</p>
                        <h2 id="lead-title">{data.bio_h2}</h2>
                        <p className="role">
                            {data.bio_role}
                        </p>
                        <p>
                            {data.bio_paragraph1}
                        </p>
                        <p>
                            {data.bio_paragraph2}
                        </p>
                        <ul className="roles">
                            {data.roles.map((r) => (
                                <li key={r.r}>
                                    <b>{r.r}</b>
                                    <span>{r.o}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Leadership;