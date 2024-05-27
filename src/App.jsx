import { useState } from 'react'
import StarsCanvas from './StarsBackground'
import Banner from './Banner'
import Footer from './Footer'
import Navbar from './Navbar'
import BannerOrKatalog from './BannerOrKatalog'


function App() {

  return (
    <div>
      <BannerOrKatalog />
      <Navbar />
      <Footer />


    </div>
  )
}

export default App
