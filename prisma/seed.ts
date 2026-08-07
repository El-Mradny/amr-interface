import { PrismaClient} from "@/generated/prisma/client";
import {PrismaMariaDb} from "@prisma/adapter-mariadb";
import bcrypt from "bcryptjs";

const adapter = new PrismaMariaDb({
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port: 3306,
    connectionLimit: 5,
});
const prisma = new PrismaClient({adapter});


async function main() {
//Users
    const password = await bcrypt.hash("Admin@123", 12);

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
    // await prisma.component.createMany({
    //     data: [
    //         {
    //             name: "Testimonial",
    //             data: {
    //                 "label": "Testimonial",
    //                 "ref": "Home",
    //                 "title_h2": "The patient voice",
    //                 "quota": "You cannot create policies for patients without working with the people who are affected. There is nothing about us without us.",
    //                 "cite": "Vanessa Carter",
    //                 "span": "AMR survivor · Founder, The AMR Narrative · Chair, WHO Task Force of AMR Survivors"
    //             },
    //         }
    //     ],
    // });

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