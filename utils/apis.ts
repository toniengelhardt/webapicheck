export const apiData = {
  /* battery: {
    name: 'Battery Status API',
    path: 'navigator',
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API',
    }],
    check: async () => navigator.getBattery()
  }, */
  bluetooth: {
    name: 'Bluetooth API',
    path: 'Bluetooth',
    experimental: true,
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API',
    }],
  },
  clipboard: {
    name: 'Clipboard API',
    path: 'navigator',
    secureContext: true,
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API',
    }]
  },
  credentials: {
    name: 'Web Authentication API',
    path: 'nativator',
    secureContext: true,
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API',
    }]
  },
  digitalGoods: {
    name: 'Digital Goods API',
    path: 'navigator',
    source: 'chrome',
    links: [{
      name: 'post',
      url: 'https://developer.chrome.com/docs/android/trusted-web-activity/receive-payments-play-billing/',
    }, {
      name: 'spec',
      url: 'https://github.com/WICG/digital-goods/blob/main/explainer.md',
    }, {
      name: 'status',
      url: 'https://chromestatus.com/feature/5339955595313152',
    }]
  },
  fullscreen: {
    name: 'Fullscreen API',
    path: 'document',
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API',
    }],
    check: () => document.fullscreenEnabled !== undefined
  },
  geolocation: {
    name: 'Geolocation API',
    path: 'navigator',
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API',
    }]
  },
  history: {
    name: 'History API',
    path: 'window',
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/History_API',
    }],
  },
  indexedDB: {
    name: 'IndexedDB API',
    path: 'window',
    webworkers: true,
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
    }],
  },
  notifications: {
    name: 'Notifications API',
    path: 'Notification',
    webworkers: true,
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API',
    }],
    check: () => { try { return Notification !== undefined } catch (error) { return false } },
  },
  paymentRequest: {
    name: 'Payment Request API',
    path: 'window',
    secureContext: true,
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API',
    }],
    check: () => window?.PaymentRequest !== undefined,
  },
  storage: {
    name: 'Storage',
    path: 'navigator',
    secureContext: true,
    webworkers: true,
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage_API',
    }]
  },
  usb: {
    name: 'WebUSB API',
    path: 'navigator',
    experimental: true,
    secureContext: true,
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebUSB_API',
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
      name: 'post',
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
  webCrypto: {
    name: 'Web Crypto API',
    path: 'Crypto',
    secureContext: true,
    webworkers: true,
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API',
    }],
    check: () => Crypto !== undefined,
  },
  webShare: {
    name: 'Web Share API',
    path: 'navigator',
    secureContext: true,
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API',
    }],
    check: () => navigator?.canShare !== undefined,
  },
  webSpeech: {
    name: 'Web Speech API',
    path: 'window',
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API',
    }],
    check: () => window?.SpeechRecognition || webkitSpeechRecognition
  },
  xr: {
    name: 'WebXR Device API',
    path: 'navigator',
    experimental: true,
    secureContext: true,
    links: [{
      name: 'docs',
      url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API',
    }],
  }
}
