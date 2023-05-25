import Login from '@/components/Login'
import Sidebar from '@/components/Sidebar'
import Loading from '@/components/Loading'
import { auth } from '@/firebase';
import '@/styles/globals.css'
import { useAuthState } from "react-firebase-hooks/auth";

export default function App({ Component, pageProps }) {

  const [user, loading] = useAuthState(auth);

  if(!user) return <Login />
  if(loading) return <Loading />

  return (
    <div className='flex'>
    <Sidebar />
      <Component {...pageProps} />
    </div>
  )
}
