"use client";

import {useState} from "react";

interface Props {
    data: Record<string, any>;
}

export default function JsonEditor({data}: Props) {

    const [form, setForm] = useState(data.data);


    async function save() {
        console.log("Sending:", form);
        const response = await fetch(`/api/components/${data.name}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                data: form,
            }),
        });
        if (!response.ok) {
            alert("Failed to save");
            return;
        }
        alert("Saved");
    }

    function update(path: string[], value: any) {
        const clone = structuredClone(form);

        let current = clone;

        for (let i = 0; i < path.length - 1; i++) {
            current = current[path[i]];
        }

        current[path[path.length - 1]] = value;

        setForm(clone);
    }

    function render(value: any, path: string[] = []) {
        return Object.entries(value).map(([key, val]) => {
            const currentPath = [...path, key];

            if (
                typeof val === "object" &&
                val !== null &&
                !Array.isArray(val)
            ) {
                return (
                    <div key={currentPath.join(".")} className="admin-form-band">
                        <h2 className=''>{key}</h2>

                        {render(val, currentPath)}
                    </div>
                );
            }

            if (Array.isArray(val)) {
                return (
                    <div key={currentPath.join(".")}>
                        <h3 className="req">{key}</h3>

                        {val.map((item, index) => (
                            typeof item === "object"
                                ? render(item, [...currentPath, String(index)])
                                : (
                                    <input
                                        key={`${currentPath.join(".")}`}
                                        value={item}
                                        onChange={(e) =>
                                            update(
                                                [...currentPath, String(index)],
                                                e.target.value
                                            )
                                        }
                                    />
                                )

                        ))}
                    </div>
                );
            }

            return (
                <div key={currentPath.join(".")} className="field">
                    <label>
                        {key.replaceAll("_", " ").toLocaleUpperCase()}
                    </label>
                    <textarea
                        value={String(val)}
                        onChange={(e) =>
                            update(currentPath, e.target.value)
                        }
                    />
                </div>
            );
        });
    }

    return (
        <>
            <div className="admin-form-layout">
                <div className="admin-form-card">
                    <div className="admin-form-grid">
                        {render(form)}
                        <div className={'form-actions'}>
                            <button onClick={save} className="btn btn-ink">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}