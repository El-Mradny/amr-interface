import Link from "next/link";
import {ComponentService} from "@/services/component.service";

const sections = [
    {
        title: "Home Page",
        key: "HOME",
    },
    {
        title: "RoundTables Page",
        key: "ROUNDTABLES",
    },
    {
        title: "Outputs Page",
        key: "OUTPUTS",
    },
    {
        title: "Leadership Page",
        key: "LEADERSHIP",
    },
    {
        title: "Engage Page",
        key: "ENGAGE",
    },
];

export default async function Page() {
    const components = await ComponentService.getLookup();

    const componentNames = Object.keys(components);

    return (
        <>
            <Link href={'/admin'} className={'btn btn-line'}><span aria-hidden="true">←</span>Back to admin page</Link>
            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="space-y-10">
                    {sections.map((section) => {
                        const pageComponents = componentNames.filter((name) =>
                            name.startsWith(section.key)
                        );

                        return (
                            <section key={section.key}>
                                <h1 className="m-5 text-2xl font-semibold">
                                    {section.title}
                                </h1>

                                {pageComponents.length === 0 ? (
                                    <p className="text-gray-500">
                                        No components found.
                                    </p>
                                ) : (
                                    <div className="flex flex-wrap gap-3">
                                        {pageComponents.map((name) => (
                                            <Link
                                                key={name}
                                                href={`/admin/components/${encodeURIComponent(
                                                    name
                                                )}`}
                                                className="btn btn-line"
                                            >
                                                {name}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </section>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
