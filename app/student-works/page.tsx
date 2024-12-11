import Link from "next/link"
import Works from "@/sections/student-works"
import { getStudentWorks } from "@/sanity/sanity-utils"
import Image from "next/image"

export default async function StudentWorks() {
    const data = await getStudentWorks()

    return (
        <main>
            <Link
                href="/"
                className="absolute top-10 left-1/2 -translate-x-1/2 z-50"
            >
                <Image src="/logo.avif" width={250} height={40} alt="Immersive Images logo" />
            </Link>
            <Works data={data} />
        </main>
    )
}