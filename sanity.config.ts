import { defineConfig } from "sanity"
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import schemas from "./sanity/schemas"

const config = defineConfig({
	projectId: '6k07r2y4',
	dataset: 'production',
	title: 'Masterclass Studio',
	apiVersion: '2023-06-26',
	basePath: "/admin",
	plugins: [deskTool(), visionTool()],
	schema: { types: schemas }
})

export default config
