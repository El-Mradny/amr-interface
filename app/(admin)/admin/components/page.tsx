import Link from "next/link";
import { ComponentService } from "@/services/component.service";

const sections = [
    {
        title: "Home Page",
        key: "Home",
    },
    {
        title: "RoundTables Page",
        key: "RoundTables",
    },
    {
        title: "Outputs Page",
        key: "Outputs",
    },
    {
        title: "Leadership Page",
        key: "Leadership",
    },
    {
        title: "Engage Page",
        key: "Engage",
    },
];

export default async function Page() {
    const components = await ComponentService.getAll();

    return (
        <div className="max-w-6xl mx-auto px-6 py-8">
            {sections.map((section) => {
                const pageComponents = components.filter((component) =>
                    component.name.includes(section.key)
                );

                return (
                    <section
                        key={section.key}
                        className="mb-10"
                    >
                        <h1 className="p-5 text-2xl font-semibold">
                            {section.title}
                        </h1>

                        <div className="flex flex-wrap gap-3">
                            {pageComponents.map((component) => (
                                <Link
                                    key={component.id}
                                    href={`/admin/components/${encodeURIComponent(
    component.name
)}`}
                                    className="btn btn-line"
                                >
                                    {component.name}
                                </Link>
                            ))}
                        </div>
                    </section>
                );
            })}
        </div>
    );
}