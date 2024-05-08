const testimonial = {
    name: 'testimonial',
    title: 'Öğrenci Yorumları',
    type: 'document',
    fields: [
        {
            name: 'student',
            title: 'Öğrenci adı',
            type: 'string',
        },
        {
            name: 'instagram',
            title: 'Instagram kullanıcı adı',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Profil fotoğrafı',
            type: 'image'
        },
        {
            name: 'review',
            title: 'Yorum',
            type: 'text',
        }
    ]
}

export default testimonial
