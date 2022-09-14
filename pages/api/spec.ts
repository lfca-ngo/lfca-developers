import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import swaggerJsdoc from 'swagger-jsdoc'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const apiPath = path.join(process.cwd(), '/pages/api')
    const componentsPath = path.join(
      process.cwd(),
      '/services/internal/openapi/components'
    )
    const description = fs
      .readFileSync(
        path.join(
          process.cwd(),
          '/services/internal/openapi/docs/description.md'
        )
      )
      .toString()

    const swaggerSpec = swaggerJsdoc({
      apis: [`${apiPath}/**/*.ts`, `${componentsPath}/**/*.yaml`],
      definition: {
        info: {
          contact: {
            email: 'info@lfca.earth',
            name: 'LFCA',
            url: 'https://developer.lfca.earth/',
          },
          description,
          title: 'LFCA API',
          version: '1.0.0',
        },
        openapi: '3.0.0',
        servers: [
          {
            url:
              process.env.NODE_ENV === 'development'
                ? '/api'
                : 'https://api.lfca.ngo',
          },
        ],
      },
    })
    res.status(200).send(swaggerSpec)
  } catch (error) {
    res.status(400).send(error)
  }
}
