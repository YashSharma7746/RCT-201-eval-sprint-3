import Navbar from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    <Navbar/>
    <hr/>
    <Component {...pageProps} /></div>
}

export default MyApp
