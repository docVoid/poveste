export { defaultColors } from './colors.js'
export * from './config.js'
export * from './plugin.js'
export * from '@poveste/shared'

declare module 'rollup' {
  interface PluginContextMeta {
    poveste: {
      isCollecting: boolean
    }
  }
}
