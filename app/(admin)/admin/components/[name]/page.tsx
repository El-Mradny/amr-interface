import {prisma} from "@/lib/prisma";
import Link from "next/link";
import JsonEditor from "@/components/admin/JsonEditor";
import UploadImage from "@/components/admin/UploadImage";



export default async function Page({params,}: { params: Promise<{ name: string }>; }) {
    const {name} = await params;


    const component = await prisma.component.findUnique({
        where: {
            name: name,
        },
    });

    if (!component) return <div>Not Found</div>;

    return (
        <>
            <Link href={'/admin/components'} className={'btn btn-line'}>Back to admin page</Link>
            <h1>Upload Image</h1>
            <UploadImage/>
            <div className="admin-layout">
                <h1>{component.name}</h1>
                <JsonEditor data={component}/>
            </div>
        </>
    );
}