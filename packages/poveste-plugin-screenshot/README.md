# Poveste Screenshot visual regression testing

```
pnpm add -D @poveste/plugin-screenshot
```

Add the plugin in histoire config:

```js
import { HstScreenshot } from '@poveste/plugin-screenshot'
import { defineConfig } from 'poveste'

export default defineConfig({
  plugins: [
    HstScreenshot({
      // Options here
    }),
  ],
})
```

## Setting Up Chrome Linux Sandbox

If you get an error like No usable sandbox! or Running as root without --no-sandbox is not supported, you need to properly set up sandboxing on your Linux instance.
Alternatively, if you completely trust the content, you can disable sandboxing (strongly discouraged):

ref. https://github.com/sindresorhus/capture-website#faq

```
import { defineConfig } from 'poveste'
import { HstScreenshot } from '@poveste/plugin-screenshot'

export default defineConfig({
  plugins: [
    HstScreenshot({
      launchOptionsArgs: ['--no-sandbox', '--disable-setuid-sandbox'],
    }),
  ],
})
```
