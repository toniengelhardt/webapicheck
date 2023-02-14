/**
 * Converts the webApiData object into a sorted list (by name) for use in list and grid.
 * Note that it has to return a ref, otherwise the ShallowRef components break.
 */
export const useWebApiList = () => {
  const list = Object.keys(webApiData).reduce((list: WebApi[], apiKey: string) => {
    list.push({
      id: apiKey,
      ...webApiData[apiKey],
    })
    return list
  }, [])
  sortByField(list, 'name')
  return ref(list)
}

/**
 * Note: this probably needs some refactoring.
 */
export const useWebApiStatus = (api: WebApi, available?: boolean) => {
  return computed(() => {
    if (available) {
      if (api.experimental) {
        return {
          name: 'experimental',
          icon: 'experimental',
          label: 'Experimental',
        }
      }
      return {
        name: 'available',
        icon: 'check',
        label: 'Available',
      }
    }
    if (available === false) {
      return {
        name: 'unavailable',
        icon: 'cross',
        label: 'Not available',
      }
    }
    return undefined
  })
}

/**
 * Check the availability of each WebAPI on the current device.
 * This can only run on the client obviously.
 * @param webApis: list of WebAPIs to test, defaults to all.
 * @param force: by default WebAPIs that have been checked already are skipped, unless this flag is set to true.
 */
export const useTestWebApis = (webApis?: WebApi[], force = false) => {
  if (navigator) {
    const webApiStatuses: Ref<WebApiStatuses> = useState('webApiStatuses', () => ({}))
    webApis = webApis || useWebApiList().value
    webApis.forEach((webApi) => {
      if (force || !webApiStatuses.value[webApi.id]) {
        const check = webApi.check || defaultWebApiCheck
        if (check.constructor.name === 'AsyncFunction') {
          (check(webApi) as Promise<boolean>)
            .then((available: boolean) => webApiStatuses.value[webApi.id] = available)
        } else {
          webApiStatuses.value[webApi.id] = check(webApi) as boolean
        }
      }
    })
  }
}
