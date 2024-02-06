/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['cdn.sanity.io'],
	},
	experimental: {
		scrollRestoration: true,
	},
}

module.exports = nextConfig
