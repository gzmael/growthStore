import 'antd/dist/antd.css'
import '../styles/vars.css'
import '../styles/global.css'

import { AppProps } from 'next/app'

import { AppProvider } from '@hooks'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  )
}
