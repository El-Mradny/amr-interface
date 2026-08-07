import type { Metadata } from "next";
import FourRoutes from "@/components/engagepage/FourRoutes";
import Register from "@/components/engagepage/Register";
import WhatToExpect from "@/components/engagepage/WhatToExpect";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Engage — Four Routes In",
  description:
    "Request a parliamentary briefing on antimicrobial resistance, propose a roundtable topic, share lived experience of AMR, or register to receive every policy brief the AMR Interface publishes.",
  alternates: { canonical: "/engage" },
  openGraph: {
    url: "/engage",
    title: "Engage — Four Routes In | The AMR Interface",
    description:
      "Brief us or be briefed, submit evidence, share your voice, or register for every policy brief. One form covers all four routes.",
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://amrinterface.org/" },
        { "@type": "ListItem", position: 2, name: "Engage", item: "https://amrinterface.org/engage" },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": "https://amrinterface.org/engage#webpage",
      url: "https://amrinterface.org/engage",
      name: "Engage | The AMR Interface",
      description:
        "Four routes into the AMR Interface — request a parliamentary briefing, submit evidence, share lived experience, or register to receive every policy brief.",
      isPartOf: { "@id": "https://amrinterface.org/#website" },
      about: { "@id": "https://amrinterface.org/#organization" },
      inLanguage: "en-GB",
    },
    {
      "@type": "Organization",
      "@id": "https://amrinterface.org/#organization",
      contactPoint: [
        { "@type": "ContactPoint", contactType: "Parliamentary and policy enquiries", email: "r.elshenawy@herts.ac.uk", availableLanguage: "English", areaServed: "GB" },
        { "@type": "ContactPoint", contactType: "Research and evidence submissions", email: "r.elshenawy@herts.ac.uk", availableLanguage: "English" },
        { "@type": "ContactPoint", contactType: "Patient and public involvement", email: "r.elshenawy@herts.ac.uk", availableLanguage: "English" },
        { "@type": "ContactPoint", contactType: "Media enquiries", email: "r.elshenawy@herts.ac.uk", availableLanguage: "English" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How do I request an AMR briefing for a parliamentarian or committee?",
          acceptedAnswer: { "@type": "Answer", text: "Email the convenor with the member or committee involved, your deadline, the question in one line, and whether you need a written note, a meeting or an oral briefing." },
        },
        {
          "@type": "Question",
          name: "How do I propose a topic for a future AMR roundtable?",
          acceptedAnswer: { "@type": "Answer", text: "Send a title and a paragraph on the policy question at stake, two or three references or a link to your published work, and a note of who else would need to be in the room. Proposals are assessed on the strength of the evidence and whether a parliamentary decision is genuinely open on the question." },
        },
        {
          "@type": "Question",
          name: "What happens to my details when I register?",
          acceptedAnswer: { "@type": "Answer", text: "Your name, email, organisation and selected route are stored and used only to send policy briefs and the quarterly update, and to reply to your message. Details are never sold or shared with a third party, and you can unsubscribe or request deletion at any time." },
        },
        {
          "@type": "Question",
          name: "How often will I hear from the AMR Interface?",
          acceptedAnswer: { "@type": "Answer", text: "Each policy brief on the day it is published, and a quarterly update four times a year." },
        },
      ],
    },
  ],
};





export default function EngagePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      {/*<a className="skip" href="#main">Skip to main content</a>*/}
      <main id="main">
        <Hero name={"HeroEngage"} />
        <FourRoutes />
        <Register />
        <WhatToExpect />
        <CTA name={"CTAEngage"}/>

      </main>
    </>
  );
}
