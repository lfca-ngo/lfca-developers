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
  },
  schemaFolders: ['models'],
})
export default swaggerHandler()
