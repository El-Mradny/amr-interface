// app/(admin)/admin/components/[name]/page.tsx
import Link from "next/link";
import JsonEditor from "@/components/admin/JsonEditor";
import UploadImage from "@/components/admin/UploadImage";
import {ComponentService} from "@/services/component.service";



export default async function Page({ params,}: { params: Promise<{ name: string }>; }) {
    const {name} = await params;


    const component = await ComponentService.getByName(name);

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