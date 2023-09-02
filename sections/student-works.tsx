import GenerativeLayout from "../components/generative-layout"
import { getStudentWorks } from "@/sanity/sanity-utils"

export default async function StudentWorks() {
	const data = await getStudentWorks()
	return <GenerativeLayout data={data} />
}
