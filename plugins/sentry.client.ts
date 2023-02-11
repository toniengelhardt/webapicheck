import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'
import { version } from '~/package.json'

export default defineNuxtPlugin((nuxtApp: any) => {
  const environment = process.env.NODE_ENV
  if (environment !== 'development') {
    Sentry.init({
      app: nuxtApp.vueApp,
      dsn: 'https://e726ccc63b0549c289c845a24347426f@o4504038618693632.ingest.sentry.io/4504038627082240',
      release: `webapicheck-webapp@${version}`,
      environment,
      integrations: [new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(nuxtApp.$router),
        tracingOrigins: ['localhost', 'webapicheck.com', /^\//],
      })],
      tracesSampleRate: 0.05,
    })
  }
})
