import {TestimonialSection} from "@/types/components/homeComponents";
interface TestimonialProps {
    data: TestimonialSection;
}
const Testimonials = async ({data}: TestimonialProps) => {

    return (
        <section className="voice" aria-labelledby="voice-title">
            <div className="wrap">
                <h2 id="voice-title" className="eyebrow" style={{color: "var(--gold-2)"}}>
                    {data.title_h2}
                </h2>
                <blockquote>
                    <span className="mark" aria-hidden="true">&ldquo;</span>
                    <p>
                        {data.quota}
                    </p>
                    <cite>
                        {data.cite}
                        <span>{data.span}</span>
                    </cite>
                </blockquote>
            </div>
        </section>
    )
}
export default Testimonials