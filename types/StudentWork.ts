export type StudentWork = {
	_id: string
	_createdAt: Date
	student: string
	slug: string
	instagram: string
	images: image[]
}

type image = {
	url: string
}
