import type {Metadata, Viewport} from "next";
import {Fraunces, IBM_Plex_Sans, IBM_Plex_Mono} from "next/font/google";
import "./globals.css";


/* ------------------------------------------------------------------
   FONTS — self-hosted by next/font (no render-blocking Google request)
------------------------------------------------------------------ */
const fraunces = Fraunces({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "600", "700"],
    style: ["normal", "italic"],
    variable: "--font-fraunces",
});

const plexSans = IBM_Plex_Sans({
    subsets: ["latin"],
    display: "swap",
    weight: ["400", "500", "600", "700"],
    variable: "--font-plex-sans",
});

const plexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    display: "swap",
    weight: ["500", "600"],
    variable: "--font-plex-mono",
});

/* ------------------------------------------------------------------
   SITE-WIDE SEO
------------------------------------------------------------------ */
export const metadata: Metadata = {
    metadataBase: new URL("https://amrinterface.org"),
    title: {
        default: "The AMR Interface | AMR Research into Parliamentary Action",
        template: "%s | The AMR Interface",
    },
    description:
        "The AMR Interface is an independent, researcher-led channel between antimicrobial resistance research and the UK Parliament — convening evidence, translating it into policy and reporting on implementation.",
    keywords: [
        "AMR Interface",
        "antimicrobial resistance",
        "antimicrobial stewardship",
        "UK Parliament",
        "AMR policy",
        "UK National Action Plan on AMR",
        "research to policy translation",
        "parliamentary roundtable",
        "policy brief",
    ],
    authors: [{name: "Dr Rasha Abdelsalam Elshenawy"}],
    creator: "Dr Rasha Abdelsalam Elshenawy",
    publisher: "The AMR Interface",
    alternates: {canonical: "/"},
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
        },
    },
    openGraph: {
        type: "website",
        locale: "en_GB",
        url: "/",
        siteName: "The AMR Interface",
        title: "The AMR Interface | AMR Research into Parliamentary Action",
        description:
            "An independent, researcher-led channel between antimicrobial resistance research, the UK Parliament and the systems where policy becomes practice.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Translating AMR Research into Parliamentary Action — the AMR Interface",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "The AMR Interface | AMR Research into Parliamentary Action",
        description:
            "An independent, researcher-led channel between antimicrobial resistance research, the UK Parliament and the systems where policy becomes practice.",
        images: ["/og-image.jpg"],
    },
    category: "health policy",
};

export const viewport: Viewport = {
    themeColor: "#6B0F22",
    width: "device-width",
    initialScale: 1,
};

/* ------------------------------------------------------------------
   STRUCTURED DATA (Organization + WebSite + Person)
------------------------------------------------------------------ */
const siteSchema = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": "Organization",
            "@id": "https://amrinterface.org/#organization",
            name: "The AMR Interface",
            alternateName: "AMR Interface",
            url: "https://amrinterface.org/",
            logo: "https://amrinterface.org/logo.png",
            email: "r.elshenawy@herts.ac.uk",
            description:
                "An independent, researcher-led standing channel between antimicrobial resistance research, the UK Parliament and the systems where policy becomes practice.",
            founder: {
                "@type": "Person",
                "@id": "https://amrinterface.org/#rasha",
                name: "Dr Rasha Abdelsalam Elshenawy",
                jobTitle: "Senior Lecturer in Postgraduate Medicine",
                affiliation: {
                    "@type": "CollegeOrUniversity",
                    name: "University of Hertfordshire",
                },
                knowsAbout: [
                    "Antimicrobial resistance",
                    "Antimicrobial stewardship",
                    "Health policy",
                    "Research to policy translation",
                ],
            },
            funder: {
                "@type": "Organization",
                name: "Economic and Social Research Council Impact Acceleration Account",
            },
            areaServed: {"@type": "Country", name: "United Kingdom"},
        },
        {
            "@type": "WebSite",
            "@id": "https://amrinterface.org/#website",
            url: "https://amrinterface.org/",
            name: "The AMR Interface",
            inLanguage: "en-GB",
            publisher: {"@id": "https://amrinterface.org/#organization"},
        },
    ],
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en-GB"
            className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable}`}
        >
        <body>
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{__html: JSON.stringify(siteSchema)}}
        />


        {children}


        </body>
        </html>
    );
}
