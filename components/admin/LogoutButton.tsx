"use client";

import { signOut } from "next-auth/react";

export default function LogoutButton() {
    return (
        <button
            className="btn btn-line"
            onClick={() => signOut({ callbackUrl: "/login" })}
        >
            Logout
        </button>
    );
}