import ENFork from './en/fork'
import ZHFork from './zh/fork'
import { createI18n } from 'vue-i18n'
import type { I18n } from 'vue-i18n'

import PTBRFork from './pt_br/fork'
import ITITFork from './it_it/fork'
import FRFRFork from './fr_fr/fork'

const lang = {
  en: {
    fork: ENFork
  },
  zh: {
    fork: ZHFork
  },
  pt_br: {
    fork: PTBRFork
  },
  it_it: {
    fork: ITITFork
  },
  fr_fr: {
    fork: FRFRFork
  }
}

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

export const I18nT = (...args: any) => {
  // @ts-ignore
  return i18n.global.t(...args)
}
