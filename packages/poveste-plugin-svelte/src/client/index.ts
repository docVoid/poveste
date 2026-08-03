export { default as MountStory } from './mount'
export { default as RenderStory } from './render'

declare module '@poveste/shared' {
  interface StoryMeta {
    hasVariantChildComponents?: boolean
  }
}

export function generateSourceCode() {
  // noop
}
