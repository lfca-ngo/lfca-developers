import { getEntries } from './api'
import { ContentfulAction } from './models/action'

export const fetchAllActions = async () => {
  const res = await getEntries<ContentfulAction>({
    content_type: 'action',
    include: 3,
    locale: 'en-US',
  })

  const stringifiedData = res.stringifySafe()
  const actions = JSON.parse(stringifiedData)

  return actions as typeof res
}
