export const useWebApiList = () => {
  const list = Object.keys(webApiData).reduce((list: WebAPI[], apiKey: string) => {
    list.push({
      id: apiKey,
      ...webApiData[apiKey],
    })
    return list
  }, [])
  sortByField(list, 'name')
  return ref(list)
}

export const useWebApiStatus = (api: WebAPI, available?: boolean) => {
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

export const useLoadWebApis = (webApis?: WebAPI[]) => {
  if (navigator) {
    const webApiStatuses: Ref<{ [key: keyof typeof webApiData]: boolean }> = useState('webApiStatuses', () => ({}))
    webApis = webApis || useWebApiList().value
    webApis.forEach((webApi) => {
      if (!webApiStatuses.value[webApi.id]) {
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
