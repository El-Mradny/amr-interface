import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import {auth} from "@/auth";

export async function POST(req: NextRequest) {
    const session = await auth();

    if (!session) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }
    try {
        const formData = await req.formData();

        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json(
                { error: "No file uploaded" },
                { status: 400 }
            );
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadDir = path.join(process.cwd(), "public/uploads");

        await fs.mkdir(uploadDir, { recursive: true });

        const filename = `${Date.now()}-${file.name}`;

        await fs.writeFile(
            path.join(uploadDir, filename),
            buffer
        );

        return NextResponse.json({
            url: `/uploads/${filename}`,
        });
    } catch (e) {
        console.error(e);

        return NextResponse.json(
            { error: "Upload failed" },
            { status: 500 }
        );
    }
}