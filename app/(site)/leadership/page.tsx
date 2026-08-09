import type {Metadata} from "next";
import Leadership from "@/components/leadershippage/Leadership";
import Governance from "@/components/leadershippage/Governance";
import Portability from "@/components/leadershippage/Portability";
import FundingAndDeclarations from "@/components/leadershippage/FundingAndDeclarations";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import {ComponentService} from "@/services/component.service";
import {HeroSectionData} from "@/types/components/hero";
import {CTASection} from "@/types/components/cta";
import {
    FundingAndDeclarationsSection,
    GovernanceSection,
    LeadershipSection,
    PortabilitySection
} from "@/types/components/leadershipComponets";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
    title: "Leadership & Governance",
    description:
        "Who runs the AMR Interface — founder and Principal Investigator Dr Rasha Abdelsalam Elshenawy, the governance rules, the funding model, declared interests and how the programme stays portable.",
    alternates: {canonical: "/leadership"},
    openGraph: {
        type: "profile",
        url: "/leadership",
        title: "Leadership & Governance | The AMR Interface",
        description:
            "Researcher-led, independent and portable: who convenes the AMR Interface, how decisions are made, and where the funding comes from.",
    },
};

const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                {"@type": "ListItem", position: 1, name: "Home", item: "https://amrinterface.org/"},
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Leadership & governance",
                    item: "https://amrinterface.org/leadership"
                },
            ],
        },
        {
            "@type": "AboutPage",
            "@id": "https://amrinterface.org/leadership#webpage",
            url: "https://amrinterface.org/leadership",
            name: "Leadership & Governance | The AMR Interface",
            description:
                "Who runs the AMR Interface: the founder and Principal Investigator, the governance rules, the funding model and the portability of the programme.",
            isPartOf: {"@id": "https://amrinterface.org/#website"},
            about: {"@id": "https://amrinterface.org/#organization"},
            mainEntity: {"@id": "https://amrinterface.org/#rasha"},
            inLanguage: "en-GB",
        },
        {
            "@type": "Person",
            "@id": "https://amrinterface.org/#rasha",
            name: "Dr Rasha Abdelsalam Elshenawy",
            givenName: "Rasha",
            familyName: "Abdelsalam Elshenawy",
            jobTitle: "Senior Lecturer in Postgraduate Medicine",
            email: "r.elshenawy@herts.ac.uk",
            url: "https://amrinterface.org/leadership",
            worksFor: {"@type": "CollegeOrUniversity", name: "University of Hertfordshire"},
            affiliation: [
                {"@type": "Organization", name: "JAC-Antimicrobial Resistance, Oxford University Press"},
                {"@type": "Organization", name: "British Society for Antimicrobial Chemotherapy"},
                {"@type": "Organization", name: "FADIC UK"},
            ],
            knowsAbout: [
                "Antimicrobial resistance",
                "Antimicrobial stewardship",
                "AMR surveillance",
                "Health policy",
                "Research to policy translation",
                "Parliamentary engagement",
            ],
            founderOf: {"@id": "https://amrinterface.org/#organization"},
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Who runs the AMR Interface?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "The AMR Interface was founded and is led by Dr Rasha Abdelsalam Elshenawy, Senior Lecturer in Postgraduate Medicine at the University of Hertfordshire, who convenes each roundtable and acts as Principal Investigator.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How is the AMR Interface funded?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Through an Economic and Social Research Council Impact Acceleration Account award held at the University of Hertfordshire and administered through Policy Connect, running from March to September 2026, supported by substantial in-kind contributions. No speaker fees are paid and the parliamentary venue is provided in kind through the APPG on AMR.",
                    },
                },
                {
                    "@type": "Question",
                    name: "Is the AMR Interface independent of its host university?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. The university hosts the programme but does not own it. The method, the archive and the outputs remain with the founder, so hosting can transfer without interrupting the roundtable calendar or breaking existing citations.",
                    },
                },
            ],
        },
    ],
};

export default async function LeadershipPage() {
    const components = await ComponentService.getLookup();
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(pageSchema)}}
            />
            <main id="main">
                <Hero data={components.LEADERSHIP_HERO as unknown as HeroSectionData}/>
                <Leadership data={components.LEADERSHIP_LEADERSHIP as unknown as LeadershipSection}/>
                <Governance data={components.LEADERSHIP_GOVERNANCE as unknown as GovernanceSection}/>
                <Portability data={components.LEADERSHIP_PORTABILITY as unknown as PortabilitySection}/>
                <FundingAndDeclarations
                    data={components.LEADERSHIP_FUNDING as unknown as FundingAndDeclarationsSection}/>
                <CTA data={components.LEADERSHIP_CTA as unknown as CTASection}/>
            </main>
        </>
    );
}
