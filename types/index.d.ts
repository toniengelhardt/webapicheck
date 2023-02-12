declare interface WebAPI {
  key?: string,
  name: string,
  path?: string,
  url: string,
  available?: boolean,
  source?: string,
  experimental?: boolean,
  userInteractionRequired?: boolean,
  permissionsRequired?: boolean,
  secureContextRequired?: boolean,
  availableInWebWorkers?: boolean,
  links?: {
    name: string,
    url: string,
  }[],
  check?: () => boolean | Promise<boolean>,
  value?: () => string,
  action?: {
    icon?: string,
    label: string,
    func: () => void | Promise<void>,
  },
  detail?: any,
}

declare type WebAPIData = { [key: string]: WebAPI }

declare type DisplayMode = 'rows' | 'grid'
