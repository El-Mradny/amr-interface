import React from 'react';
import Link from "next/link";

const Page = () => {
    return (
        <div>
            <Link href={'/admin'} className={'btn btn-line'}>
                <span aria-hidden="true">←</span>Back to Admin page</Link>
            <h2 className="justify-self-center">Coming Soon</h2>
        </div>
    );
};

export default Page;