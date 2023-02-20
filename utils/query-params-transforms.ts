import { webApiExportList } from './webapis'

export function encode(webApis: Record<keyof typeof webApiData, boolean>) {
  const booleansToBinary = webApiExportList
    .map(webApiKey => webApis[webApiKey] ? '1' : '0').join('')
  const binaryToNumber = parseInt(booleansToBinary, 2)
  return binaryToNumber
}

export function decode(encoded: string) {
  const stringToNumber = parseInt(encoded)
  const numberToBinary = stringToNumber.toString(2)
  const entries = webApiExportList.map((webApiKey, i) => {
    return [webApiKey, numberToBinary.charAt(i) === '1']
  })
  return Object.fromEntries(entries) as Record<keyof typeof webApiData, boolean>
}
