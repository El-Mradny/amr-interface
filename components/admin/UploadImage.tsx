"use client";

import { useState } from "react";

export default function UploadImage() {
    const [url, setUrl] = useState("");

    async function upload(file: File) {
        const formData = new FormData();

        formData.append("file", file);

        const res = await fetch("/api/upload", {
            method: "POST",
            body: formData,
        });

        const data = await res.json();

        setUrl(data.url);
    }

    return (
        <div>
            <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                    if (!e.target.files?.length) return;

                    upload(e.target.files[0]);
                }}
            />

            {url && (
                <>
                    <img
                        src={url}
                        width={300}
                        alt=""
                    />
                    <dt>
                        URL
                    </dt>
                    <dd>{url}</dd>
                </>

            )}
        </div>
    );
}