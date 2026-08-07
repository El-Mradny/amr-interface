import Link from "next/link";
import {HeroSectionData} from "@/types/components/hero";

interface HeroProps {
    data: HeroSectionData;
}

const Hero =  ({data}:HeroProps ) => {

    return (
        <section className="page-hero" aria-labelledby="page-title">
            <div className="wrap">
                <nav className="crumbs" aria-label="Breadcrumb">
                    <Link href="/">Home</Link>
                    <span aria-hidden="true">/</span>{data.ref}
                </nav>
                <p className="eyebrow">{data.title_p}</p>
                <h1 id="page-title">{data.title_h1}</h1>
                <p className="lede">
                    {data.hero_lede}
                </p>

                <div className="jump-grid">
                    {
                        data.ref == 'Engage' ?
                            data.facts.map((j) => (
                                <a className="jump" href={j.href} key={j.n}>
                                    <b>{j.n}</b>
                                    <h2>{j.t}</h2>
                                    <span>{j.cta}</span>
                                </a>
                            )) :
                            data.facts.map((f) => (
                                <div className="fact" key={f.n}>
                                    <b>{f.n}</b>
                                    <span>{f.t}</span>
                                </div>
                            ))

                    }
                </div>
            </div>
        </section>
    )
}
export default Hero;