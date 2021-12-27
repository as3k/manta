import '../styles/globals.css'
import Store from '../state'

function MyApp({ Component, pageProps }) {
  return (
    <Store>
      <Component {...pageProps} />
    </Store>
  )
}

export default MyApp
