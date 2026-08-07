import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div className="justify-items-center">
            <h2 className="justify-self-center p-5">Welcome to Admin Page</h2>
            <div className=" p-5">
                <Link href={`/admin/components`} className="btn btn-line">
                    Components
                </Link>
            </div>
            <div >
                <Link href={`/admin/meta`} className="btn btn-line">
                    Meta Data
                </Link>
            </div>
        </div>
    );
};

export default Page;