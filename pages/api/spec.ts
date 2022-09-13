import { withSwagger } from 'next-swagger-doc'

const swaggerHandler = withSwagger({
  definition: {
    info: {
      contact: {
        email: 'info@lfca.earth',
        name: 'LFCA',
        url: 'https://developer.lfca.earth/',
      },
      description: '# Description tbd.',
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
  schemaFolders: ['services/internal/openapi'],
})
export default swaggerHandler()
