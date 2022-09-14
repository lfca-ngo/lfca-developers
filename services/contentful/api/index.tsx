import { EntryCollection } from 'contentful'

import { createKey, getData, setData } from './cache'
import { client } from './client'

export async function getEntries<T>(query: Record<string, string | number>) {
  const cacheKey = createKey(query)

  const cachedData = getData<EntryCollection<T>>(cacheKey)

  if (cachedData) {
    return cachedData
  } else {
    const response = await client.getEntries<T>(query)

    setData(cacheKey, response)

    return response
  }
}
