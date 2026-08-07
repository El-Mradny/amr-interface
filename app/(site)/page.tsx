import type {Metadata} from "next";

import Thesis from "@/components/homepage/Thesis";
import HowItWorks from "@/components/homepage/HowItWorks";
import TranslationCycle from "@/components/homepage/TranslationCycle";
import RoundTables from "@/components/homepage/RoundTables";
import Outputs from "@/components/homepage/Outputs";
import Routes from "@/components/homepage/Routes";

import Testimonials from "@/components/homepage/Testimonials";
import Stats from "@/components/homepage/Stats";
import CTA from "@/components/CTA";
import HeroHomePage from "@/components/homepage/HeroHomePage";

export const metadata: Metadata = {
    title: "The AMR Interface | AMR Research into Parliamentary Action",
    description:
        "The AMR Interface is an independent, researcher-led channel between antimicrobial resistance research and the UK Parliament — convening evidence, translating it into policy and reporting on implementation.",
    alternates: {canonical: "/"},
};

/* Page-level structured data: the roundtable Event + FAQ rich results */
const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "WebPage",
            "@id": "https://amrinterface.org/#webpage",
            url: "https://amrinterface.org/",
            name: "The AMR Interface | AMR Research into Parliamentary Action",
            isPartOf: {"@id": "https://amrinterface.org/#website"},
            about: {"@id": "https://amrinterface.org/#organization"},
        },
        {
            "@type": "Event",
            name: "Translating AMR Research into Parliamentary Action",
            startDate: "2026-05-18",
            endDate: "2026-05-18",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: {
                "@type": "Place",
                name: "House of Commons",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "London",
                    addressCountry: "GB",
                },
            },
            organizer: {"@id": "https://amrinterface.org/#organization"},
            description:
                "A multi-stakeholder parliamentary roundtable convening AMR researchers, parliamentarians, regulators, professional bodies and patient advocates. Five recommendations, four outputs.",
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "What is the AMR Interface?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The AMR Interface is an independent, researcher-led standing channel that connects antimicrobial resistance research with the UK Parliament, policymakers, healthcare professionals and patients. It convenes evidence, translates it into recommendations for the UK National Action Plan on AMR, and reports annually on implementation.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How often does the AMR Interface convene Parliament?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Twice a year. Each parliamentary roundtable runs on a shared agenda and produces a citable policy brief, a peer-reviewed methodology contribution and a public record of recommendations with named owners and measurable indicators.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Who can take part in the AMR Interface?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Four routes are open: parliamentary and policy staff can request or commission a briefing; researchers can submit evidence or propose a roundtable topic; patient advocates can share lived experience or join the public involvement panel; and members of the public and press can register to receive policy briefs and quarterly updates.",
                    },
                },
            ],
        },
    ],
};


export default function HomePage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(pageSchema)}}
            />
            {/*<a className="skip" href="#main">Skip to main content</a>*/}
            <main id="main">
                <HeroHomePage/>
                <Stats/>
                <Thesis/>
                <HowItWorks name={"HowItWorks"}/>
                <TranslationCycle/>
                <RoundTables/>
                <Outputs name={"Outputs"}/>
                <Testimonials name={"Testimonial"}/>
                <Routes/>
                <CTA name={"CTAHome"} />
            </main>
        </>
    );
}
