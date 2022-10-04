import { Menu } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './styles.module.less'
export const PageHeader = () => {
  const { push } = useRouter()
  const handleMenuSelect = ({ key }: { key: string }) => {
    push(key)
  }

  return (
    <header className={styles['page-header']}>
      <div className="logo-wrapper">
        <Image
          alt="lfca-logo"
          height={50}
          layout="fixed"
          src={'/img/logo.svg'}
          width={50}
        />
        <div className="title">
          <b className="bold">api</b>
          docs
        </div>
      </div>

      <nav>
        <Menu
          items={[
            {
              key: '/',
              label: 'Home',
            },
            {
              key: 'docs',
              label: 'Documentation',
            },
          ]}
          mode="horizontal"
          onSelect={handleMenuSelect}
        />
      </nav>
    </header>
  )
}
