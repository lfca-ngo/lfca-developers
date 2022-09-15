import '@stoplight/elements/styles.min.css'

import { API } from '@stoplight/elements'

// import dynamic from 'next/dynamic'

// const API = dynamic(
//   () => import('@stoplight/elements').then((mod) => mod.API),
//   { ssr: false }
// )

interface APIDocsProps {
  isSSR: boolean
  path: string
}

const BASE_PATH = '/docs'

export function APIDocs({ isSSR, path }: APIDocsProps) {
  return (
    <API
      apiDescriptionUrl="/api/spec"
      basePath={BASE_PATH}
      logo="/img/logo.svg"
      router={isSSR ? 'static' : 'history'}
      staticRouterPath={isSSR ? path : `/${BASE_PATH}${path}`}
    />
  )
}
