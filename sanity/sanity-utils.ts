import { createClient, groq } from "next-sanity"
import clientConfig from "./config/client-config"
import { StudentWork } from "@/types/StudentWork"
import { Testimonial } from "@/types/Testimonial"
import { Faq } from "@/types/Faq"

export async function getStudentWorks(): Promise<StudentWork[]> {
	const revalidate = 60
	return createClient(clientConfig).fetch(
		groq`*[_type == 'student-work']{
			_id,
			student,
			'slug': slug.current,
			instagram,
			'image': images[0] {
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

export async function getTestimonials(): Promise<Testimonial[]> {
	const revalidate = 60
	return createClient(clientConfig).fetch(
		groq`*[_type == 'testimonial']{
			student,
			instagram,
			'image': image.asset->url,
			review,
		}`,
		{ next: { revalidate } }
	)
}

export async function getFaqs(): Promise<Faq[]> {
	const revalidate = 60
	return createClient(clientConfig).fetch(
		groq`*[_type == 'faq'] | order(_createdAt asc){
			question,
			answer,
		}`,
		{ next: { revalidate } }
	)
}