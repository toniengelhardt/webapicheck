import DetailBatteryStatusApi from '~/components/detail/BatteryStatusApi.vue'
import DetailGeolocationAPI from '~/components/detail/GeolocationApi.vue'
import DetailVisualViewport from '~/components/detail/VisualViewport.vue'

export const apiData = {
  battery: {
    name: 'Battery Status API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API',
    path: 'navigator',
    secureContextRequired: true,
    detail: shallowRef(DetailBatteryStatusApi),
    check: async () => {
      if ('getBattery' in navigator) {
        const bm = await navigator.getBattery()
        return bm !== undefined
      }
      return false
    },
  },
  bluetooth: {
    name: 'Bluetooth API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API',
    path: 'Bluetooth',
    experimental: true,
  },
  clipboard: {
    name: 'Clipboard API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API',
    path: 'navigator',
    secureContextRequired: true,
  },
  credentials: {
    name: 'Web Authentication API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API',
    path: 'nativator',
    secureContextRequired: true,
  },
  digitalGoods: {
    name: 'Digital Goods API',
    url: 'https://developer.chrome.com/docs/android/trusted-web-activity/receive-payments-play-billing/',
    path: 'navigator',
    source: 'chrome',
    links: [
      {
        name: 'spec',
        url: 'https://github.com/WICG/digital-goods/blob/main/explainer.md',
      }, {
        name: 'status',
        url: 'https://chromestatus.com/feature/5339955595313152',
      },
    ]
  },
  fullscreen: {
    name: 'Fullscreen API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API',
    path: 'document',
    check: () => document.fullscreenEnabled !== undefined,
  },
  geolocation: {
    name: 'Geolocation API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API',
    path: 'navigator',
    secureContextRequired: true,
    userInteractionRequired: true,
    detail: shallowRef(DetailGeolocationAPI),
  },
  history: {
    name: 'History API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/History_API',
    path: 'window',
  },
  indexedDB: {
    name: 'IndexedDB API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
    path: 'window',
    availableInWebWorkers: true,
  },
  notifications: {
    name: 'Notifications API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API',
    path: 'Notification',
    availableInWebWorkers: true,
    check: () => {
      try {
        return Notification !== undefined
      } catch (error) {
        return false
      }
    },
  },
  paymentRequest: {
    name: 'Payment Request API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API',
    path: 'window',
    secureContextRequired: true,
    check: () => window?.PaymentRequest !== undefined,
  },
  screenOrientation: {
    name: 'Screen Orientation API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API',
    path: 'screen',
    check: () => window?.screen?.orientation !== undefined,
    value: () => window?.screen?.orientation?.type,
  },
  storage: {
    name: 'Storage',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage_API',
    path: 'navigator',
    secureContextRequired: true,
    availableInWebWorkers: true,
  },
  usb: {
    name: 'Web USB API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebUSB_API',
    path: 'navigator',
    experimental: true,
    secureContextRequired: true,
  },
  vibration: {
    name: 'Vibration API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API',
    path: 'navigator',
  },
  virtualKeyboard: {
    name: 'Virtual Keyboard API',
    url:'https://developer.chrome.com/docs/web-platform/virtual-keyboard/',
    path: 'navigator',
    source: 'chrome',
    secureContextRequired: true,
  },
  visualViewport: {
    name: 'Visual Viewport',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API',
    detail: shallowRef(DetailVisualViewport),
  },
  wakeLock: {
    name: 'Screen Wake Lock API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API',
    path: 'navigator',
    secureContextRequired: true,
    experimental: true,
  },
  webCrypto: {
    name: 'Web Crypto API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API',
    path: 'Crypto',
    secureContextRequired: true,
    availableInWebWorkers: true,
    check: () => Crypto !== undefined,
  },
  webGL: {
    name: 'WebGL',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API',
    path: 'WebGLRenderingContext',
    check: () => {
      // https://stackoverflow.com/questions/11871077/proper-way-to-detect-webgl-support
      try {
        const canvas = document?.createElement('canvas')
        return canvas && !!window?.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      } catch(e) {
        return false;
      }
    }
  },
  webMIDI: {
    name: 'Web MIDI API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API',
    path: 'navigator',
    secureContextRequired: true,
    check: () => navigator?.requestMIDIAccess !== undefined,
  },
  webShare: {
    name: 'Web Share API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API',
    path: 'navigator',
    secureContextRequired: true,
    check: () => navigator?.canShare !== undefined,
  },
  webSpeech: {
    name: 'Web Speech API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API',
    path: 'window',
    check: () => window?.SpeechRecognition || webkitSpeechRecognition
  },
  xr: {
    name: 'WebXR Device API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API',
    path: 'navigator',
    experimental: true,
    secureContextRequired: true,
  }
}
