const studentWork = {
	name: 'student-work',
	title: 'Student Works',
	type: 'document',
	fields: [
		{
			name: 'student',
			title: 'Öğrenci adı',
			type: 'string',
		},
		{
			name: 'slug',
			title: 'Slug',
			type: 'slug',
			options: { source: 'student' }
		},
		{
			name: 'instagram',
			title: 'Instagram kullanıcı adı',
			type: 'string'
		},
		{
			name: 'images',
			title: 'Görseller',
			options: { layout: 'grid' },
			type: 'array',
			of: [{ type: 'image' }],
		}
	]
}

export default studentWork
