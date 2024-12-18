import Hero from './components/sections/hero'
import Features from './components/sections/features'
import Products from './components/sections/products'
import About from './components/sections/about'
import Contact from './components/sections/contact'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between w-full'>
      <Hero />
      <div className='container-custom w-full'>
        <Features />
        <Products />
        <About />
        <Contact />
      </div>
    </main>
  )
}
