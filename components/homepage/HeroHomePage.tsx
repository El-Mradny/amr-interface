import Link from "next/link";
import Image from "next/image";
import {HeroSectionData} from "@/types/components/hero";

interface HeroProps {
    data:HeroSectionData
}

export default async function HeroHomePage({data}: HeroProps) {

     return (
        // ---------------- HERO ----------------
        <section className="hero" aria-labelledby="hero-title">
            <div className="wrap">
                <div className="hero-grid">
                    <div>
                        <p className="eyebrow">{data.title_p}</p>
                        <h1 id="hero-title">
                            {data.title_h1}
                            <span className="gold">{data.title_span}</span>
                        </h1>
                        {
                            data.hero_lede &&
                            <p className="hero-lede" dangerouslySetInnerHTML={{__html: data.hero_lede}}></p>
                        }
                        <div className="hero-ctas">
                            <Link className="btn btn-gold" href={data.solid_button_href ? data.solid_button_href : ""}>
                                {data.solid_button_text} <span aria-hidden="true">→</span>
                            </Link>
                            <a className="btn btn-line" href={data.soft_button_href}>{data.soft_button_text}</a>
                        </div>
                        <p className="hero-meta">
                            {data.hero_meta}
                        </p>
                    </div>

                    <figure className="hero-figure">
                        <Image
                            src={data.hero_image_src ? data.hero_image_src : ""}
                            width={data.hero_image_width}
                            height={data.hero_image_height}
                            priority
                            alt={data.hero_image_alt ? data.hero_image_alt : ""}
                        />
                        <figcaption>
                            {data.figure_caption}
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
                        <div><h3>{data.ribbon_label_1_h3}</h3><p>{data.ribbon_label_1_p}</p></div>
                        <div><h3>{data.ribbon_label_2_h3}</h3><p>{data.ribbon_label_2_p}</p></div>
                        <div><h3>{data.ribbon_label_3_h3}</h3><p>{data.ribbon_label_3_p}</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}