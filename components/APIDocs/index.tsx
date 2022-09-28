import { API } from '@stoplight/elements'

import { ApiDocsLayout } from '../Layout'

interface APIDocsProps {
  isSSR: boolean
  path: string
}

const BASE_PATH = '/docs'

export function APIDocs({ isSSR, path }: APIDocsProps) {
  return (
    <ApiDocsLayout>
      <API
        apiDescriptionUrl="/api/spec"
        basePath={BASE_PATH}
        logo="/img/logo.svg"
        router={isSSR ? 'static' : 'history'}
        staticRouterPath={isSSR ? path : `/${BASE_PATH}${path}`}
      />
    </ApiDocsLayout>
  )
}
