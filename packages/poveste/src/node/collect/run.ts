import type { ServerRunPayload } from '@poveste/shared'
// @ts-expect-error virtual module
import { collectSupportPlugins } from 'virtual:$poveste-support-plugins-collect'

export async function run(payload: ServerRunPayload) {
  const { run } = await collectSupportPlugins[payload.file.supportPluginId]()
  const result = await run(payload)
  return result
}
