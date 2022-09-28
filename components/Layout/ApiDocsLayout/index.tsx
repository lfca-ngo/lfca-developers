import { PageHeader } from 'antd'

import { PageFooter } from '../PageFooter'
import styles from './styles.module.less'

interface ApiDocsLayoutProps {
  children: React.ReactNode
}

export const ApiDocsLayout = ({ children }: ApiDocsLayoutProps) => {
  return (
    <div className={styles['api-docs-layout']}>
      <PageHeader />
      {children}
      <PageFooter />
    </div>
  )
}
