import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import swaggerJsdoc from 'swagger-jsdoc'

const IMPORT_BASE_PATH =
  process.env.NODE_ENV === 'production'
    ? path.join(process.cwd(), '.next/server')
    : path.join(process.cwd())

export default function handler(_: NextApiRequest, res: NextApiResponse) {
  try {
    const description = fs
      .readFileSync(
        path.join(
          process.cwd(),
          '/services/internal/openapi/docs/description.md'
        )
      )
      .toString()

    const swaggerSpec = swaggerJsdoc({
      apis: [
        // Import definitions from comments in API routes
        path.join(IMPORT_BASE_PATH, '/pages/api/**/*.ts'),
        // Import additional definitions from yaml files
        path.join(
          IMPORT_BASE_PATH,
          '/services/internal/openapi/components/**/*.yaml'
        ),
      ],
      definition: {
        info: {
          contact: {
            email: 'info@lfca.ngo',
            name: 'LFCA',
            url: 'https://lfca.ngo/',
          },
          description,
          title: 'LFCA API',
          version: '1.0.0',
        },
        openapi: '3.0.0',
        security: [
          {
            accessToken: [],
          },
        ],
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
