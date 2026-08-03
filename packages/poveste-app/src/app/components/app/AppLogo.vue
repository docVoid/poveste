<script lang="ts" setup>
import { computed } from 'vue'
import PovesteLogoDark from '../../assets/histoire-text-dark.svg'
import PovesteLogoLight from '../../assets/histoire-text.svg'

import { customLogos, histoireConfig } from '../../util/config'
import { isDark } from '../../util/dark'

const logoUrl = computed(() => {
  if (isDark.value) {
    return histoireConfig.theme.logo?.dark ? customLogos.dark : PovesteLogoDark
  }
  return histoireConfig.theme.logo?.light ? customLogos.light : PovesteLogoLight
})

const altText = computed(() => `${histoireConfig.theme.title} logo`)
</script>

<template>
  <img
    class="histoire-app-logo"
    :src="logoUrl"
    :alt="altText"
  >
</template>
