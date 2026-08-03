# Getting started with Poveste

## Overview

> **poveste** is the Romanian word for "story", pronounced `/poˈveste/` (_po-VES-teh_). Coming from histoire? See the [migration guide](/guide/migration-from-histoire).

Poveste is a tool to generate stories applications (or "books").

[Learn more about Poveste here &raquo;](../index.md)

<DemoLinks framework="svelte3" />

## Sponsors

Poveste is an Open-Source project supported by our sponsors - thank you!

<div class="flex justify-center mt-6 mb-12 gap-2">
  <SponsorButton/>
  <a
    href="./index.html#sponsors"
    class="px-4 py-2 btn inline-flex items-center gap-2 !font-normal"
  >
    See our sponsors &raquo;
  </a>
</div>

## Installation

Install the `histoire` and `@poveste/plugin-svelte` packages into your project:

```shell
pnpm i -D histoire @poveste/plugin-svelte
# OR
npm i -D histoire @poveste/plugin-svelte
# OR
yarn add -D histoire @poveste/plugin-svelte
```

Create an `histoire.config.js` or `histoire.config.ts` file in your project root to enable the Svelte plugin:

```ts
import { HstSvelte } from '@poveste/plugin-svelte'
import { defineConfig } from 'poveste'

export default defineConfig({
  plugins: [
    HstSvelte(),
  ],
})
```

## Command Line Interface

Poveste provides the following commands:
- `histoire dev`: starts a development server with hot-reload
- `histoire build`: builds the app for production
- `histoire preview`: starts an HTTP server that serves the built app

You can add these to your `package.json` like this:

```json
{
  "scripts": {
    "story:dev": "histoire dev",
    "story:build": "histoire build",
    "story:preview": "histoire preview"
  }
}
```

And then run them with `npm run story:dev` or `npm run story:build`.

You can specify additional CLI options like `--port`. For a full list of CLI options, run `npx histoire --help` in your project.

## Configuration

Learn more about configuring Poveste [here](../config.md).

## Community

If you have questions or need help, reach out to the community at [Discord](https://discord.gg/KpCnT72rJk) and [GitHub Discussions](https://github.com/poveste-dev/poveste/discussions).
