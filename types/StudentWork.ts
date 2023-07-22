export type StudentWork = {
	_id: string
	_createdAt: Date
	studentName: string
	slug: string
	instagram: string
	images: image[]
}

type image = {
	url: string
}
