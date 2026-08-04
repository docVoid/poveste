import type { PreviewSettings } from '../types'
import { reactive } from 'vue'
import { povesteConfig } from './config'

export const receivedSettings = reactive<PreviewSettings>({} as PreviewSettings)

export function applyPreviewSettings(settings: PreviewSettings) {
  Object.assign(receivedSettings, settings)

  // Text direction
  document.documentElement.setAttribute('dir', settings.textDirection)

  // Contrast color
  const contrastColor = getContrastColor(settings)
  document.documentElement.style.setProperty('--poveste-contrast-color', contrastColor)
  // Deprecated alias — keep so stories that reference `var(--histoire-contrast-color)` still work.
  document.documentElement.style.setProperty('--histoire-contrast-color', contrastColor)
  if (povesteConfig.autoApplyContrastColor) {
    document.documentElement.style.color = contrastColor
  }
}

export function getContrastColor(setting: PreviewSettings) {
  return povesteConfig.backgroundPresets.find(preset => preset.color === setting.backgroundColor)?.contrastColor ?? 'unset'
}
