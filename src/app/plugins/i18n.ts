import { createI18n } from 'vue-i18n'
// import en from '../../locales/en'
// import th from '../../locales/th'

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages: {
    en: { hello: 'Hello' },
    th: { hello: 'สวัสดี' },
  },
})

export default i18n