import GenerativeLayout from "./generative-layout"
import { StudentWorks } from "@/sections"
import { getStudentWorks } from "@/sanity/sanity-utils"

export default async function Page() {
    const data = await getStudentWorks()
    return <StudentWorks data={data} isPage={true} />
}