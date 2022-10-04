import { PageFooter } from '../PageFooter'
import { PageHeader } from '../PageHeader'
import styles from './styles.module.less'

interface ApiDocsLayoutProps {
  children: React.ReactNode
}

export const ApiDocsLayout = ({ children }: ApiDocsLayoutProps) => {
  return (
    <div className={'api-docs-layout-root'}>
      <div className={styles['api-docs-layout']}>
        <PageHeader />
        {children}
        <PageFooter />
      </div>
    </div>
  )
}
