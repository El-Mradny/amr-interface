import Link from "next/link";
import Image from "next/image";

export default function Hero() {

    return (
        // ---------------- HERO ----------------
        <section className="hero" aria-labelledby="hero-title">
            <div className="wrap">
                <div className="hero-grid">
                    <div>
                        <p className="eyebrow">The AMR Interface</p>
                        <h1 id="hero-title">
                            Turning AMR evidence into
                            <span className="gold">parliamentary action</span>
                        </h1>
                        <p className="hero-lede">
                            An <strong>independent, researcher-led standing channel</strong>{" "}
                            between antimicrobial resistance research, the UK Parliament,
                            and the systems where policy becomes practice.
                        </p>
                        <div className="hero-ctas">
                            <Link className="btn btn-gold" href="/outputs/five-recommendations">
                                Read the May 2026 policy brief <span aria-hidden="true">→</span>
                            </Link>
                            <a className="btn btn-line" href="#cycle">See how it works</a>
                        </div>
                        <p className="hero-meta">
                            Founded &amp; led by Dr Rasha Abdelsalam Elshenawy · University
                            of Hertfordshire · ESRC IAA
                        </p>
                    </div>

                    <figure className="hero-figure">
                        <Image
                            src="/images/amr-interface-cover.jpg"
                            width={1280}
                            height={720}
                            priority
                            alt="Translating AMR Research into Parliamentary Action — a gold ribbon links research, policy and practice across the Palace of Westminster"
                        />
                        <figcaption>
                            AMR Parliamentary Roundtable · House of Commons · 18 May 2026
                        </figcaption>
                    </figure>
                </div>

                {/* the cover ribbon, used as structure */}
                <div className="ribbon" aria-hidden="true">
                    <svg className="ribbon-svg" viewBox="0 0 1160 120" role="presentation" focusable="false">
                        <defs>
                            <linearGradient id="rib" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#D8A94A" stopOpacity=".25"/>
                                <stop offset="50%" stopColor="#F2CE86" stopOpacity="1"/>
                                <stop offset="100%" stopColor="#D8A94A" stopOpacity=".25"/>
                            </linearGradient>
                        </defs>
                        <path
                            d="M0 84 C 180 84, 200 30, 380 30 S 580 84, 760 84 S 980 30, 1160 30"
                            fill="none"
                            stroke="url(#rib)"
                            strokeWidth="2.5"
                        />
                        <g fill="#0B1026" stroke="#F2CE86" strokeWidth="2">
                            <circle cx="193" cy="52" r="21"/>
                            <circle cx="580" cy="70" r="21"/>
                            <circle cx="967" cy="40" r="21"/>
                        </g>
                        <g fill="#F2CE86" fontSize="16" fontWeight="600" textAnchor="middle">
                            <text x="193" y="58">01</text>
                            <text x="580" y="76">02</text>
                            <text x="967" y="46">03</text>
                        </g>
                    </svg>
                    <div className="ribbon-labels">
                        <div><h3>Research</h3><p>Generating evidence and innovation</p></div>
                        <div><h3>Policy</h3><p>Informing Parliament and policy decisions</p></div>
                        <div><h3>Practice</h3><p>Improving outcomes in health and society</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}