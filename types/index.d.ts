declare interface WebAPI {
  key?: string,
  name: string,
  url: string,
  available: boolean | undefined,
  source?: string,
  path?: string,
  experimental?: boolean,
  secure?: boolean,
  webworkers?: boolean,
  links?: {
    name: string,
    url: string,
  }[],
  detail?: any,
  check?: () => boolean,
}
