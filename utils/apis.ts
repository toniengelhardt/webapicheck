export const apiData = {
  clipboard: {
    name: 'Clipboard API',
    path: 'navigator',
    secureContext: true,
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API',
    }]
  },
  digitalGoods: {
    name: 'Digital Goods API',
    path: 'navigator',
    source: 'chrome',
    links: [{
      name: 'docs',
      url: 'https://developer.chrome.com/docs/android/trusted-web-activity/receive-payments-play-billing/',
    }]
  },
  notifications: {
    name: 'Notifications API',
    path: 'Notification',
    webworkers: true,
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API',
    }],
  },
  storage: {
    name: 'Storage',
    path: 'navigator',
    secureContext: true,
    webworkers: true,
    links: [{
      name: 'docs',
      url:'https://developer.mozilla.org/en-US/docs/Web/API/Storage_API',
    }]
  },
  vibration: {
    name: 'Vibration API',
    path: 'navigator',
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API',
    }]
  },
  virtualKeyboard: {
    name: 'Virtual Keyboard API',
    path: 'navigator',
    secureContext: true,
    source: 'chrome',
    links: [{
      name: 'docs',
      url:'https://developer.chrome.com/docs/web-platform/virtual-keyboard/',
    }]
  },
  visualViewport: {
    name: 'Visual Viewport',
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API',
    }],
  },
  wakeLock: {
    name: 'Screen Wake Lock API',
    path: 'navigator',
    experimental: true,
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API',
    }]
  },
  webShare: {
    name: 'Web Share API',
    path: 'navigator',
    secureContext: true,
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API',
    }]
  }
}
