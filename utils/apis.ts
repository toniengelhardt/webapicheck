import DetailBatteryStatusAPI from '~/components/detail/BatteryStatusAPI.vue'
import DetailGeolocationAPI from '~/components/detail/GeolocationAPI.vue'
import DetailNetworkConnectionAPI from '~/components/detail/NetworkConnectionAPI.vue'
import DetailVisualViewport from '~/components/detail/VisualViewport.vue'
import DetailWebCryptoAPI from '~/components/detail/WebCryptoAPI.vue'

export const apiData: WebAPIData = {
  barcodeDetectionAPI: {
    name: 'Barcode Detection API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector',
    path: 'window.BarcodeDetector',
    secureContextRequired: true,
    experimental: true,
  },
  batteryStatusAPI: {
    name: 'Battery Status API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API',
    path: 'navigator.battery',
    secureContextRequired: true,
    detail: shallowRef(DetailBatteryStatusAPI),
    check: async () => {
      try {
        if (navigator && 'getBattery' in navigator) {
          const bm = await navigator.getBattery()
          return bm !== undefined
        }
        return false
      } catch (error) {
        return false
      }
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
  broadcastChannelAPI: {
    name: 'Broadcast Channel API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API',
    path: 'window.BroadcastChannel',
    availableInWebWorkers: true,
  },
  clipboardAPI: {
    name: 'Clipboard API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API',
    path: 'navigator.clipboard',
    secureContextRequired: true,
  },
  contactPickerAPI: {
    name: 'Contact Picker API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Contact_Picker_API',
    path: 'navigator.contacts',
    secureContextRequired: true,
    experimental: true,
  },
  contentIndexAPI: {
    name: 'Content Index API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Content_Index_API',
    path: 'N/A',
    experimental: true,
    check: async () => {
      try {
        const registration = await navigator.serviceWorker.ready
        return 'index' in registration
      } catch (error) {
        return false
      }
    },
  },
  cookieStoreAPI: {
    name: 'Cookie Store API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Cookie_Store_API',
    path: 'window.CookieStore',
    secureContextRequired: true,
    experimental: true,
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
    path: 'window.EyeDropper',
    secureContextRequired: true,
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
  gamepadAPI: {
    name: 'Gamepad API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API',
    path: 'window.Gamepad',
    secureContextRequired: true,
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
  htmlSanitizer: {
    name: 'HTML Sanitizer API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API',
    path: 'window.Sanitizer',
    secureContextRequired: true,
    experimental: true,
  },
  imageCaptureAPI: {
    name: 'Image Capture API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API',
    path: 'window.ImageCapture',
    experimental: true,
  },
  indexedDBAPI: {
    name: 'IndexedDB API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
    path: 'window.indexedDB',
    availableInWebWorkers: true,
  },
  intersectionObserverAPI: {
    name: 'Intersection Observer API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API',
    path: 'window.IntersectionObserver',
  },
  networkConnectionAPI: {
    name: 'Network Connection API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API',
    path: 'navigator.connection',
    availableInWebWorkers: true,
    experimental: true,
    detail: shallowRef(DetailNetworkConnectionAPI),
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
    path: 'window.PaymentRequest',
    secureContextRequired: true,
  },
  performanceAPI: {
    name: 'Performance API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_API',
    path: 'window.performance',
  },
  performanceTimelineAPI: {
    name: 'Performance Timeline API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_Timeline',
    path: 'window.performance',
    availableInWebWorkers: true,
    check: () => window?.performance?.getEntries !== undefined,
  },
  permissionsAPI: {
    name: 'Permissions API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API',
    path: 'navigator.permissions',
    availableInWebWorkers: true,
  },
  pictureInPicture: {
    name: 'Picture-in-Picture API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API',
    path: 'window.PictureInPictureWindow',
    check: () => !!document?.pictureInPictureEnabled,
  },
  screenOrientationAPI: {
    name: 'Screen Orientation API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API',
    path: 'screen.orientation',
    value: () => window?.screen?.orientation?.type,
  },
  screenWakeLockAPI: {
    name: 'Screen Wake Lock API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API',
    path: 'navigator.wakeLock',
    secureContextRequired: true,
    experimental: true,
  },
  storage: {
    name: 'Storage',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage_API',
    path: 'navigator.storage',
    secureContextRequired: true,
    availableInWebWorkers: true,
  },
  touch: {
    name: 'Touch Events',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Touch_events',
    path: 'window.Touch',
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
  webHIDAPI: {
    name: 'WebHID API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API',
    path: 'navigator.hid',
    experimental: true,
  },
  webMIDIAPI: {
    name: 'Web MIDI API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API',
    path: 'navigator.requestMIDIAccess',
    secureContextRequired: true,
  },
  webRTCAPI: {
    name: 'WebRTC API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API',
    path: 'window.RTCPeerConnection',
  },
  webShareAPI: {
    name: 'Web Share API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Share_API',
    path: 'navigator.canShare',
    secureContextRequired: true,
    userInteractionRequired: true,
    action: {
      icon: 'share',
      label: 'Share page',
      func: () => {
        navigator?.share({
          title: 'WebAPI check',
          text: 'Easily check which WebAPIs and interfaces are available on your current device by opening this page.',
          url: 'https://webapicheck.com',
        })
          .catch(error => {})
      },
    },
  },
  webSocketAPI: {
    name: 'WebSocket API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
    path: 'window.WebSocket',
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
  webStorageAPI: {
    name: 'Web Storage API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API',
    path: 'window.Storage',
  },
  webUSBAPI: {
    name: 'Web USB API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebUSB_API',
    path: 'navigator.usb',
    experimental: true,
    secureContextRequired: true,
  },
  webXRDeviceAPI: {
    name: 'WebXR Device API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API',
    path: 'navigator.xr',
    experimental: true,
    secureContextRequired: true,
  },
}
