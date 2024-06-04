import { CirclePlus } from "lucide-react";
import Link from "next/link";

export default function Page() {
    return (
        <main className="p-9 w-full">
            <div className=" flex justify-between  items-center">
                <h1 className="text-xl font-bold">Category</h1>
                <Link href="/admin/category/form">
                    <button className="flex gap-3 bg-blue-400 text-lg font-bold rounded-2xl p-3">
                        <CirclePlus />
                        Add
                    </button>
                </Link>
            </div>
        </main>
    )
}