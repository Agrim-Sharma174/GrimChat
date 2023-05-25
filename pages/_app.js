import Login from '@/components/Login'
import Sidebar from '@/components/Sidebar'
import Loading from '@/components/Loading'
import '@/styles/globals.css'
import { useAuthState } from "react-firebase-hooks/auth";
import Image from 'next/image';
import { auth } from '@/firebase';

export default function App({ Component, pageProps }) {

  const [user, loading] = useAuthState(auth);
  
  if(loading) return <Loading />
  if(!user) return <Login />

  return (
    
    <div className='flex'>
    <Sidebar />
      <Component {...pageProps} />
    </div>
  )
}
