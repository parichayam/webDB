import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
    import '@fortawesome/fontawesome-svg-core/styles.css'
    config.autoAddCss = false

import { useRouter } from 'next/router'
import { IntlProvider } from 'react-intl'
import en from "../public/translation/en.json"
import th from "../public/translation/th.json"

const messages = {
  en,th,
};

export default function App({ Component, pageProps }) {
  const { locale } = useRouter()

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
  <Component {...pageProps} />
  </IntlProvider>
  )
}
