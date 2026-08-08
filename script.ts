import { prisma } from "./lib/prisma";
import bcrypt from "bcryptjs";

async function main() {
    //      Users
    const password = await bcrypt.hash("DrRasha@123", 12);

    const user = await prisma.user.create({
        data: {
            name: "Administrator",
            email: "dra21sha@gmail.com",
            password,
            role: "ADMIN",
        },
    });

    console.log(user);

    // Components
    await prisma.component.createMany({
        data: [
            {
                name:"HOME_HERO",
                data:{
                    "label": "Hero",
                    "ref": "Home",
                    "title_p": "The AMR Interface",
                    "title_h1": "Turning AMR evidence into",
                    "title_span": "parliamentary action",
                    "hero_lede": "An <strong>independent, researcher-led standing channel </strong> between antimicrobial resistance research, the UK Parliament, and the systems where policy becomes practice.",
                    "solid_button_text": "Read the May 2026 policy brief",
                    "solid_button_href": "/outputs/five-recommendations",
                    "soft_button_text": "See how it works",
                    "soft_button_href": "#cycle",
                    "hero_meta": "Founded & led by Dr Rasha Abdelsalam Elshenawy · University of Hertfordshire · ESRC IAA",
                    "hero_image_src": "/images/amr-interface-cover.jpg",
                    "hero_image_alt": "Hero Image",
                    "hero_image_width": 1280,
                    "hero_image_height": 720,
                    "figure_caption": "AMR Parliamentary Roundtable · House of Commons · 18 May 2026",
                    "ribbon_label_1_h3": "Research",
                    "ribbon_label_1_p": "Generating evidence and innovation",
                    "ribbon_label_2_h3": "Policy",
                    "ribbon_label_2_p": "Informing Parliament and policy decisions",
                    "ribbon_label_3_h3": "Practice",
                    "ribbon_label_3_p": "Improving outcomes in health and society"
                }
            },
            {
              name:"ROUNDTABLES_HERO",
              data:   {
                  "label": "HeroRoundTables",
                  "ref": "RoundTables",
                  "title_p": "The standing calendar",
                  "title_h1": "AMR Parliamentary Roundtables",
                  "title_span": "parliamentary action",
                  "hero_lede": "Two hours in Westminster, twice a year, on a shared agenda. Each roundtable is scheduled to parliamentary sitting patterns so that parliamentarians can actually be in the room — and each one closes with recommendations that carry a named owner and a measurable indicator.",
                  "facts": [
                      {
                          "n": "2×",
                          "t": "Roundtables a year, on a fixed calendar"
                      },
                      {
                          "n": "120",
                          "t": "Minutes, start to finish"
                      },
                      {
                          "n": "20+",
                          "t": "Senior stakeholders in the room"
                      },
                      {
                          "n": "4",
                          "t": "Public outputs from every cycle"
                      }
                  ]
              }
            },
            {
                name:"OUTPUTS_HERO",
                data:   {
                    "label": "HeroOutputs",
                    "ref": "Outputs",
                    "title_p": "The cumulative archive",
                    "title_h1": "Policy briefs, papers &amp; reports",
                    "title_span": "",
                    "hero_lede": "Two hours in Westminster, twice a year, on a shared agenda. Each roundtable is scheduled to parliamentary sitting patterns so that parliamentarians can actually be in the room — and each one closes with recommendations that carry a named owner and a measurable indicator.",
                    "facts": [
                        {
                            "n": "4",
                            "t": "Outputs from every cycle"
                        },
                        {
                            "n": "1",
                            "t": "Published to date"
                        },
                        {
                            "n": "3",
                            "t": "In preparation"
                        },
                        {
                            "n": "Free",
                            "t": "To read, with no paywall"
                        }
                    ]
                }
            },
            {
                name:"FOOTER",
                data:   {
                    "brand_name": "The AMR Interface",
                    "brand_sub": "Research · Policy · Practice",
                    "brand_p": "An evidence-based, researcher-led standing channel between UK antimicrobial resistance research and Parliament. Founded and led by Dr Rasha Abdelsalam Elshenawy.",
                    "links": [
                        {
                            "title":"Roundtables",
                            "href": "/roundtables"
                        },
                        {
                            "title":"Outputs & publications",
                            "href": "/outputs"
                        },
                        {
                            "title":"Leadership & governance",
                            "href": "/leadership"
                        },
                        {
                            "title":"Engage with us",
                            "href": "/engage"
                        }
                    ],
                    "email": "r.elshenawy@herts.ac.uk",
                    "contact": [
                        {
                            "li": "University of Hertfordshire"
                        },
                        {
                            "li": "Hosted under the ESRC Impact Acceleration Account"
                        }
                    ]



                }
            },
            {
                name:"HEADER",
                data:   {
                    "nav": [
                        { "href": "/", "label": "Home" },
                        { "href": "/roundtables", "label": "Roundtables" },
                        { "href": "/outputs", "label": "Outputs" },
                        { "href": "/leadership", "label": "Leadership" },
                        { "href": "/engage", "label": "Engage" }
                    ],
                    "cta_link":"/engage#register",
                    "cta_text": "Register interest"
                }
            },
            {
                name:"HOME_CTA",
                data:   {
                    "cta_title_h2": "Get involved",
                    "cta_title_p": "Register your interest to receive the call for reflections and the policy brief that follows the next roundtable.",
                    "btns": [
                        {
                            "href": "/engage#register",
                            "title": "Register interest"

                        },
                        {
                            "href": "mailto:r.elshenawy@herts.ac.uk",
                            "title": "Email the Interface"

                        }
                    ]
                }
            },
            {
                name:"OUTPUTS_CTA",
                data:   {
                    "cta_title_h2": "Get each output on release",
                    "cta_title_p": "Register once to receive every policy brief, the methodology paper when it is accepted, and the quarterly update on AMR and Parliament.",
                    "btns": [
                        {
                            "href": "/engage#register",
                            "title": "Register interest"

                        },
                        {
                            "href": "/roundtables",
                            "title": "See where they come from"

                        }
                    ]
                }
            },
            {
                name:"ROUNDTABLES_CTA",
                data:   {
                    "cta_title_h2": "Propose a topic for the next roundtable",
                    "cta_title_p": "The agenda for the next roundtable is open. Researchers, professional bodies and patient organisations can put forward evidence, and parliamentary offices can ask to be included.",
                    "btns": [
                        {
                            "href": "/engage#researchers",
                            "title": "Submit a proposal"

                        },
                        {
                            "href": "mailto:r.elshenawy@herts.ac.uk",
                            "title": "Email the Interface"

                        }
                    ]
                }
            },
            {
                name:"ENGAGE_CTA",
                data:   {
                    "cta_title_h2": "Or simply write to us",
                    "cta_title_p": "If a form is not the right way to say it, the convenor's inbox is open. Please put the route in your subject line so that it reaches the right pile quickly.",
                    "btns": [
                        {
                            "href": "mailto:r.elshenawy@herts.ac.uk",
                            "title": "r.elshenawy@herts.ac.uk"

                        },
                        {
                            "href": "/leadership",
                            "title": "Who you will be writing to"

                        }
                    ]
                }
            },
            {
                name:"LEADERSHIP_CTA",
                data:   {
                    "cta_title_h2": "Host, fund or partner the next cycle",
                    "cta_title_p": "The Interface is looking for partners for the next roundtable cycle and for the funding that carries the annual report to Parliament. Institutions, funders and professional bodies are welcome to get in touch.",
                    "btns": [
                        {
                            "href": "mailto:r.elshenawy@herts.ac.uk",
                            "title": "Contact the convenor"

                        },
                        {
                            "href": "/outputs",
                            "title": "Read the outputs first"

                        }
                    ]
                }
            },
            {
                name:"LEADERSHIP_HERO",
                data:   {
                    "label": "HeroLeadership",
                    "ref": "LeaderShip",
                    "title_p": "Leadership & governance",
                    "title_h1": "Who runs the AMR Interface",
                    "title_span": "",
                    "hero_lede": "The Interface is researcher-led and independent. It is convened by one named academic, hosted by a university rather than owned by one, and built so that the method survives the grant that started it.",
                    "facts": [
                        { "n": "2026", "t": "Founded, and led by its founder" },
                        { "n": "ESRC", "t": "Impact Acceleration Account, current funding" },
                        { "n": "In kind", "t": "All expert contributions, including the venue" },
                        { "n": "Portable", "t": "Owned by the researcher, not the institution" }
                    ]
                }
            },
            {
                name:"ENGAGE_HERO",
                data:   {
                    "label": "HeroEngage",
                    "ref": "Engage",
                    "title_p": "Four audiences, four routes in",
                    "title_h1": "Find your route in",
                    "title_span": "",
                    "hero_lede": "The Interface only works if the right people can reach it. Pick the description that fits you — each route says exactly what to send and what happens next. One registration form covers all four.",
                    "facts": [
                        { "n": "Route 01", "t": "Parliamentary & policy staff", "cta": "Brief us, or be briefed →", "href": "#parliament" },
                        { "n": "Route 02", "t": "Researchers", "cta": "Submit evidence →", "href": "#researchers" },
                        { "n": "Route 03", "t": "Patients & advocates", "cta": "Share your voice →", "href": "#patients" },
                        { "n": "Route 04", "t": "Public & press", "cta": "Get the outputs →", "href": "#press" }
                    ]
                }
            },
            {
                name:"HOME_HOWITWORKS",
                data:   {
                    "label": "HowItWorks",
                    "ref": "Home",
                    "sec_head_p": "How the AMR Interface works",
                    "sec_head_h2": "Convene · Translate · Account",
                    "sec_head_span": "Three functions, repeated on a fixed rhythm. Each one produces a public record.",
                    "cards": [
                        { "n":"01","h3": "Convene", "p": "Bring researchers, parliamentarians, regulators, professional bodies and patient advocates into the same room — twice a year, on a shared agenda." },
                        { "n":"02","h3": "Translate", "p": "Convert convergent evidence into concrete recommendations for the UK National Action Plan, each with a named owner and a measurable indicator." },
                        { "n":"03","h3": "Account", "p": "Report annually to Parliament on uptake and implementation — closing the loop the Public Accounts Committee identified as missing." }
                    ]
                }
            },
            {
                name:"HOME_OUTPUT",
                data:   {
                    "label": "Outputs",
                    "ref": "Home",
                    "sec_head_p": "The cumulative archive",
                    "sec_head_h2": "Policy briefs, reports & publication",
                    "sec_head_span": "Everything the Interface produces is public, dated and citable.",
                    "outputCards": [
                        {
                            "href": "/outputs/five-recommendations",
                            "kind": "Policy brief",
                            "title": "Five Recommendations",
                            "meta": "June 2026 · 1,650 words",
                            "go": "Read the brief →"
                        },
                        {
                            "href": "/outputs/translation-cycle",
                            "kind": "Peer-reviewed",
                            "title": "The Translation Cycle",
                            "meta": "JAC-AMR · under review",
                            "go": "Read preprint →"
                        },
                        {
                            "href": "/outputs/esrc-iaa-final-report",
                            "kind": "Funder report",
                            "title": "ESRC IAA Final Report",
                            "meta": "March 2027",
                            "go": "Download →"
                        },
                        {
                            "href": "/outputs/research-to-action-roadmap",
                            "kind": "Public roadmap",
                            "title": "Research → Action",
                            "meta": "BSAC & UKHSA · 2026",
                            "go": "View roadmap →"
                        }
                    ]
                }
            },
            {
                name:"HOME_TESTIMONIAL",
                data:   {
                    "label": "Testimonial",
                    "ref": "Home",
                    "title_h2": "The patient voice",
                    "quota": "You cannot create policies for patients without working with the people who are affected. There is nothing about us without us.",
                    "cite": "Vanessa Carter",
                    "span": "AMR survivor · Founder, The AMR Narrative · Chair, WHO Task Force of AMR Survivors"
                }
            },
            {
                name: "RoundTablesHome",
                data: {
                    label: "RoundTables",
                    ref: "Home",
                    sec_head_p: "A standing calendar, not a one-off",
                    sec_head_h2: "AMR Parliamentary Roundtables",
                    sec_head_span: "Two hours, in Westminster, twice a year — scheduled to parliamentary sitting patterns so that parliamentarians can actually be in the room.",
                    "rounds":[
                        {"type":"round", href: "/roundtables/may-2026", "when":"May 2026", "status":"Complete", "heading":"Translating AMR Research into Parliamentary Action", "paragraph":"House of Commons. Hosted by Andrew Lewin MP and Dr Danny Chambers MP, chaired by Professor Sam Salek. Five recommendations, four outputs.","go":"View roundtable" },
                        {"type":"round planned", href: "/roundtables", "when":"Autumn 2026", "status":"In planning", "heading":"From recommendations to implementation", "paragraph":"The accountability session: what has been adopted, what has stalled, and what the next National Action Plan review needs to carry.","go":"Propose a topic" }
                    ]
                },
            }
        ],
    });

    // Meta Data
    // await prisma.metaData.createMany({
    //     data: [
    //         {
    //             pageName: "home",
    //             data: {
    //                 title: "The AMR Interface | AMR Research into Parliamentary Action",
    //                 description:
    //                     "The AMR Interface is an independent, researcher-led channel between antimicrobial resistance research and the UK Parliament — convening evidence, translating it into policy and reporting on implementation.",
    //                 alternates: {canonical: "/"},
    //             },
    //         },
    //         {
    //             pageName: "engage",
    //             data: {
    //                 title: "Engage — Four Routes In",
    //                 description:
    //                     "Request a parliamentary briefing on antimicrobial resistance, propose a roundtable topic, share lived experience of AMR, or register to receive every policy brief the AMR Interface publishes.",
    //                 alternates: { canonical: "/engage" },
    //                 openGraph: {
    //                     url: "/engage",
    //                     title: "Engage — Four Routes In | The AMR Interface",
    //                     description:
    //                         "Brief us or be briefed, submit evidence, share your voice, or register for every policy brief. One form covers all four routes.",
    //                 },
    //             },
    //         },
    //         {
    //             pageName: "leadership",
    //             data: {
    //                 title: "Leadership & Governance",
    //                 description:
    //                     "Who runs the AMR Interface — founder and Principal Investigator Dr Rasha Abdelsalam Elshenawy, the governance rules, the funding model, declared interests and how the programme stays portable.",
    //                 alternates: { canonical: "/leadership" },
    //                 openGraph: {
    //                     type: "profile",
    //                     url: "/leadership",
    //                     title: "Leadership & Governance | The AMR Interface",
    //                     description:
    //                         "Researcher-led, independent and portable: who convenes the AMR Interface, how decisions are made, and where the funding comes from.",
    //                 },
    //             },
    //         },
    //         {
    //             pageName: "outputs",
    //             data: {
    //                 title: "Policy Briefs, Papers & Reports",
    //                 description:
    //                     "The cumulative archive of AMR Interface outputs — policy briefs, peer-reviewed papers, public roadmaps and funder reports. All free to read, dated and citable.",
    //                 alternates: {canonical: "/outputs"},
    //                 openGraph: {
    //                     url: "/outputs",
    //                     title: "Policy Briefs, Papers & Reports | The AMR Interface",
    //                     description:
    //                         "Everything the AMR Interface produces is public, dated and citable — policy briefs, peer-reviewed papers, roadmaps and funder reports.",
    //                 },
    //             },
    //         },
    //         {
    //             pageName: "roundtables",
    //             data: {
    //                 title: "AMR Parliamentary Roundtables",
    //                 description:
    //                     "The standing calendar of AMR parliamentary roundtablespage in Westminster — past, upcoming and planned sessions, the two-hour format, who takes part and what each one produces.",
    //                 alternates: {canonical: "/roundtablespage"},
    //                 openGraph: {
    //                     url: "/roundtables",
    //                     title: "AMR Parliamentary Roundtables | The AMR Interface",
    //                     description:
    //                         "Two hours in Westminster, twice a year. The standing calendar of AMR parliamentary roundtablespage — past, upcoming and planned.",
    //                 },
    //             },
    //         },
    //     ],
    // });
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });