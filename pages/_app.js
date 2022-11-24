import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div className='bg-gray-300 h-screen pb-5'>
    <Component {...pageProps} />
  </div>          
}

export default MyApp
