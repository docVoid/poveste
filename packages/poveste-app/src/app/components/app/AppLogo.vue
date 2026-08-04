<script lang="ts" setup>
import { computed } from 'vue'
import PovesteLogoDark from '../../assets/histoire-text-dark.svg'
import PovesteLogoLight from '../../assets/histoire-text.svg'

import { customLogos, povesteConfig } from '../../util/config'
import { isDark } from '../../util/dark'

const logoUrl = computed(() => {
  if (isDark.value) {
    return povesteConfig.theme.logo?.dark ? customLogos.dark : PovesteLogoDark
  }
  return povesteConfig.theme.logo?.light ? customLogos.light : PovesteLogoLight
})

const altText = computed(() => `${povesteConfig.theme.title} logo`)
</script>

<template>
  <img
    class="histoire-app-logo"
    :src="logoUrl"
    :alt="altText"
  >
</template>
