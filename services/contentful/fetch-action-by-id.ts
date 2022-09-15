import { getEntries } from './api'
import { ContentfulAction } from './models/action'

export const fetchActionById = async (actionId: string) => {
  const res = await getEntries<ContentfulAction>({
    content_type: 'action',
    'fields.actionId': actionId,
    include: 3,
    locale: 'en-US',
  })

  const stringifiedData = res.stringifySafe()
  const actions: typeof res = JSON.parse(stringifiedData)

  return actions.items[0]
}
