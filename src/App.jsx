import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Showcase from './components/Showcase'


const App = () => {
  return (
    <div className='h-auto text-gray-800 selection:bg-gray-100'>
      <div
        class="fixed -z-10 inset-0 h-full w-full bg-white dark:bg-gray-900 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      ></div>
      <Header/>
      <Hero/>
      <Showcase/>
    </div>
  )
}

export default App
