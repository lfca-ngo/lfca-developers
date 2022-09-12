import { useRouter } from 'next/router'

import { APIDocs } from '../../components'

function ApiDeeplink() {
  const router = useRouter()
  const { path } = router.query

  return <APIDocs path={`/${Array.isArray(path) ? path.join('/') : path}`} />
}

export default ApiDeeplink
