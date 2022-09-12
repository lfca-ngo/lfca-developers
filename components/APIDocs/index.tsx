import '@stoplight/elements/styles.min.css'

import dynamic from 'next/dynamic'

const API = dynamic(
  () => import('@stoplight/elements').then((mod) => mod.API),
  { ssr: false }
)

interface APIDocsProps {
  path: string
}

const BASE_PATH = '/docs'

export function APIDocs({ path }: APIDocsProps) {
  return (
    <API
      apiDescriptionUrl="/api/spec"
      basePath={BASE_PATH}
      logo="/img/logo.svg"
      router="history"
      staticRouterPath={`/${BASE_PATH}${path}`}
    />
  )
}
