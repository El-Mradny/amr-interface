import Link from "next/link";
import Image from "next/image";
import prisma from "@/lib/prisma";
import {HeroSectionData} from "@/types/components/hero";


export default async function HeroHomePage() {
    const component = await prisma.component.findFirst({
        where: {
            name: "HeroHome"
        }
    });

    if (!component || typeof component.data !== "object" || component.data === null) {
        throw new Error("Invalid Hero Section data");
    }
    const hero = component.data as unknown as HeroSectionData;




    return (
        // ---------------- HERO ----------------
        <section className="hero" aria-labelledby="hero-title">
            <div className="wrap">
                <div className="hero-grid">
                    <div>
                        <p className="eyebrow">{hero.title_p}</p>
                        <h1 id="hero-title">
                            {hero.title_h1}
                            <span className="gold">{hero.title_span}</span>
                        </h1>
                        {
                            hero.hero_lede &&
                            <p className="hero-lede" dangerouslySetInnerHTML={{__html: hero.hero_lede}}></p>
                        }
                        <div className="hero-ctas">
                            <Link className="btn btn-gold" href={hero.solid_button_href ? hero.solid_button_href : ""}>
                                {hero.solid_button_text} <span aria-hidden="true">→</span>
                            </Link>
                            <a className="btn btn-line" href={hero.soft_button_href}>{hero.soft_button_text}</a>
                        </div>
                        <p className="hero-meta">
                            {hero.hero_meta}
                        </p>
                    </div>

                    <figure className="hero-figure">
                        <Image
                            src={hero.hero_image_src ? hero.hero_image_src : ""}
                            width={hero.hero_image_width}
                            height={hero.hero_image_height}
                            priority
                            alt={hero.hero_image_alt ? hero.hero_image_alt : ""}
                        />
                        <figcaption>
                            {hero.figure_caption}
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
                        <div><h3>{hero.ribbon_label_1_h3}</h3><p>{hero.ribbon_label_1_p}</p></div>
                        <div><h3>{hero.ribbon_label_2_h3}</h3><p>{hero.ribbon_label_2_p}</p></div>
                        <div><h3>{hero.ribbon_label_3_h3}</h3><p>{hero.ribbon_label_3_p}</p></div>
                    </div>
                </div>
            </div>
        </section>
    )
}