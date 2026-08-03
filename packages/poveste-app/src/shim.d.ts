/// <reference types="vite/client" />

import type { Ref } from '@poveste/vendors/vue'

global {
  interface Window {
    __hst_controls_dark: Ref<boolean>[]
    __hst_controls_dark_ready: () => void
  }
}
