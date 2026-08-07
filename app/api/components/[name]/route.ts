import { NextRequest, NextResponse } from "next/server";
import { ComponentService } from "@/services/component.service";
import {auth} from "@/auth";


export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ name: string }> }
) {
    const session = await auth();

    if (!session) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }


    const { name } = await params;

    const component = await ComponentService.getByName(decodeURIComponent(name));

    return NextResponse.json(component);
}

export async function PUT(
    req: NextRequest,
    { params }: { params: Promise<{ name: string }> }
) {
    const session = await auth();

    if (!session) {
        return NextResponse.json(
            { error: "Unauthorized" },
            { status: 401 }
        );
    }
    const body = await req.json();
    const { name } = await params;


    const updated = await ComponentService.updateByName(
        decodeURIComponent(name),
        body.data
    );

    return NextResponse.json(updated);
}
