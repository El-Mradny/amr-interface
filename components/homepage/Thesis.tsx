import {ThesisSection} from "@/types/components/homeComponents";

interface ThesisProps {
    data:ThesisSection;
}
export default async function Thesis({data}: ThesisProps) {
    return (
        <section className="thesis" aria-labelledby="thesis-title">
            <div className="wrap thesis-grid">
                <h2 id="thesis-title">
                    {data.title}<br/>
                    <em>{data.span}</em>
                </h2>
                <div className="thesis-body">
                    <p>
                        {data.p1}
                    </p>
                    <p>
                        {data.p2}
                    </p>
                    <p className="thesis-note">
                        {data.note}
                    </p>
                </div>
            </div>
        </section>
    )
}