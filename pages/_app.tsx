import 'antd/dist/antd.less'
import '../styles/global.less'
import '../styles/stoplight-styles.css'
import '../styles/stoplight-lfca-theme.less'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
