import { expect, test } from 'vitest'
import { base64ToBinary, binaryToBase64, webApiData } from '~/utils/webapis'

test('Every key of webApiData needs to be present in webApiExportList', () => {
  const webApiKeys = Object.keys(webApiData)
  webApiKeys.forEach((key) => {
    expect(webApiExportList.includes(key)).toBeTruthy()
  })
})

test('Encode and decode a binary status string', () => {
  const statusString = '10111110010111111111111111101111111111111111111111101110111101111'
  const encoded = binaryToBase64(statusString)
  const decoded = base64ToBinary(encoded)
  expect(encoded).not.toBe(statusString)
  expect(decoded).toBe(statusString)
})
