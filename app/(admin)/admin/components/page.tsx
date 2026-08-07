import Link from "next/link";
import {prisma} from "@/lib/prisma";
import LogoutButton from "@/components/admin/LogoutButton";

export default async function Page() {

    const components = await prisma.component.findMany();

    return (
        <div className="justify-items-center">
            <h1 className="p-5">Home Page</h1>
            <div className="space-y-4">
                {components.map((item) => (
                    item.name.includes('Home') && (

                        <Link
                            key={item.id}
                            href={`/admin/components/${item.name}`}
                            className="btn btn-line m-3"
                        >
                            {item.name}
                        </Link>
                    )
                ))}
            </div>
            <br/>
            <h1 className="p-5">RoundTables Page</h1>
            <div className="space-y-4">
                {components.map((item) => (
                    item.name.includes('RoundTables') && (
                        <Link
                            key={item.id}
                            href={`/admin/components/${item.name}`}
                            className="btn btn-line m-3"
                        >
                            {item.name}
                        </Link>
                    )))}
            </div>
            <br/>
            <h1 className="p-5">Outputs Page</h1>
            <div className="space-y-4">
                {components.map((item) => (
                    item.name.includes('Outputs') && (
                        <Link
                            key={item.id}
                            href={`/admin/components/${item.name}`}
                            className="btn btn-line m-3"
                        >
                            {item.name}
                        </Link>
                    )))}
            </div>
            <br/>
            <h1 className="p-5">LeaderShip Page</h1>
            <div className="space-y-4">
                {components.map((item) => (
                    item.name.includes('Leadership') && (
                        <Link
                            key={item.id}
                            href={`/admin/components/${item.name}`}
                            className="btn btn-line m-3"
                        >
                            {item.name}
                        </Link>
                    )))}
            </div>

            <br/>
            <h1 className="p-5">Engage Page</h1>
            <div className="space-y-4">
                {components.map((item) => (
                    item.name.includes('Engage') && (
                        <Link
                            key={item.id}
                            href={`/admin/components/${item.name}`}
                            className="btn btn-line m-3"
                        >
                            {item.name}
                        </Link>
                    )))}
            </div>
            <br/>


            <br/>
            <br/>
            <LogoutButton/>
        </div>
    );
}