import fs from 'fs'
import type { NextApiRequest, NextApiResponse } from 'next'
import path from 'path'
import swaggerJsdoc from 'swagger-jsdoc'

function createPaths(folders: string[]) {
  return folders.flatMap((folder) => {
    const sourceDirectory = path.join(process.cwd(), folder)
    const buildApiDirectory = path.join(process.cwd(), '.next/server', folder)
    return [
      ...['ts', 'swagger.yaml'].map(
        (fileType) => `${sourceDirectory}/**/*.${fileType}`
      ),
      ...['js', 'swagger.yaml'].map(
        (fileType) => `${buildApiDirectory}/**/*.${fileType}`
      ),
    ]
  })
}

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
      apis: createPaths([
        '/pages/api',
        '/services/internal/openapi/components',
      ]),
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
