# Poveste + Nuxt 3

```bash
pnpm add -D @poveste/plugin-nuxt
```

Add the plugin in histoire config:

```js
import { HstNuxt } from '@poveste/plugin-nuxt'
import { defineConfig } from 'poveste'

export default defineConfig({
  plugins: [
    HstNuxt(),
  ],
})
```
