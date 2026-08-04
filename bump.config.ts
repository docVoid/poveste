import { defineConfig } from 'bumpp'

// Recursive so every workspace package.json is bumped in lockstep — no need to
// maintain an explicit file list when packages are added or removed. Private
// packages (examples/*, docs, controls-stories) are swept too; that's harmless
// since `pnpm -r publish` skips them. The `v%s` tag matches the trigger in
// .github/workflows/release.yml (`tags: - 'v*'`).
export default defineConfig({
  recursive: true,
  commit: 'chore: release v%s',
  tag: 'v%s',
  push: true,
})
