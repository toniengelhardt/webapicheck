# WebAPI check

Simply open this page to see which WebAPIs are supported on your device.

Made with [Nuxt](https://nuxt.com), [Vite](https://vitejs.dev), and [Uno](https://github.com/unocss/unocss).

| ![WebAPI check preview](https://user-images.githubusercontent.com/2703233/218753084-20b6cd9c-5303-48df-89ae-7bccb1519d0a.png) |
|-|

Sources: 

- [MDN Web Docs](https://developer.mozilla.org)
- [Chrome Developers](https://developer.chrome.com/)

## Setup

Clone the repo, install dependencies with pnpm, and you're ready to go.

```bash
pnpm install
pnpm dev
```

## Contribute

Contributions are very welcome!

For WebAPI additions and bug fixes you can open pull requests right away, but for improvements and new features I'd suggest opening an issue for discussion first to avoid unnecessary work if the proposal gets rejected.

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

By default the app will check if the interface under `path` is defined – in this case `navigator.bluetooth` – and if yes, the API is available, otherwise not.

For more complex APIs you can customize the check function like so:

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

Note that this entry also has a `detail` property, which you can define if you want to display a widget to demo the API. In the example the widget shows the current battery level of the device. Take a look at the `DetailBatteryStatusAPI` component to get a feel for how that looks like.

If you need help, don't hesitate to ask.

<br>

> _The web platform and an open web are the most important infrastructure projects of our time._

<br>

Track repo stats on **[GithubTracker](https://githubtracker.com/toniengelhardt/webapicheck)**
