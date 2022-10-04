import { APIDocs } from '../../components'
import { isSSR } from '../../utils'

function Docs() {
  return <APIDocs isSSR={isSSR} path={'/'} />
}

export default Docs
