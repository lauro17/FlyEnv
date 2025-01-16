import ENBase from './en/base'
import ZHBase from './zh/base'
import PTBRBase from './pt_br/base'
import FRBase from './fr_fr/base'
import ITBase from './it_it/base'

import ENPHP from './en/php'
import ZHPHP from './zh/php'
import PTPHP from './pt_br/php'
import FRPHP from './fr_fr/php'
import ITPHP from './it_it/php'

import ENTray from './en/tray'
import ZHTray from './zh/tray'
import PTTray from './pt_br/tray'
import FRTray from './fr_fr/tray'
import ITTray from './it_it/tray'

import ENUtil from './en/util'
import ZHUtil from './zh/util'
import PTUtil from './pt_br/util'
import FRUtil from './fr_fr/util'
import ITUtil from './it_it/util'

import ENHost from './en/host'
import ZHHost from './zh/host'
import PTHost from './pt_br/host'
import FRHost from './fr_fr/host'
import ITHost from './it_it/host'

import ENAI from './en/ai'
import ZHAI from './zh/ai'
import PTAI from './pt_br/ai'
import FRAI from './fr_fr/ai'
import ITAI from './it_it/ai'

import ENTools from './en/tools'
import ZHTools from './zh/tools'
import PTTools from './pt_br/tools'
import FRTools from './fr_fr/tools'
import ITTools from './it_it/tools'

import { createI18n } from 'vue-i18n'
import type { I18n } from 'vue-i18n'
import { merge } from 'lodash'

const basename = (dir: string) => {
  return dir.split('/').pop()!
}
const dirname = (dir: string) => {
  const arr = dir.split('/')
  arr.pop()
  return arr.join('/')
}

const modules: any = import.meta.glob('@/components/*/lang/*/*', { eager: true })
const modulesTool: any = import.meta.glob('@/components/Tools/*/lang/*/*', { eager: true })
console.log('lang modules: ', modules, modulesTool)
const dict: any = {}
for (const k in { ...modules, ...modulesTool }) {
  const name = basename(k).split('.').shift()!
  const lang = basename(dirname(k))
  if (!dict[lang]) {
    dict[lang] = {}
  }
  dict[lang][name] = Object.assign(
    {},
    dict[lang][name],
    modules?.[k]?.default,
    modulesTool?.[k]?.default
  )
}

export const lang = merge(
  {
    en: {
      base: ENBase,
      php: ENPHP,
      tray: ENTray,
      util: ENUtil,
      host: ENHost,
      ai: ENAI,
      tools: ENTools
    },
    zh: {
      base: ZHBase,
      php: ZHPHP,
      tray: ZHTray,
      util: ZHUtil,
      host: ZHHost,
      ai: ZHAI,
      tools: ZHTools
    },
    pt_br: {
      base: PTBRBase,
      php: PTPHP,
      tray: PTTray,
      util: PTUtil,
      host: PTHost,
      ai: PTAI,
      tools: PTTools
    },
    fr_fr: {
      base: FRBase,
      php: FRPHP,
      tray: FRTray,
      util: FRUtil,
      host: FRHost,
      ai: FRAI,
      tools: FRTools
    },
    it_it: {
      base: ITBase,
      php: ITPHP,
      tray: ITTray,
      util: ITUtil,
      host: ITHost,
      ai: ITAI,
      tools: ITTools
    }
  },
  dict
)

console.log('lang: ', lang)

let i18n: I18n

export const AppI18n = (l?: string): I18n => {
  if (!i18n) {
    i18n = createI18n({
      legacy: true,
      locale: l || 'en',
      fallbackLocale: 'en',
      messages: lang
    })
  }
  if (l) {
    i18n.global.locale = l
  }
  return i18n
}

export const I18nT = (txt: string, param?: any) => {
  // @ts-ignore
  return AppI18n().global.t(txt, param)
}
