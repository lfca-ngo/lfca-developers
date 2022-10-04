import { Button } from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './styles.module.less'

const ITEMS = [
  {
    key: '/',
    label: 'Home',
  },
  {
    key: 'docs',
    label: 'Documentation',
  },
]

export const PageHeader = () => {
  const { push } = useRouter()
  const handleMenuSelect = (key: string) => {
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
        <ul>
          {ITEMS.map((item) => (
            <li key={item.key}>
              <Button onClick={() => handleMenuSelect(item.key)} type="link">
                {item.label}
              </Button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
