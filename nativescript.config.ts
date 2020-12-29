import { NativeScriptConfig } from '@nativescript/core'

export default {
  id: 'com.mdateam4.vrijmiboquiz',
  appPath: 'src',
  appResourcesPath: 'App_Resources',
  android: {
    v8Flags: '--expose_gc',
    markingMode: 'none'
  }
} as NativeScriptConfig
