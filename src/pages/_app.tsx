import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { LoginProvider } from '../providers/LoginProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoginProvider>
      <Component {...pageProps} />
    </LoginProvider>
  )
}

export default MyApp
