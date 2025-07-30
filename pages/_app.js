import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../styles/theme.css'
import '../styles/navbar.css'
export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <main style={{ padding: '1rem' }}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

