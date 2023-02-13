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
