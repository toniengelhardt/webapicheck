import DetailBatteryStatusAPI from '~/components/detail/BatteryStatusAPI.vue'
import DetailGeolocationAPI from '~/components/detail/GeolocationAPI.vue'
import DetailVisualViewport from '~/components/detail/VisualViewport.vue'
import DetailWebCryptoAPI from '~/components/detail/WebCryptoAPI.vue'

export const apiData = {
  battery: {
    name: 'Battery Status API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API',
    path: 'navigator',
    secureContextRequired: true,
    detail: shallowRef(DetailBatteryStatusAPI),
    check: async () => {
      if (navigator && 'getBattery' in navigator) {
        const bm = await navigator.getBattery()
        return bm !== undefined
      }
      return false
    },
  },
  bluetooth: {
    name: 'Bluetooth API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API',
    path: 'navigator',
    userInteractionRequired: true,
    permissionsRequired: true,
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
    path: 'navigator',
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
    check: () => document?.fullscreenEnabled !== undefined || document?.webkitFullscreenEnabled !== undefined,
    action: {
      icon: 'fullscreen',
      label: 'Fullscreen',
      func: () => {
        try {
          if (document?.fullscreenEnabled !== undefined) {
            document.documentElement.requestFullscreen()
          } else if (document?.webkitFullscreenEnabled !== undefined) {
            document.documentElement.webkitRequestFullscreen()
          }
        } catch (error) {
          console.error(error)
          alert(`Oh oh, an error occured. Check the console for more details!`)
        }
      },
    },
  },
  geolocation: {
    name: 'Geolocation API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API',
    path: 'navigator',
    userInteractionRequired: true,
    permissionsRequired: true,
    secureContextRequired: true,
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
  performance: {
    name: 'Performance API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_API',
    path: 'window',
  },
  permissions: {
    name: 'Permissions API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API',
    path: 'navigator',
    availableInWebWorkers: true,
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
  vibrate: {
    name: 'Vibration API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API',
    path: 'navigator',
    action: {
      icon: 'vibration',
      label: 'Vibrate',
      func: () => window?.navigator?.vibrate(200),
    }
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
  crypto: {
    name: 'Web Crypto API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API',
    path: 'window',
    secureContextRequired: true,
    availableInWebWorkers: true,
    detail: shallowRef(DetailWebCryptoAPI),
  },
  webGL: {
    name: 'Web GL',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API',
    path: 'WebGLRenderingContext',
    check: () => {
      // https://stackoverflow.com/questions/11871077/proper-way-to-detect-webgl-support
      try {
        const canvas = document?.createElement('canvas')
        return canvas && !!window?.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
      } catch(error) {
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
    userInteractionRequired: true,
    check: () => navigator?.canShare !== undefined,
    action: {
      icon: 'share',
      label: 'Share page',
      func: () => window?.navigator?.share({
        title: 'WebAPI check',
        text: 'Easily check which WebAPIs and interfaces are available on your current device by opening this page.',
        url: 'https://webapicheck.com',
      })
    },
  },
  webSpeech: {
    name: 'Web Speech API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API',
    path: 'window',
    check: () => {
      try {
        return !!window?.SpeechRecognition || !!window?.webkitSpeechRecognition
      } catch (error) {
        return false
      }
    },
  },
  xr: {
    name: 'Web XR Device API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API',
    path: 'navigator',
    experimental: true,
    secureContextRequired: true,
  }
}
