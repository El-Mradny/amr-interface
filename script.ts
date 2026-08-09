import "dotenv/config";
import prisma from "./lib/prisma";

// import bcrypt from "bcryptjs";
async function main() {

    console.log("DATABASE_HOST:", process.env.DATABASE_HOST);

    await prisma.$queryRaw`SELECT 1`;

    console.log("✅ Database connection works");

    // await prisma.component.create({
    //     data: {
    //         name: "HOME_STATS",
    //         data: {
    //             label: "STATS",
    //             ref: "Home",
    //             motto_p1: "Convening evidence.",
    //             motto_p2: "Translating policy.",
    //             motto_span: "Driving implementation.",
    //             stats: [
    //                 { n: "20+", span: "Senior stakeholders" },
    //                 { n: "5", span: "Actionable recommendations" },
    //                 { n: "4", span: "Outputs per cycle" },
    //                 { n: "2", span: "Roundtables a year" },
    //             ]
    //         }
    //     }
    // });


    await prisma.component.createMany({
        data: [
            {
                name: "ENGAGE_FOUR_ROUTES",
                data: {
                    label: "FOUR_ROUTES",
                    ref: "ENGAGE",
                    sec_head_p: "What to send, and where it goes",
                    sec_head_h2: "The four routes",
                    sec_head_p2: "Everything arrives in the same inbox and is read by the convenor. Please allow up to ten working days for a reply during parliamentary recess.",
                    routes: [
                        {
                            id: "parliament",
                            n: "Route 01",
                            who: "Parliamentary & policy staff",
                            title: "Brief us, or be briefed",
                            body: "Request a briefing for a member or a committee, ask for evidence on a specific question, or invite the Interface to give evidence to a Select Committee. We can also supply background for a written question or a debate.",
                            send: [
                                "The member or committee, and the deadline you are working to",
                                "The question you need answered, in one line",
                                "Whether you need a written note, a meeting or an oral briefing",
                            ],
                            pill: "pill-done",
                            pillText: "Priority route",
                            cta: "Email the convenor →",
                            href: "mailto:r.elshenawy@herts.ac.uk?subject=Parliamentary%20briefing%20request",
                        },
                        {
                            id: "researchers",
                            n: "Route 02",
                            who: "Researchers",
                            title: "Submit evidence or propose a topic",
                            body: "Propose a subject for a future roundtable, send a written reflection for the record, or ask about co-authoring the methodology paper. Proposals are assessed on the strength of the evidence and on whether a parliamentary decision is genuinely open on the question.",
                            send: [
                                "A title and a paragraph on the policy question at stake",
                                "Two or three references, or a link to your published work",
                                "Who else would need to be in the room for it to be useful",
                            ],
                            pill: "pill-plan",
                            pillText: "Agenda open",
                            cta: "Send a proposal →",
                            href: "mailto:r.elshenawy@herts.ac.uk?subject=Roundtable%20topic%20proposal",
                        },
                        {
                            id: "patients",
                            n: "Route 03",
                            who: "Patients & advocates",
                            title: "Share your voice",
                            body: "Contribute lived experience of antimicrobial resistance, or join the standing patient and public involvement panel. Lived experience is a standing part of every evidence session, and nothing is published in your name without your written agreement.",
                            send: [
                                "As much or as little of your experience as you want to share",
                                "Whether you are willing to be named, or would rather contribute anonymously",
                                "Whether you would consider speaking at a roundtable",
                            ],
                            pill: "pill-plan",
                            pillText: "Panel open",
                            cta: "Get in touch →",
                            href: "mailto:r.elshenawy@herts.ac.uk?subject=Patient%20and%20public%20involvement",
                        },
                        {
                            id: "press",
                            n: "Route 04",
                            who: "Public & press",
                            title: "Receive the outputs, or request comment",
                            body: "Register below to receive each policy brief on release and a quarterly update on AMR and Parliament. Journalists can request comment, an interview or background on any published output.",
                            send: [
                                "For press: your outlet, the angle and your deadline",
                                "For everyone else: just the registration form is enough",
                            ],
                            pill: "pill-next",
                            pillText: "Open to all",
                            cta: "Register below →",
                            href: "#register",
                        },
                    ]

                }
            },
            {
                name: "ENGAGE_REGISTER",
                data: {
                    label: "REGISTER",
                    ref: "ENGAGE",
                    sec_head_p: "One form, all four routes",
                    sec_head_h2: "Register your interest",
                    sec_head_p2: "Registering puts you on the list for policy briefs and the quarterly update. If you are proposing a topic or requesting a briefing, add the detail in the message box and it will reach the convenor directly.",
                    privacy: [
                        {k: "Stored", v: "Your name, email, organisation and the route you selected"},
                        {
                            k: "Used for",
                            v: "Sending policy briefs, the quarterly update, and replying to your message. Nothing else"
                        },
                        {
                            k: "Shared",
                            v: "Never sold, never shared with a third party [name your email provider here — it is a processor and should be disclosed]"
                        },
                        {
                            k: "Kept",
                            v: "Until you unsubscribe, or [confirm a retention period — 24 months of inactivity is a common choice]"
                        },
                        {k: "Unsubscribing", v: "One click in any email, or reply asking to be removed"},
                        {
                            k: "Your rights",
                            v: "You can ask for a copy of your data or its deletion at any time by emailing the convenor"
                        },
                        {
                            k: "Controller",
                            v: "[Confirm whether the University of Hertfordshire or the programme is the data controller — this determines which privacy notice applies]"
                        },
                    ]
                }
            },
            {
                name: "ENGAGE_WHAT_TO_EXPECT",
                data: {
                    label: "WHAT_TO_EXPECT",
                    ref: "ENGAGE",
                    sec_head_p: "After you register",
                    sec_head_h2: "What to expect",
                    after: [
                        {
                            n: "Straight away",
                            t: "A short confirmation",
                            d: "One email confirming you are on the list. If you sent a message, the convenor replies personally — usually within a week, longer during recess."
                        },
                        {
                            n: "Every cycle",
                            t: "The policy brief",
                            d: "Each brief arrives on the day it is published, with the recommendations, their owners and their indicators in the email itself rather than behind a link."
                        },
                        {
                            n: "Four times a year",
                            t: "The quarterly update",
                            d: "A short note on what has moved in AMR policy, what the Interface has published, and what is coming to Parliament next. No more than that."
                        },
                    ]
                }
            },
            {
                name: "LEADERSHIP_LEADERSHIP",
                data: {
                    label: "LEADERSHIP",
                    ref: "LEADERSHIP",
                    image_src: "",
                    image_alt: "",
                    figcaption: " Founder & Principal Investigator",
                    bio_p: "The convenor",
                    bio_h2: "Dr Rasha Abdelsalam Elshenawy",
                    bio_role: "Senior Lecturer in Postgraduate Medicine · University of Hertfordshire",
                    bio_paragraph1: "Dr Elshenawy founded and leads the AMR Interface. Her work sits at the point where antimicrobial resistance research meets policy: antimicrobial stewardship implementation, AMR surveillance, and the question of how evidence actually reaches the people who decide.",
                    bio_paragraph2: `She submitted written evidence to the UK Parliament's inquiry into antimicrobial resistance, convened the May 2026 roundtable at the House of Commons, and is the author of the translation method the programme runs on. She supervises postgraduate research on AMR and stewardship, and works across UK and global health policy settings.`,
                    roles: [
                        {
                            r: "Senior Lecturer in Postgraduate Medicine",
                            o: "School of Health, Medicine and Life Sciences, University of Hertfordshire"
                        },
                        {r: "Associate Editor", o: "JAC-Antimicrobial Resistance, Oxford University Press"},
                        {r: "Trustee and Council Member", o: "British Society for Antimicrobial Chemotherapy"},
                        {r: "Director, Antimicrobial Stewardship School", o: "FADIC UK"},
                    ]

                }
            },
            {
                name: "LEADERSHIP_GOVERNANCE",
                data: {
                    label: "GOVERNANCE",
                    ref: "LEADERSHIP",
                    sec_head_p: "How decisions get made",
                    sec_head_h2: "Governance",
                    sec_head_p2: "The Interface is small by design. These are the rules it runs by, and they are published here so that participants can hold it to them.",
                    rules: [
                        {
                            n: "Rule 01",
                            t: "Independent agenda",
                            d: "Topics are set by the convenor on the evidence, in consultation with the APPG secretariat and participating researchers. No funder, sponsor or department sets the agenda or sees recommendations before they are agreed in the room."
                        },
                        {
                            n: "Rule 02",
                            t: "Declared interests",
                            d: "Every contributor declares relevant interests before speaking, and the declarations sit in the session record. Anyone with a commercial interest in a recommendation does not draft it."
                        },
                        {
                            n: "Rule 03",
                            t: "Patients in the room",
                            d: "Lived experience is a standing part of the evidence session, not a closing remark. The patient contribution carries the same weight as the clinical and regulatory ones."
                        },
                    ]
                }
            },
            {
                name: "LEADERSHIP_PORTABILITY",
                data: {
                    label: "PORTABILITY",
                    ref: "LEADERSHIP",
                    sec_head_p: "Built to outlast the grant",
                    sec_head_h2: "A portable programme",
                    sec_head_p2: "Most impact projects end when their funding does. The Interface was designed the other way round: the university hosts it, but it does not own it.",
                    points: [
                        {
                            t: "The method is written down",
                            d: "The six-stage Translation Cycle is documented in a peer-reviewed paper precisely so that it can be repeated — by this programme, or by someone else in a different policy domain."
                        },
                        {
                            t: "The record is independent",
                            d: "The domain, the archive and the outputs sit with the programme rather than inside an institutional site, so that a change of employer does not break a single citation."
                        },
                        {
                            t: "The relationships are named",
                            d: "Hosts, chairs and contributors are published for every session. Nothing depends on a private contact list."
                        },
                    ],
                    hosting: [
                        {k: "Host", v: "University of Hertfordshire, School of Health, Medicine and Life Sciences"},
                        {
                            k: "Mechanism",
                            v: "ESRC Impact Acceleration Account award, administered through Policy Connect"
                        },
                        {k: "Term", v: "March to September 2026"},
                        {k: "Ownership", v: "The programme, its method and its outputs remain with the founder"},
                        {
                            k: "Continuity",
                            v: "Hosting can transfer without interrupting the roundtable calendar or the archive"
                        },
                    ]
                }
            },
            {
                name: "LEADERSHIP_FUNDING",
                data: {
                    label: "FUNDING",
                    ref: "LEADERSHIP",
                    sec_head_p:"Funding & declarations",
                    sec_head_h2:"Where the money comes from",
                    sec_head_p2:"The programme runs on a small award and a large amount of donated expertise. Both are stated here in full.",
                    funds:[
                        { k: "Funder", v: "Economic and Social Research Council, through the Impact Acceleration Account held at the University of Hertfordshire" },
                        { k: "Administered by", v: "Policy Connect" },
                        { k: "Award", v: "£5,000 [remove this line if you would rather not publish the figure]" },
                        { k: "Period", v: "March to September 2026" },
                        { k: "Purpose", v: "Translating existing evidence into policy — classified as impact activity, not new research" },
                        { k: "Next", v: "The method and its outputs are intended to support future NIHR and MRC applications" },
                    ],
                    declarations:[
                        { k: "Commercial", v: "No commercial sponsorship, and no industry funding of any roundtable [confirm before publishing]" },
                        { k: "Speaker fees", v: "None paid. Every expert contributor gives their time without a fee" },
                        { k: "Venue", v: "Provided in kind through the All-Party Parliamentary Group on AMR" },
                        { k: "Editorial", v: "The convenor is an Associate Editor at JAC-Antimicrobial Resistance and takes no part in decisions on Interface submissions to that journal" },
                        { k: "Membership", v: "The convenor is a Trustee of BSAC, which contributes expertise to the programme in kind" },
                        { k: "Corrections", v: "Any error in a declaration is corrected on this page and dated" },
                    ]

                }
            }

        ],
    });

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