declare interface WebAPI {
  key?: string,
  name: string,
  available: boolean | undefined,
  secureContext?: boolean,
  experimental?: boolean,
  source?: string,
  links?: {
    name: string,
    url: string,
  }[],
}
