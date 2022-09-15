import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import swaggerJsdoc from 'swagger-jsdoc'

const API_ROUTES_FOLDER =
  process.env.NODE_ENV === 'production'
    ? path.join(process.cwd(), '.next/server', '/pages/api/**/*.js')
    : path.join(process.cwd(), '/pages/api/**/*.ts')

const SWAGGER_SPECS_FOLDER =
  process.env.NODE_ENV === 'production'
    ? path.join(
        process.cwd(),
        '.next/server',
        '/services/internal/openapi/components/**/*.yaml'
      )
    : path.join(
        process.cwd(),
        '/services/internal/openapi/components/**/*.yaml'
      )

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
        API_ROUTES_FOLDER,
        // Import additional definitions from yaml files
        SWAGGER_SPECS_FOLDER,
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
