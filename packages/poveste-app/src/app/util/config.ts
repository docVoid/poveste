import type { PovesteConfig } from '@poveste/shared'
import { config as configRaw, logos as logosRaw } from 'virtual:$histoire-config'

export const histoireConfig: PovesteConfig = configRaw
export const customLogos: PovesteConfig['theme']['logo'] = logosRaw
