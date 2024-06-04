'use client'

import { useAuth } from "@/lib/contexts/AuthContext"
import { LogOut } from "lucide-react"
import Link from "next/link"

export default () => {

    const { user, isLoading, handleGoogleLogin, handleLogout } = useAuth()

    if (isLoading) {
        return (
            <button
                className="bg-black gap-3 flex text-white px-4 py-2 rounded-full">
                Loading...
            </button>
        )
    }

    if (user) {
        return (
            <div>
                <div className="flex items-center gap-3">
                    <Link className="flex items-center gap-3" href="/admin">
                        <img className="h-10 w-10 rounded-full object-cover" src={user?.photoURL} alt="user-image" />
                        <p>{user.displayName}</p>
                    </Link>
                    <button onClick={() => handleLogout()}>
                        <LogOut />
                    </button>
                </div>


            </div>
        )
    }

    return (
        <button
            onClick={() => {
                handleGoogleLogin()
            }}
            className="bg-black gap-3 flex text-white px-4 py-2 rounded-full">
            Login With Google
        </button>
    )
}