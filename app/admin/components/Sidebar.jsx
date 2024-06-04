'use client'

import { LayoutDashboard, LayoutList, Users, Layers3 } from "lucide-react"
import Link from "next/link"

export default function Sidebar() {
    const data = [
        {
            name: "Dashboard",
            url: '/admin',
            icon: <LayoutDashboard size={32} />,
        },
        {
            name: "Blogs",
            url: '/admin/blogs',
            icon: <LayoutList size={32}/>,
        },
        {
            name: "Category",
            url: '/admin/category',
            icon: <Layers3 size={32} />
        },
        {
            name: "Authors",
            url: '/admin/authors',
            icon: <Users size={32}/>
        }
    ]
    return (
        <section className="lg:min-w-[300px] h-screen border-r-2">
            <ul className="w-full flex flex-col gap-3 p-3 ">
                {
                    data.map((item, index) => (
                        <li key={index}>
                            <Link href={item.url} className="flex items-center gap-3 bg-blue-100 rounded p-3 border-4 m-3 shadow-xl">
                                {item.icon}
                                <span className="font-bold text-xl">{item.name}</span>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}
