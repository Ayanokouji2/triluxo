'use client'

import { Upload } from "lucide-react"

export default function Page() {
    return (
        <main className="p-9 w-full flex flex-col gap-6 items-center">
            <h1 className="text-2xl text-center font-bold">Category Form</h1>

            <div className="w-5/12 bg-gray-50 flex flex-col items-center">
                <form onSubmit={(e) => {
                    e.preventDefault();

                }}>
                    <div className="flex flex-col gap-2 pl-4 pr-4 pt-3">
                        <label className="text-sm text-gray-700" htmlFor="c-name">Category Name <span className="text-red-700">*</span></label>
                        <input required className="px-4 py-2 text-gray-900 font-bold bg-gray-200 rounded-lg " type="text" id='c-name' placeholder='Enter Category Name' />
                    </div>
                    <div className="flex flex-col gap-2 pl-4 pr-4 pt-3">
                        <label className="text-sm text-gray-700" htmlFor="c-slug">Category Slug <span className="text-red-700">*</span></label>
                        <input required className="px-4 py-2 text-gray-900 font-bold bg-gray-200 rounded-lg " type="text" id='c-slug' placeholder='Enter Category Slug' />
                    </div>
                    <div className="flex flex-col gap-2 pl-4 pr-4 pt-3 pb-4">
                        <label className="text-sm text-gray-700" htmlFor="c-image">Category Image<span className="text-red-700">*</span></label>
                        <input required className="px-4 py-2 text-gray-900 font-bold bg-gray-200 rounded-lg " type="file" id='c-image' />
                    </div>

                </form>
                <button type='submit' className="bg-blue-500 py-2 mb-2 w-40 px-4 rounded-lg font-bold text-white text-lg">Create</button>
            </div>
        </main>
    )
}