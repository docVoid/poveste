import { Icon } from '@iconify/vue'
import FloatingVue from 'floating-vue'
import DefaultTheme from 'vitepress/theme'
import DemoLinks from './DemoLinks.vue'
import 'floating-vue/dist/style.css'
import './style/vars.pcss'
import './style/index.pcss'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(FloatingVue, {
      themes: {
        dropdown: {
          computeTransformOrigin: true,
        },
      },
    })
    app.component('Icon', Icon)
    app.component('DemoLinks', DemoLinks)
  },
}
