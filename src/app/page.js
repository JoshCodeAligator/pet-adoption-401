import Image from 'next/image'
import HomeView from './components/Home/HomeView'
import Navbar from './components/Navbar'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-cover bg-center" style={{ backgroundImage: `url('/images/background.jpg')` }} >
      <Navbar/>
      <HomeView/>
    </main>
  )
}
