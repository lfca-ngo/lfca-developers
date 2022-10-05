import { ArrowRightOutlined } from '@ant-design/icons'
import { Card, List, Space } from 'antd'
import classNames from 'classnames'
import { useRouter } from 'next/router'

import styles from './styles.module.less'

const LINKS = [
  {
    description: 'Fetch content like action modules from our library',
    slug: 'docs',
    title: 'Content API',
  },
  {
    description:
      'Use our action modules to engage individuals in climate action',
    disabled: true,
    title: 'TFCA API (coming soon)',
  },
]

export const WelcomeScreen = () => {
  const { push } = useRouter()

  const handleItemClick = (key?: string) => {
    if (key) push(key)
  }

  return (
    <div className={styles['welcome-screen']}>
      <div className="container md">
        <h1>Documentation</h1>
        <p>
          Want to learn more? Ask us a{' '}
          <a href="mailto:timo@lfca.earth" rel="noreferrer" target="_blank">
            question
          </a>{' '}
          or check our{' '}
          <a
            href="https://github.com/lfca-earth/"
            rel="noreferrer"
            target="_blank"
          >
            Github Repositories
          </a>
        </p>
        <List
          dataSource={LINKS}
          grid={{
            gutter: 16,
            lg: 2,
            md: 2,
            sm: 2,
            xl: 2,
            xs: 1,
            xxl: 2,
          }}
          renderItem={(item) => (
            <List.Item>
              <Card
                className={classNames({ disabled: item.disabled })}
                hoverable={!item.disabled}
                onClick={() => handleItemClick(item?.slug)}
                title={
                  <Space>
                    <ArrowRightOutlined /> {item.title}
                  </Space>
                }
              >
                {item.description}
              </Card>
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}
