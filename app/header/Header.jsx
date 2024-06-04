import { Home, List, MessageSquareMore } from "lucide-react"
import LoginButton from './LoginButton'
import AuthContextProvider from '@/lib/contexts/AuthContext'
import Link from "next/link"

export default function Header() {
    return <nav className="flex justify-between items-center px-7 py-3 border-b">
        <Link href="/">
            <img className="h-10 mix-blend-multiply" src="/logo.png" alt="logo" />
        </Link>
        <ul className="flex gap-6 items-center">
            <li className="flex items-cecnter gap-2">
                <Home />
                Home
            </li>
            <li className="flex items-cecnter gap-2">
                <List />
                Blogs
            </li>
            <li className="flex items-cecnter gap-2">
                <MessageSquareMore />
                Contact Us
            </li>
        </ul>
        <AuthContextProvider>
            <LoginButton />
        </AuthContextProvider>
    </nav>
}