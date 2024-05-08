import GenerativeLayout from "./generative-layout"
import { getStudentWorks } from "@/sanity/sanity-utils"

export default async function Page() {
    const data = await getStudentWorks()
    return <GenerativeLayout data={data} />
}