declare module 'virtual:$poveste-commands' {
  import type { ClientCommand } from '@poveste/shared'

  export const registeredCommands: ClientCommand[]
}

declare module 'virtual:*';
