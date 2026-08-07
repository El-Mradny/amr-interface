// app/api/db-test/route.ts

import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await prisma.$queryRaw`SELECT 1`;

        return NextResponse.json({
            success: true,
            message: "Database connection is working",
        });
    } catch (error) {
        console.error("DATABASE ERROR:", error);

        return NextResponse.json(
            {
                success: false,
                error: String(error),
            },
            { status: 500 }
        );
    }
}