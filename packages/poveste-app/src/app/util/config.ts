import type { PovesteConfig } from '@poveste/shared'
import { config as configRaw, logos as logosRaw } from 'virtual:$poveste-config'

export const histoireConfig: PovesteConfig = configRaw
export const customLogos: PovesteConfig['theme']['logo'] = logosRaw
