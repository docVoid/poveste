# Migrating from Histoire

**poveste** is a community-maintained, **drop-in successor** to
[histoire](https://github.com/histoire-dev/histoire). It keeps the same
`<Story>` / `<Variant>` API, the same `.story.*` file convention, and the same
configuration format — so migrating is mostly a matter of swapping dependencies.

::: tip TL;DR
Replace `histoire` → `poveste` and `@histoire/*` → `@poveste/*` in your
`package.json`, reinstall, and you're done. The API, story files, config, CLI,
CSS variables, and render classes all keep working. The **one** thing that moves
is the build output directory (`.histoire/dist` → `.poveste/dist`) — update it
only if you deploy or ignore that path (see step 5).
:::

## 1. Swap the dependencies

Rename the packages in your `package.json`:

| histoire | poveste |
| --- | --- |
| `histoire` | `poveste` |
| `@histoire/plugin-vue` | `@poveste/plugin-vue` |
| `@histoire/plugin-svelte` | `@poveste/plugin-svelte` |
| `@histoire/plugin-nuxt` | `@poveste/plugin-nuxt` |
| `@histoire/plugin-percy` | `@poveste/plugin-percy` |
| `@histoire/plugin-screenshot` | `@poveste/plugin-screenshot` |

Then reinstall:

```bash
pnpm install
```

## 2. Update your config file

Your existing `histoire.config.ts` **keeps working as-is** — poveste resolves it
as a fallback. To fully adopt the new name, rename it (optional):

```bash
mv histoire.config.ts poveste.config.ts
```

Update the imports inside it:

```ts
// poveste.config.ts
import { HstVue } from '@poveste/plugin-vue' // was: '@histoire/plugin-vue'
import { defineConfig } from 'poveste' // was: 'histoire'

export default defineConfig({
  plugins: [HstVue()],
})
```

`defineConfig` is unchanged. If you type your config explicitly, the
`HistoireConfig` type is still exported as a deprecated alias of `PovesteConfig`.

## 3. Update npm scripts (optional)

The `histoire` CLI command **still works** (it's kept as an alias). To switch to
the new name:

```jsonc
{
  "scripts": {
    "story:dev": "poveste dev", // was: "histoire dev"
    "story:build": "poveste build", // was: "histoire build"
    "story:preview": "poveste preview"
  }
}
```

## 4. Vite config key (if you used it)

If you configured poveste through your `vite.config.ts` instead of a config file,
the key is now `poveste` — the old `histoire` key still works:

```ts
// vite.config.ts
export default defineConfig({
  poveste: { // was: histoire
    // ...
  },
})
```

## 5. Build output directory (action needed if you deploy it)

The default output directory was renamed from `.histoire/dist` to `.poveste/dist`
(and the story-data manifest from `histoire.json` to `poveste.json`, screenshots
from `.histoire/screenshots` to `.poveste/screenshots`). This is the only default
that changed. If you **explicitly set `outDir`** in your config, you're unaffected.

Otherwise, update anywhere that references the old path:

```diff
# .gitignore
- .histoire/dist/
+ .poveste/dist/
```

```diff
# deploy config (Netlify, Vercel, CI artifact path, Lost Pixel, …)
- publish = ".histoire/dist"
+ publish = ".poveste/dist"
```

Prefer zero changes? Pin the old path explicitly in your config:

```ts
export default defineConfig({
  outDir: '.histoire/dist',
})
```

## What you do NOT need to change

- **Story files** — the `.story.vue` / `.story.svelte` convention is unchanged.
- **The `<Story>` and `<Variant>` API** — identical, including all props and slots.
- **Plugin options** — same shapes.
- **Controls** (`Hst*` components) — unchanged.

## Compatibility summary

| Surface | Status |
| --- | --- |
| `histoire.config.*` filename | ✅ still resolved (fallback) |
| `histoire` CLI command | ✅ still works (alias) |
| `histoire` key in Vite config | ✅ still works (deprecated) |
| `HistoireConfig` type | ✅ still exported (deprecated alias) |
| `<Story>` / `<Variant>` API | ✅ identical |
| `--histoire-contrast-color` CSS var | ✅ still set (alongside `--poveste-contrast-color`) |
| `.histoire-generic-render-story` / `.histoire-wrapper` render classes | ✅ still emitted (for visual-regression selectors) |
| `.histoire/dist` output dir default | ⚠️ renamed to `.poveste/dist` (see step 5) |

These compatibility shims are kept to make migration painless. They may be
removed in a future major version, so adopting the `poveste.*` names is recommended.

## Something broke?

If you hit a migration issue that isn't covered here, please
[open an issue](https://github.com/poveste-dev/poveste/issues) — smoothing the
path from histoire is a priority.
