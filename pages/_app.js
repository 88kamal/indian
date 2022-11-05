import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import UserState from '../context/user/userState'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (

    <UserState>
      <Layout>
        <Component {...pageProps} />

      </Layout>
    </UserState>

  )
}

export default MyApp
