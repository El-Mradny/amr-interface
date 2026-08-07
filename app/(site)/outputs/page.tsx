import type {Metadata} from "next";
import Archive from "@/components/outputspage/Archive";
import HowToCite from "@/components/outputspage/HowToCite";
import HowToPublish from "@/components/outputspage/HowToPublish";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import {ComponentService} from "@/services/component.service";
import {parseJson} from "@/lib/json";
import {CTASection} from "@/types/components/cta";
import {HeroSectionData} from "@/types/components/hero";

export const metadata: Metadata = {
    title: "Policy Briefs, Papers & Reports",
    description:
        "The cumulative archive of AMR Interface outputs — policy briefs, peer-reviewed papers, public roadmaps and funder reports. All free to read, dated and citable.",
    alternates: {canonical: "/outputs"},
    openGraph: {
        url: "/outputs",
        title: "Policy Briefs, Papers & Reports | The AMR Interface",
        description:
            "Everything the AMR Interface produces is public, dated and citable — policy briefs, peer-reviewed papers, roadmaps and funder reports.",
    },
};

const pageSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "BreadcrumbList",
            itemListElement: [
                {"@type": "ListItem", position: 1, name: "Home", item: "https://amrinterface.org/"},
                {"@type": "ListItem", position: 2, name: "Outputs", item: "https://amrinterface.org/outputs"},
            ],
        },
        {
            "@type": "CollectionPage",
            "@id": "https://amrinterface.org/outputs#webpage",
            url: "https://amrinterface.org/outputs",
            name: "Policy briefs, papers & reports | The AMR Interface",
            description:
                "The cumulative archive of AMR Interface outputs — policy briefs, peer-reviewed papers, public roadmaps and funder reports. All free to read and citable.",
            isPartOf: {"@id": "https://amrinterface.org/#website"},
            about: {"@id": "https://amrinterface.org/#organization"},
            inLanguage: "en-GB",
            mainEntity: {
                "@type": "ItemList",
                itemListOrder: "https://schema.org/ItemListOrderDescending",
                numberOfItems: 4,
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        item: {
                            "@type": "Report",
                            "@id": "https://amrinterface.org/outputs/five-recommendations",
                            name: "Five Recommendations for Translating AMR Evidence into Action",
                            datePublished: "2026-06",
                            author: {"@type": "Person", name: "Dr Rasha Abdelsalam Elshenawy"},
                            publisher: {"@id": "https://amrinterface.org/#organization"},
                            inLanguage: "en-GB",
                            isAccessibleForFree: true,
                            description:
                                "Five recommendations agreed at the May 2026 AMR parliamentary roundtable, each with a named owner and a measurable indicator.",
                        },
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        item: {
                            "@type": "ScholarlyArticle",
                            "@id": "https://amrinterface.org/outputs/translation-cycle",
                            name: "The AMR Translation Cycle: a replicable method for research-to-parliament translation",
                            author: {"@type": "Person", name: "Dr Rasha Abdelsalam Elshenawy"},
                            publisher: {"@id": "https://amrinterface.org/#organization"},
                            inLanguage: "en-GB",
                            isAccessibleForFree: true,
                            creativeWorkStatus: "Under review",
                            description:
                                "Methodology paper documenting the six-stage AMR Translation Cycle, submitted to JAC-Antimicrobial Resistance.",
                        },
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        item: {
                            "@type": "CreativeWork",
                            name: "Research to Action: a roadmap for AMR evidence in UK policy",
                            publisher: {"@id": "https://amrinterface.org/#organization"},
                            inLanguage: "en-GB",
                            isAccessibleForFree: true,
                            creativeWorkStatus: "In preparation",
                            description:
                                "A public-facing roadmap of where AMR evidence enters the UK policy system and where it stalls.",
                        },
                    },
                    {
                        "@type": "ListItem",
                        position: 4,
                        item: {
                            "@type": "Report",
                            name: "ESRC IAA final report",
                            publisher: {"@id": "https://amrinterface.org/#organization"},
                            inLanguage: "en-GB",
                            isAccessibleForFree: true,
                            creativeWorkStatus: "In preparation",
                            description:
                                "End-of-award report on participation, distribution, citation and uptake against each recommendation.",
                        },
                    },
                ],
            },
        },
        {
            "@type": "FAQPage",
            mainEntity: [
                {
                    "@type": "Question",
                    name: "Are the AMR Interface outputs free to read?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Every output is free to read and redistribute on release, with no paywall and no registration required to download it.",
                    },
                },
                {
                    "@type": "Question",
                    name: "How should I cite an AMR Interface policy brief?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Cite it as: Elshenawy, R. A. (2026) Five Recommendations for Translating AMR Evidence into Action. The AMR Interface, University of Hertfordshire, https://amrinterface.org/outputs/five-recommendations",
                    },
                },
                {
                    "@type": "Question",
                    name: "Can recommendations be quoted in parliamentary papers?",
                    acceptedAnswer: {
                        "@type": "Answer",
                        text: "Yes. Recommendations may be quoted in full in parliamentary and departmental papers, and outputs keep their URL permanently so that citations continue to resolve.",
                    },
                },
            ],
        },
    ],
};


export default async function OutputsPage() {
    const components = await ComponentService.getAll();
    const outputComponents = components.filter((c) =>
        c.name.includes("Outputs")
    );
    if (!components) return ;

    const lookup = Object.fromEntries(
        outputComponents.map((c) => [c.name, c])
    );
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(pageSchema)}}
            />
            {/*<a className="skip" href="#main">Skip to main content</a>*/}
            <main id="main">
                <Hero data={parseJson<HeroSectionData>(lookup["HeroOutputs"].data)}/>
                <Archive/>
                <HowToCite/>
                <HowToPublish/>
                <CTA data={parseJson<CTASection>(lookup["CTAOutputs"].data)}/>
            </main>
        </>
    );
}
