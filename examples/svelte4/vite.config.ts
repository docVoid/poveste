/// <reference types="poveste" />

import { HstSvelte } from '@poveste/plugin-svelte'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    svelte(),
  ],
  histoire: {
    plugins: [
      HstSvelte(),
    ],
    tree: {
      groups: [
        {
          id: 'top',
          title: '',
        },
      ],
    },
  },
})
