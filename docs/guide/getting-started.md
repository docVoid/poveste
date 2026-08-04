# Getting started with Poveste

## Overview

> **poveste** is the Romanian word for "story", pronounced `/poˈveste/` (_po-VES-teh_). Say it however you like — "po-VEST" works too. Coming from histoire? See the [migration guide](./migration-from-histoire.md).

Poveste is a tool to generate stories applications (or "books").

[Learn more about Poveste here &raquo;](./index.md)

<div class="demo-links-box border-green-200 dark:border-green-900">
  <img src="/vue.svg" class="w-10 h-10 mt-3" />
  <DemoLinks framework="vue3" />
</div>

<div class="demo-links-box border-orange-200 dark:border-orange-900">
  <img src="/svelte.svg" class="w-10 h-10 mt-3" />
  <DemoLinks framework="svelte3" />
</div>

## Supported frameworks

[Vite](https://vitejs.dev) currently supported versions:
- `2.9+`
- `3.0+`

---

| Framework | Version | Support* | Auto-CodeGen* | Auto-Docs* |
| --------- | -------- | ------- | ------------ | ---- |
| [Vue →](./vue3/getting-started.md) | `3.2+` | ✅ | ✅ | 🏗️ |
| [Svelte →](./svelte3/getting-started.md) | `4+` | ✅ | - | 🏗️ |
| Solid | - | - | - | - |
| Angular | - | - | - | - |
| React | - | - ([Alternative](https://www.ladle.dev)) | - | - |

**<u>Support</u> means the following is available*:
- Collect and render stories
- Render controls pane content with state sync
- Builtin controls wrappers
- Static source

*<u>*Auto-CodeGen*</u>: Generates copiable source code dynamically from the current story state. Generally requires a Virtual DOM.

*<u>*Auto-Docs*</u>: Generates documentation and controls automatically by analyzing the imported components.

## Community

If you have questions or need help, reach out to the community on [GitHub Discussions](https://github.com/poveste-dev/poveste/discussions).
