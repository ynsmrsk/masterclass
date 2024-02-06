import Works from "../sections/works"
import { getStudentWorks } from "@/sanity/sanity-utils"

export default async function StudentWorks() {
	const data = await getStudentWorks()
	return <Works data={data} />
}