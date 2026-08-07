import {TestimonialSection} from "@/types/components/homeComponents";
import prisma from "@/lib/prisma";

const Testimonials = async ({name,}: { name: string }) => {
    const component = await prisma.component.findUnique({
        where: {
            name: name,
        },
    });

    if (!component) return <div></div>;
    const componentData = component.data as unknown as TestimonialSection
    return (
        <section className="voice" aria-labelledby="voice-title">
            <div className="wrap">
                <h2 id="voice-title" className="eyebrow" style={{color: "var(--gold-2)"}}>
                    {componentData.title_h2}
                </h2>
                <blockquote>
                    <span className="mark" aria-hidden="true">&ldquo;</span>
                    <p>
                        {componentData.quota}
                    </p>
                    <cite>
                        {componentData.cite}
                        <span>{componentData.span}</span>
                    </cite>
                </blockquote>
            </div>
        </section>
    )
}
export default Testimonials