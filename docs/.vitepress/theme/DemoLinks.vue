<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  framework: string
}>()

// Demo + StackBlitz links are intentionally empty for now: the
// *.examples.poveste.dev demo subdomains aren't deployed yet, and the old
// histoire-*-starter StackBlitz projects belong to histoire. Re-enable once
// the poveste demos + poveste-*-starter projects exist (tracked in #14).
// The `v-if` guards below hide the buttons while these are empty.
const allLinks = {
  vue3: {
    demo: '',
    stackblitz: '',
  },
  nuxt3: {
    demo: '',
    stackblitz: '',
  },
  svelte3: {
    demo: '',
    stackblitz: '',
  },
}

const links = computed(() => allLinks[props.framework])
</script>

<template>
  <div class="demo-links space-y-2">
    <a
      v-if="links.demo"
      :href="links.demo"
      target="_blank"
      class="btn flex items-center gap-4 p-4 hover:no-underline"
    >
      <img
        src="/logo.svg"
        alt="Logo"
        class="w-8 h-8"
      >
      Online demo
    </a>

    <a
      v-if="links.stackblitz"
      :href="links.stackblitz"
      target="_blank"
      class="btn-blue flex items-center gap-4 p-4 hover:no-underline"
    >
      <img
        src="/stackblitz.png"
        alt="Logo"
        class="w-8 h-8"
      >
      Try it in a live editor
    </a>
  </div>
</template>
