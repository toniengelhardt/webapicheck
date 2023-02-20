import { expect, test } from 'vitest'

test('Every key of webApiData needs to be present in webApiExportList', () => {
  const webApiKeys = Object.keys(webApiData)
  webApiKeys.forEach((key) => {
    expect(webApiExportList.includes(key)).toBeTruthy()
  })
})
