import { logEvent } from '@poveste/app'

export * from '@poveste/app'

export function isCollecting() {
  return process.env.HST_COLLECT === 'true'
}

/**
 * @deprecated
 */
export function hstEvent(...args) {
  console.warn(`'hstEvent' is deprecated. Use 'logEvent' instead.`)
  return logEvent(...args)
}
