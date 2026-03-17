// import { defineField, defineType } from 'sanity'

// export const projectType = defineType({
//   name: 'project',
//   title: 'Project',
//   type: 'document',
//   fields: [
//     defineField({
//       name: 'title',
//       type: 'string',
//     }),
//     defineField({
//       name: 'slug',
//       type: 'slug',
//       options: { source: 'title' },
//     }),
//     defineField({
//       name: 'image',
//       type: 'image',
//       options: { hotspot: true },
//     }),
//     defineField({
//       name: 'description',
//       type: 'text',
//     }),
//     defineField({
//       name: 'technologies',
//       type: 'array',
//       of: [{ type: 'string' }],
//     }),

//     defineField({
//       name: 'github',
//       title: 'GitHub Link',
//       type: 'url',
//       placeholder: 'https://github.com/yourusername/repo'
//     }),
//     defineField({
//       name: 'liveUrl',
//       title: 'Live Project Link',
//       type: 'url',
//       placeholder: 'https://yourproject.com'
//     }),
//   ],
// })

import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string' }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title' } }),
    defineField({ name: 'image', type: 'image', options: { hotspot: true } }),
    // This shows on the Home Page Card
    defineField({ 
      name: 'introduction', 
      title: 'Introduction (Card Summary)', 
      type: 'text',
      description: 'Short summary for the project card.' 
    }),
    // This shows on the Dedicated Project Page
    defineField({ 
      name: 'content', 
      title: 'Full Content', 
      type: 'array', 
      of: [{ type: 'block' }] // Allows for rich text, bold, links, etc.
    }),
    defineField({ name: 'technologies', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'github', type: 'url' }),
    defineField({ name: 'liveUrl', type: 'url' }),
  ],
})