import * as shvl from 'shvl'
import DetailBatteryStatusAPI from '~/components/detail/BatteryStatusAPI.vue'
import DetailGeolocationAPI from '~/components/detail/GeolocationAPI.vue'
import DetailNetworkConnectionAPI from '~/components/detail/NetworkConnectionAPI.vue'
import DetailVisualViewport from '~/components/detail/VisualViewport.vue'
import DetailWebCryptoAPI from '~/components/detail/WebCryptoAPI.vue'

export function defaultWebApiCheck(api: WebApi) {
  if (api.path) {
    const partials = api.path.split('.')
    const path = partials[0] === 'window' ? partials.slice(1).join('.') : api.path
    return !!shvl.get(window, path, undefined)
  }
  return false
}

export const webApiData: { [slug: string]: Omit<WebApi, 'id'> } = {
  'accelerometer': {
    name: 'Accelerometer',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Accelerometer',
    path: 'window.Accelerometer',
    permissionsRequired: true,
    secureContextRequired: true,
    experimental: true,
  },
  'ambient-light-sensor': {
    name: 'Ambient Light Sensor',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor',
    path: 'window.AmbientLightSensor',
    permissionsRequired: true,
    secureContextRequired: true,
    experimental: true,
  },
  'barcode-detection-api': {
    name: 'Barcode Detection API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/BarcodeDetector',
    path: 'window.BarcodeDetector',
    secureContextRequired: true,
    experimental: true,
  },
  'battery-status-api': {
    name: 'Battery Status API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API',
    path: 'navigator.battery',
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
  },
  'bluetooth-api': {
    name: 'Bluetooth API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Bluetooth_API',
    path: 'navigator.bluetooth',
    userInteractionRequired: true,
    permissionsRequired: true,
    secureContextRequired: true,
    experimental: true,
  },
  'broadcast-channel-api': {
    name: 'Broadcast Channel API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API',
    path: 'window.BroadcastChannel',
    availableInWebWorkers: true,
  },
  'clipboard-api': {
    name: 'Clipboard API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API',
    path: 'navigator.clipboard',
    secureContextRequired: true,
  },
  'contact-picker-api': {
    name: 'Contact Picker API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Contact_Picker_API',
    path: 'navigator.contacts',
    secureContextRequired: true,
    experimental: true,
  },
  'content-index-api': {
    name: 'Content Index API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Content_Index_API',
    experimental: true,
    check: async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.ready
          return 'index' in registration
        } catch (error) {
          return false
        }
      } else {
        return false
      }
    },
  },
  'cookie-store-api': {
    name: 'Cookie Store API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Cookie_Store_API',
    path: 'window.CookieStore',
    secureContextRequired: true,
    experimental: true,
  },
  'digital-goods-api': {
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
    ],
  },
  'eyedropper-api': {
    name: 'EyeDropper API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper_API',
    path: 'window.EyeDropper',
    secureContextRequired: true,
    action: {
      icon: 'eyedropper',
      label: 'Pick a color',
      func: () => {
        try {
          // @ts-expect-error - EyeDropper raises an error.
          const eyeDropper = new EyeDropper()
          eyeDropper.open()
            .then((result: any) => alert(`Selected color: ${result.sRGBHex}`))
        } catch (error) { }
      },
    },
  },
  'file-api': {
    name: 'File API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/File_API',
    path: 'window.File',
  },
  'file-system-access-api': {
    name: 'File System Access API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API',
    path: 'window.FileSystemHandle',
    secureContextRequired: true,
  },
  'fullscreen-api': {
    name: 'Fullscreen API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fullscreen_API',
    path: 'document.fullscreen',
    check: () => document?.fullscreenEnabled !== undefined || (document as any)?.webkitFullscreenEnabled !== undefined,
    action: {
      icon: 'fullscreen',
      label: 'Fullscreen',
      func: () => {
        try {
          if (document?.fullscreenEnabled !== undefined) {
            document.documentElement.requestFullscreen()
          } else if ((document as any)?.webkitFullscreenEnabled !== undefined) {
            (document.documentElement as any).webkitRequestFullscreen()
          }
        } catch (error) {
          console.error(error)
          alert('Oh oh, an error occured. Check the console for more details!')
        }
      },
    },
  },
  // G
  'gamepad-api': {
    name: 'Gamepad API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API',
    path: 'window.Gamepad',
    secureContextRequired: true,
  },
  'geolocation-api': {
    name: 'Geolocation API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API',
    path: 'navigator.geolocation',
    userInteractionRequired: true,
    permissionsRequired: true,
    secureContextRequired: true,
    detail: shallowRef(DetailGeolocationAPI),
  },
  'gravity-sensor': {
    name: 'Gravity Sensor',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/GravitySensor',
    path: 'window.GravitySensor',
    permissionsRequired: true,
    secureContextRequired: true,
  },
  'gyroscope': {
    name: 'Gyroscope',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Gyroscope',
    path: 'window.Gyroscope',
    permissionsRequired: true,
    secureContextRequired: true,
  },
  // H
  'history-api': {
    name: 'History API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/History_API',
    path: 'window.history',
  },
  'html-sanitizer': {
    name: 'HTML Sanitizer API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/HTML_Sanitizer_API',
    path: 'window.Sanitizer',
    secureContextRequired: true,
    experimental: true,
  },
  // I
  'image-capture-api': {
    name: 'Image Capture API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/MediaStream_Image_Capture_API',
    path: 'window.ImageCapture',
    experimental: true,
  },
  'indexed-db-api': {
    name: 'IndexedDB API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API',
    path: 'window.indexedDB',
    availableInWebWorkers: true,
  },
  'intersection-observer-api': {
    name: 'Intersection Observer API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API',
    path: 'window.IntersectionObserver',
  },
  // L
  'largest-content-full-paint-api': {
    name: 'Largest Contentful Paint API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/LargestContentfulPaint',
    path: 'window.LargestContentfulPaint',
    experimental: true,
  },
  'layout-instability-api': {
    name: 'Layout Instability API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Layout_Instability_API',
    path: 'window.LayoutShift',
    experimental: true,
  },
  'linear-acceleration-sensor': {
    name: 'Linear Acceleration Sensor',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/LinearAccelerationSensor',
    path: 'window.LinearAccelerationSensor',
    permissionsRequired: true,
    secureContextRequired: true,
  },
  // M
  'magnetometer': {
    name: 'Magnetometer',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Magnetometer',
    path: 'window.Magnetometer',
    permissionsRequired: true,
    secureContextRequired: true,
    experimental: true,
  },
  // N
  'network-connection-api': {
    name: 'Network Connection API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Network_Information_API',
    path: 'navigator.connection',
    availableInWebWorkers: true,
    experimental: true,
    detail: shallowRef(DetailNetworkConnectionAPI),
  },
  'notifications-api': {
    name: 'Notifications API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API',
    path: 'window.Notification',
    permissionsRequired: true,
    availableInWebWorkers: true,
  },
  // O
  'orientation-sensor': {
    name: 'Orientation Sensor',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/OrientationSensor',
    path: 'window.OrientationSensor',
    permissionsRequired: true,
    secureContextRequired: true,
    // action: {
    //   // icon: 'eyedropper',
    //   label: 'Get orientation',
    //   func: () => {
    //     try {
    //       const options = { frequency: 60, referenceFrame: 'device' }
    //       const sensor = new AbsoluteOrientationSensor(options)
    //       useEventListener(sensor, 'reading', () => {
    //         // model is a Three.js object instantiated elsewhere.
    //         // model.quaternion.fromArray(sensor.quaternion).inverse();
    //         console.log('XXX', sensor)
    //       })
    //       sensor.start();
    //     } catch (error) {
    //       console.error(error)
    //       alert(`Oh oh, an error occured. Check the console for more details!`)
    //     }
    //   }
    // }
  },
  // P
  'payment-request-api': {
    name: 'Payment Request API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Payment_Request_API',
    path: 'window.PaymentRequest',
    secureContextRequired: true,
  },
  'performance-api': {
    name: 'Performance API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_API',
    path: 'window.performance',
  },
  'performance-timeline-api': {
    name: 'Performance Timeline API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Performance_Timeline',
    path: 'window.performance',
    availableInWebWorkers: true,
    check: () => window?.performance?.getEntries !== undefined,
  },
  'permissions-api': {
    name: 'Permissions API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Permissions_API',
    path: 'navigator.permissions',
    availableInWebWorkers: true,
  },
  'picture-in-picture': {
    name: 'Picture-in-Picture API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Picture-in-Picture_API',
    path: 'window.PictureInPictureWindow',
    check: () => !!document?.pictureInPictureEnabled,
  },
  // R
  'reporting-api': {
    name: 'Reporting API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Reporting_API',
    path: 'window.ReportingObserver',
    experimental: true,
  },
  // S
  // screenCaptureAPI: {
  //   name: 'Screen Capture API',
  //   url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API',
  //   check: async () => {
  //     try {
  //       const captureStream = await navigator.mediaDevices.getDisplayMedia()
  //       return !!captureStream
  //     } catch (err) {
  //       return false
  //     }
  //   }
  // },
  'screen-orientation-api': {
    name: 'Screen Orientation API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Orientation_API',
    path: 'screen.orientation',
    value: () => window?.screen?.orientation?.type,
  },
  'screen-wakelock-api': {
    name: 'Screen Wake Lock API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Screen_Wake_Lock_API',
    path: 'navigator.wakeLock',
    secureContextRequired: true,
    experimental: true,
  },
  'selection-api': {
    name: 'Selection API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Selection_API',
    path: 'window.Selection',
  },
  'storage': {
    name: 'Storage',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Storage_API',
    path: 'navigator.storage',
    secureContextRequired: true,
    availableInWebWorkers: true,
  },
  // T [complete]
  'touch': {
    name: 'Touch Events',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Touch_events',
    path: 'window.Touch',
  },
  // V [complete]
  'vibration-api': {
    name: 'Vibration API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Vibration_API',
    path: 'navigator.vibrate',
    action: {
      icon: 'vibration',
      label: 'Vibrate',
      func: () => { window?.navigator?.vibrate(200) },
    },
  },
  'virtual-keyboard-api': {
    name: 'Virtual Keyboard API',
    url: 'https://developer.chrome.com/docs/web-platform/virtual-keyboard/',
    path: 'navigator.virtualKeyboard',
    source: 'chrome',
    secureContextRequired: true,
  },
  'visual-viewport': {
    name: 'Visual Viewport',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Visual_Viewport_API',
    path: 'window.visualViewport',
    detail: shallowRef(DetailVisualViewport),
  },
  // W [complete]
  'web-animations-api': {
    name: 'Web Animations API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API',
    path: 'window.Animation',
  },
  'web-audio-api': {
    name: 'Web Audio API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API',
    path: 'window.AudioContext',
    check: () => window?.AudioContext !== undefined || (window as any)?.webkitAudioContext !== undefined,
  },
  'web-authentication-api': {
    name: 'Web Authentication API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API',
    path: 'navigator.credentials',
    secureContextRequired: true,
  },
  'web-codecs-api': {
    name: 'WebCodecs API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebCodecs_API',
    check: () => (window as any)?.AudioDecoder !== undefined && (window as any)?.VideoDecoder !== undefined,
  },
  'web-crypto-api': {
    name: 'Web Crypto API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Crypto_API',
    path: 'window.crypto',
    secureContextRequired: true,
    availableInWebWorkers: true,
    detail: shallowRef(DetailWebCryptoAPI),
  },
  'webgl': {
    name: 'WebGL',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API',
    path: 'window.WebGLRenderingContext',
    check: () => {
      // https://stackoverflow.com/questions/11871077/proper-way-to-detect-webgl-support
      try {
        const canvas = document?.createElement('canvas')
        return !!(canvas && !!window?.WebGLRenderingContext && (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')))
      } catch (error) {
        return false
      }
    },
  },
  'webgpu': {
    name: 'WebGPU',
    url: 'https://developer.chrome.com/en/docs/web-platform/webgpu',
    path: 'navigator.gpu',
    source: 'chrome',
    experimental: true,
    links: [{
      name: 'spec',
      url: 'https://gpuweb.github.io/gpuweb/',
    }, {
      name: 'status',
      url: 'https://chromestatus.com/feature/6213121689518080',
    }],
  },
  'webhid-api': {
    name: 'WebHID API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebHID_API',
    path: 'navigator.hid',
    experimental: true,
  },
  'web-midi-api': {
    name: 'Web MIDI API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_MIDI_API',
    path: 'navigator.requestMIDIAccess',
    secureContextRequired: true,
  },
  'webrtc-api': {
    name: 'WebRTC API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API',
    path: 'window.RTCPeerConnection',
  },
  'web-share-api': {
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
          .catch(() => {})
      },
    },
  },
  'web-sockets-api': {
    name: 'WebSocket API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
    path: 'window.WebSocket',
  },
  'web-speech-api': {
    name: 'Web Speech API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API',
    path: 'window.webSpeech',
    check: () => {
      try {
        return !!(window as any)?.SpeechRecognition || !!(window as any)?.webkitSpeechRecognition
      } catch (error) {
        return false
      }
    },
  },
  'web-storage-api': {
    name: 'Web Storage API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API',
    path: 'window.Storage',
  },
  'web-usb-api': {
    name: 'Web USB API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebUSB_API',
    path: 'navigator.usb',
    experimental: true,
    secureContextRequired: true,
  },
  'webvtt': {
    name: 'WebVTT API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebVTT_API',
    check: () => window?.VTTCue !== undefined && window?.VTTRegion !== undefined,
  },
  'web-workers-api': {
    name: 'Web Workers API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Using_web_workers',
    path: 'window.Worker',
  },
  'webxr-device-api': {
    name: 'WebXR Device API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API',
    path: 'navigator.xr',
    experimental: true,
    secureContextRequired: true,
  },
  'window-controls-overlay-api': {
    name: 'Window Controls Overlay API',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/Window_Controls_Overlay_API',
    path: 'navigator.windowControlsOverlay',
    experimental: true,
  },
  // X [complete]
  'xml-http-request': {
    name: 'XMMLHttpRequest',
    url: 'https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest',
    path: 'window.XMLHttpRequest',
  },
}
