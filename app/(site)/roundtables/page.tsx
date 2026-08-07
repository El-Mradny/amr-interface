import type {Metadata} from "next";
import RunOfSession from "@/components/roundtablespage/RunOfSession";
import Calendar from "@/components/roundtablespage/Calendar";
import MonthDetail from "@/components/roundtablespage/MonthDetail";
import CycleProduce from "@/components/roundtablespage/CycleProduce";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
    title: "AMR Parliamentary Roundtables",
    description:
        "The standing calendar of AMR parliamentary roundtablespage in Westminster — past, upcoming and planned sessions, the two-hour format, who takes part and what each one produces.",
    alternates: {canonical: "/roundtablespage"},
    openGraph: {
        url: "/roundtables",
        title: "AMR Parliamentary Roundtables | The AMR Interface",
        description:
            "Two hours in Westminster, twice a year. The standing calendar of AMR parliamentary roundtablespage — past, upcoming and planned.",
    },
};

const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                {"@type": "ListItem", position: 1, name: "Home", item: "https://amrinterface.org/"},
                {"@type": "ListItem", position: 2, name: "Roundtables", item: "https://amrinterface.org/roundtables"},
            ],
        },
        {
            "@type": "CollectionPage",
            "@id": "https://amrinterface.org/roundtables#webpage",
            url: "https://amrinterface.org/roundtables",
            name: "AMR Parliamentary Roundtables | The AMR Interface",
            description:
                "The standing calendar of AMR parliamentary roundtablespage — past, upcoming and planned — with the format, participants and recommendations of each session.",
            isPartOf: {"@id": "https://amrinterface.org/#website"},
            about: {"@id": "https://amrinterface.org/#organization"},
            inLanguage: "en-GB",
        },
        {
            "@type": "Event",
            "@id": "https://amrinterface.org/roundtables/may-2026#event",
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
                    addressRegion: "Greater London",
                    addressCountry: "GB",
                },
            },
            organizer: {"@id": "https://amrinterface.org/#organization"},
            performer: [
                {"@type": "Person", name: "Professor Sam Salek"},
                {"@type": "Person", name: "Dr Alicia Demirjian"},
                {"@type": "Person", name: "Professor Andrew Seaton"},
                {"@type": "Person", name: "Vanessa Carter"},
            ],
            description:
                "The inaugural AMR parliamentary roundtable. Hosted by Andrew Lewin MP and Dr Danny Chambers MP and chaired by Professor Sam Salek. Five recommendations agreed in the room; four public outputs.",
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "How often are the AMR parliamentary roundtablespage held?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Twice a year, in Westminster. Each session runs for two hours and is scheduled to parliamentary sitting patterns so that parliamentarians can attend.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Who attends an AMR parliamentary roundtable?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Around twenty senior stakeholders: parliamentarians, researchers, the UK Health Security Agency, professional bodies such as the British Society for Antimicrobial Chemotherapy, and patient advocates.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How can I propose a topic for the next roundtable?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Researchers, professional bodies and patient organisations can submit a proposal through the Engage page. The agenda for the next roundtable is open.",
                    },
                },
            ],
        },
    ],
};


export default function RoundtablesPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(pageSchema)}}
            />
            {/*<a className="skip" href="#main">Skip to main content</a>*/}
            <main id="main">
                <Hero name={"HeroRoundTables"}/>
                <RunOfSession/>
                <Calendar/>
                <MonthDetail/>
                <CycleProduce/>
              <CTA name={"CTARoundTables"}/>
            </main>
        </>
    );
}
