import { resolve } from 'path'

const r = (p: string) => resolve(__dirname, p)
console.log(r('.'))
export const alias: Record<string, string> = {
  '~': r('.'),
}
