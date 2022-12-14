import { GetStaticPaths, GetStaticProps } from 'next'

import { APIDocs } from '../../components'
import { isSSR } from '../../utils'

interface ApiDeeplinkProps {
  path: string
}

function ApiDeeplink({ path }: ApiDeeplinkProps) {
  return <APIDocs isSSR={isSSR} path={path} />
}

export const getStaticProps: GetStaticProps<ApiDeeplinkProps> = async ({
  params,
}) => {
  return {
    props: {
      path: `/${
        Array.isArray(params?.path)
          ? params?.path.join('/')
          : params?.path || '/'
      }`,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: [],
  }
}

export default ApiDeeplink
