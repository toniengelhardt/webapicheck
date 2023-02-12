import * as Sentry from '@sentry/vue'
import { Integrations } from '@sentry/tracing'
import { version } from '~/package.json'

export default defineNuxtPlugin((nuxtApp) => {
  const environment = process.env.NODE_ENV
  if (environment !== 'development') {
    const config = useRuntimeConfig()
    Sentry.init({
      app: nuxtApp.vueApp,
      dsn: config.public.sentryDSN,
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
