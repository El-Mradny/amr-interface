import Link from "next/link";
import prisma from "@/lib/prisma";
import {HeroSectionData} from "@/types/components/hero";


const Hero = async ({name,}: { name: string }) => {
    const component = await prisma.component.findUnique({
        where: {
            name: name,
        },
    });

    if (!component) return <div></div>;
    const componentData = component.data as unknown as HeroSectionData

    return (
        <section className="page-hero" aria-labelledby="page-title">
            <div className="wrap">
                <nav className="crumbs" aria-label="Breadcrumb">
                    <Link href="/">Home</Link>
                    <span aria-hidden="true">/</span>{componentData.ref}
                </nav>
                <p className="eyebrow">{componentData.title_p}</p>
                <h1 id="page-title">{componentData.title_h1}</h1>
                <p className="lede">
                    {componentData.hero_lede}
                </p>

                <div className="jump-grid">
                    {
                        componentData.ref == 'Engage' ?
                            componentData.facts.map((j) => (
                                <a className="jump" href={j.href} key={j.n}>
                                    <b>{j.n}</b>
                                    <h2>{j.t}</h2>
                                    <span>{j.cta}</span>
                                </a>
                            )) :
                            componentData.facts.map((f) => (
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