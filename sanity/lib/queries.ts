import { defineQuery } from "next-sanity";


export const PROJECTS_QUERY = defineQuery(`
  *[_type == "project"] | order(_createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    "image": image.asset->url,
    introduction,
    technologies
  }
`);

export const PROJECT_SINGLE_QUERY = defineQuery(`
  *[_type == "project" && slug.current == $slug][0] {
    title,
    "image": image.asset->url,
    content,
    introduction,
    technologies,
    github,
    liveUrl
  }
`);