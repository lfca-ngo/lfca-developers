import { APIDocs } from '../../components'

function Docs() {
  return <APIDocs isSSR={typeof window === 'undefined'} path={'/'} />
}

export default Docs
