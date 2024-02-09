import { createClient, groq } from "next-sanity"
import clientConfig from "./config/client-config"
import { StudentWork } from "@/types/StudentWork"

export async function getStudentWorks(): Promise<StudentWork[]> {
	const revalidate = 60
	return createClient(clientConfig).fetch(
		groq`*[_type == 'student-work']{
			_id,
			_createdAt,
			student,
			'slug': slug.current,
			instagram,
			'images': images[] {
				'url': asset->url,
				'aspectRatio': asset->metadata.dimensions.aspectRatio
			},	
		}`,
		{ next: { revalidate } }
	)
}

export async function getStudentWork(slug: string): Promise<StudentWork> {
	return createClient(clientConfig).fetch(
		groq`*[_type == 'student-work' && slug.current == $slug][0]{
			_id,
			_createdAt,
			student,
			'slug': slug.current,
			instagram,
			'images': images[] {
				'url': asset->url,
			},
		}`,
		{ slug }
	)
}
