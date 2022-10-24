declare interface WebAPI {
  key?: string,
  name: string,
  url: string,
  available: boolean | undefined,
  source?: string,
  path?: string,
  experimental?: boolean,
  secureContextRequired?: boolean,
  userInteractionRequired?: boolean,
  availableInWebWorkers?: boolean,
  links?: {
    name: string,
    url: string,
  }[],
  check?: () => boolean,
  value?: () => string,
  detail?: any,
}
