import Image from 'next/image'
import AnimalInterface from './components/AnimalInterface'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AnimalInterface/>
    </main>
  )
}
