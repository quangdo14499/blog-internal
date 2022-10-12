import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { UserLoginProvider } from '../providers/UserLoginProvider'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserLoginProvider>
      <Component {...pageProps} />
    </UserLoginProvider>
  )
}

export default MyApp
