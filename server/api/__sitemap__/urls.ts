// @ts-expect-error 2305
import { asSitemapUrl, defineSitemapEventHandler } from '#imports'

import { webApiExportList } from '@/utils/export'

export default defineSitemapEventHandler(async () => {
  return webApiExportList.map(webApiId => asSitemapUrl({ loc: `/apis/${webApiId}` }))
})
