import { PageHeader } from 'antd'

import { PageFooter } from '../PageFooter'
import styles from './styles.module.less'

interface DefaultLayoutProps {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className={styles['default-layout']}>
      <PageHeader />
      {children}
      <PageFooter />
    </div>
  )
}
