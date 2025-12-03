declare module 'csurf' {
  import { type RequestHandler } from 'express'
  interface CsurfOptions {
    cookie?: boolean | object
    ignoreMethods?: string[]
    sessionKey?: string
    value?: (req: any) => string
  }

  function csrf (options?: CsurfOptions): RequestHandler

  export default csrf
}
