import Link from "next/link"
import Works from "@/sections/student-works"
import { getStudentWorks } from "@/sanity/sanity-utils"

export default async function StudentWorks() {
    const data = await getStudentWorks()
    return (
        <main>
            <Link
                href="/"
                className="flex gap-1.5 absolute top-4 left-4 z-50 items-center py-0.5 px-4 border-[1.6px] font-medium border-light rounded-full text-light text-sm lg:text-base"
            >
                immersive.images
            </Link>
            <Works data={data} />
        </main>
    )
}