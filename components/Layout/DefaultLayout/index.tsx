import { PageFooter, PageHeader } from '../'
import styles from './styles.module.less'

interface DefaultLayoutProps {
  children: React.ReactNode
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div className={styles['default-layout']}>
      <PageHeader />
      <main>{children}</main>
      <PageFooter />
    </div>
  )
}
