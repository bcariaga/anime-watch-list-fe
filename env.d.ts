declare namespace NodeJS {
  interface ProcessEnv {
    // NODE_ENV: 'development' | 'production' | 'test'
    AUTH0_DOMAIN: string
    AUTH0_CLIENTID: string
  }
}
