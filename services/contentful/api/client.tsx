import * as contentful from 'contentful'

export const client = contentful.createClient({
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  host: process.env.CONTENTFUL_HOST,
  space: process.env.CONTENTFUL_SPACE_ID,
})
