import Login from '@/components/Login'
import Sidebar from '@/components/Sidebar'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  if(true) return <Login />
  return (
    <div className='flex'>
    <Sidebar />
      <Component {...pageProps} />
    </div>
  )
}
