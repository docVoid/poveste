/// <reference types="vitest" />

import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: process.env.VITEST
      ? {}
      : {
          'floating-vue': '@poveste/vendors/floating-vue',
          '@iconify/vue': '@poveste/vendors/iconify',
          'pinia': '@poveste/vendors/pinia',
          'scroll-into-view-if-needed': '@poveste/vendors/scroll',
          'vue-router': '@poveste/vendors/vue-router',
          '@vueuse/core': '@poveste/vendors/vue-use',
          'vue': '@poveste/vendors/vue',
        },
  },

  build: {
    emptyOutDir: false,

    lib: {
      entry: 'src/index.ts',
      formats: [
        'es',
      ],
      fileName: 'index.es',
    },

    rollupOptions: {
      external: [
        /@poveste/,
      ],
    },
  },

  test: {
    environment: 'jsdom',
    globals: true,
  },
})
