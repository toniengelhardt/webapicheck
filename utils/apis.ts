import DetailBatteryStatusAPI from '~/components/detail/BatteryStatusAPI.vue'
import DetailGeolocationAPI from '~/components/detail/GeolocationAPI.vue'
import DetailVisualViewport from '~/components/detail/VisualViewport.vue'
import DetailWebCryptoAPI from '~/components/detail/WebCryptoAPI.vue'

export const apiData = {
  batteryStatusAPI: {
    name: 'Battery Status API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API',
    path: 'navigator.battery',
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
  bluetoothAPI: {
    name: 'Bluetooth API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API',
    path: 'navigator.bluetooth',
    userInteractionRequired: true,
    permissionsRequired: true,
    experimental: true,
  },
  clipboardAPI: {
    name: 'Clipboard API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API',
    path: 'navigator.clipboard',
    secureContextRequired: true,
  },
  webAuthenticationAPI: {
    name: 'Web Authentication API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API',
    path: 'navigator.credentials',
    secureContextRequired: true,
  },
  webCryptoAPI: {
    name: 'Web Crypto API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API',
    path: 'window.crypto',
    secureContextRequired: true,
    availableInWebWorkers: true,
    detail: shallowRef(DetailWebCryptoAPI),
  },
  digitalGoodsAPI: {
    name: 'Digital Goods API',
    url: 'https://developer.chrome.com/docs/android/trusted-web-activity/receive-payments-play-billing/',
    path: 'navigator.digitalGoods',
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
  eyeDropperAPI: {
    name: 'EyeDropper API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API',
    path: 'window.eyeDropper',
    secureContextRequired: true,
    check: () => window?.EyeDropper !== undefined,
    action: {
      icon: 'eyedropper',
      label: 'Pick a color',
      func: () => {
        const eyeDropper = new EyeDropper()
        eyeDropper.open()
          .then(result => alert(`Selected color: ${result.sRGBHex}`))
      }
    }
  },
  fileSystemAccessAPI: {
    name: 'File System Access API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API',
    path: 'window.FileSystemHandle',
    secureContextRequired: true,
  },
  fullscreenAPI: {
    name: 'Fullscreen API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API',
    path: 'document.fullscreen',
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
  geolocationAPI: {
    name: 'Geolocation API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API',
    path: 'navigator.geolocation',
    userInteractionRequired: true,
    permissionsRequired: true,
    secureContextRequired: true,
    detail: shallowRef(DetailGeolocationAPI),
  },
  historyAPI: {
    name: 'History API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/History_API',
    path: 'window.history',
  },
  indexedDBAPI: {
    name: 'IndexedDB API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
    path: 'window.indexedDB',
    availableInWebWorkers: true,
  },
  notificationsAPI: {
    name: 'Notifications API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API',
    path: 'window.Notification',
    permissionsRequired: true,
    availableInWebWorkers: true,
  },
  paymentRequestAPI: {
    name: 'Payment Request API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API',
    path: 'window.paymentRequest',
    secureContextRequired: true,
    check: () => window?.PaymentRequest !== undefined,
  },
  performanceAPI: {
    name: 'Performance API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_API',
    path: 'window.performance',
  },
  permissionsAPI: {
    name: 'Permissions API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API',
    path: 'navigator.permissions',
    availableInWebWorkers: true,
  },
  screenOrientationAPI: {
    name: 'Screen Orientation API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API',
    path: 'window.screen',
    check: () => window?.screen?.orientation !== undefined,
    value: () => window?.screen?.orientation?.type,
  },
  storage: {
    name: 'Storage',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage_API',
    path: 'navigator.storage',
    secureContextRequired: true,
    availableInWebWorkers: true,
  },
  webUSBAPI: {
    name: 'Web USB API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebUSB_API',
    path: 'navigator.usb',
    experimental: true,
    secureContextRequired: true,
  },
  vibrationAPI: {
    name: 'Vibration API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API',
    path: 'navigator.vibrate',
    action: {
      icon: 'vibration',
      label: 'Vibrate',
      func: () => window?.navigator?.vibrate(200),
    }
  },
  virtualKeyboardAPI: {
    name: 'Virtual Keyboard API',
    url:'https://developer.chrome.com/docs/web-platform/virtual-keyboard/',
    path: 'navigator.virtualKeyboard',
    source: 'chrome',
    secureContextRequired: true,
  },
  visualViewport: {
    name: 'Visual Viewport',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API',
    path: 'window.visualViewport',
    detail: shallowRef(DetailVisualViewport),
  },
  screenWakeLockAPI: {
    name: 'Screen Wake Lock API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API',
    path: 'navigator.wakeLock',
    secureContextRequired: true,
    experimental: true,
  },
  webGL: {
    name: 'WebGL',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API',
    path: 'window.WebGLRenderingContext',
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
  webMIDIAPI: {
    name: 'Web MIDI API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API',
    path: 'navigator.webMIDI',
    secureContextRequired: true,
    check: () => navigator?.requestMIDIAccess !== undefined,
  },
  webRTCAPI: {
    name: 'WebRTC API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API',
    path: 'window.RTCPeerConnection',
  },
  webShareAPI: {
    name: 'Web Share API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API',
    path: 'navigator.webShare',
    secureContextRequired: true,
    userInteractionRequired: true,
    check: () => navigator?.canShare !== undefined,
    action: {
      icon: 'share',
      label: 'Share page',
      func: () => {
        try {
          window?.navigator?.share({
            title: 'WebAPI check',
            text: 'Easily check which WebAPIs and interfaces are available on your current device by opening this page.',
            url: 'https://webapicheck.com',
          })
        } catch (error) {}
      },
    },
  },
  webSpeechAPI: {
    name: 'Web Speech API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API',
    path: 'window.webSpeech',
    check: () => {
      try {
        return !!window?.SpeechRecognition || !!window?.webkitSpeechRecognition
      } catch (error) {
        return false
      }
    },
  },
  webSocketAPI: {
    name: 'WebSocket API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
    path: 'window.WebSocket',
    check: () => window?.WebSocket !== undefined,
  },
  webStorageAPI: {
    name: 'Web Storage API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API',
    path: 'window.webStorage',
    check: () => window?.sessionStorage !== undefined && window?.localStorage !== undefined,
  },
  webXRDeviceAPI: {
    name: 'WebXR Device API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API',
    path: 'navigator.xr',
    experimental: true,
    secureContextRequired: true,
  },
}
