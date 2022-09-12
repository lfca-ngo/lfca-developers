declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      CONTENTFUL_ACCESS_TOKEN: string
      CONTENTFUL_ENVIRONMENT: string
      CONTENTFUL_HOST: string
      CONTENTFUL_SPACE_ID: string
    }
  }
}

export {}
