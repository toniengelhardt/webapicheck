# WebAPI check

Simply open this page and get an instant overview of the WebAPIs that are supported on your current device. WebAPI requirements, specs, live tests, and more...

| ![WebAPI check preview](https://user-images.githubusercontent.com/2703233/218753084-20b6cd9c-5303-48df-89ae-7bccb1519d0a.png) |
|-|

Made with [Nuxt](https://nuxt.com), [Vite](https://vitejs.dev), and [Uno](https://github.com/unocss/unocss).

Sources: 

- [MDN Web Docs](https://developer.mozilla.org)
- [Chrome Developers](https://developer.chrome.com/)

## Setup

Clone the repo, install the dependencies with pnpm, and you're ready to go.

```bash
pnpm install
pnpm dev
```

## Production

Build application for production:

```bash
pnpm build
```

## Contribute

Contributions are very welcome!

For WebAPI additions and bug fixes you can open pull requests right away, but for improvements and new features I'd suggest opening an issue for discussion first to avoid unnecessary work if it gets rejected.

Please use prefixes according to [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) and [@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventiona) in your commits to make [changelogithub](https://github.com/antfu/changelogithub) work properly, e.g.

- chore: upgrade deps
- fix: a bug
- test: something

### Adding new APIs

Adding new WebAPIs is really easy, just add it to the `webApiData` object in `utils/webapis.ts` like this:

```ts
'bluetooth-api': {
  name: 'Bluetooth API',
  url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API',
  path: 'navigator.bluetooth',
  source: 'mdn',
  userInteractionRequired: true,
  permissionsRequired: true,
  secureContextRequired: true,
  experimental: true,
}
```

By default the app will check if the interface under `path` is defined, aka. in this case `navigator.bluetooth`, and if yes the API is available, if not it is not available.

But that is the simplest case, some APIs require a more complex test in which case you can add a custom check function like so:

```ts
'battery-status-api': {
  name: 'Battery Status API',
  url: 'https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API',
  path: 'navigator.battery',
  source: 'mdn',
  secureContextRequired: true,
  detail: shallowRef(DetailBatteryStatusAPI),
  check: async () => {
    try {
      if (navigator && 'getBattery' in navigator) {
        const bm = await (navigator as any).getBattery()
        return bm !== undefined
      }
      return false
    } catch (error) {
      return false
    }
  },
}
```

Note that this entry also has a `detail` property, which you can define if you want display a widget demoing an API. In this case the widget shows the current battery level of the device. Take a look at the `DetailBatteryStatusAPI` component to get a feel for how that looks like.

If you need help, don't hesitate to ask.

<br>

> _The web platform and an open web are the most important infrastructure projects of our time._

<br>

Repo Insights via **[RepoTracker](https://repo-tracker.com)** at  
[www.repo-tracker.com/r/gh/toniengelhardt/webapicheck](https://repo-tracker.com/r/gh/toniengelhardt/webapicheck)
