import React from 'react'
import Navbar from './component/Navbar'
import Carousal from './component/Carousal'
import Section2 from './component/Section2/Section2'
import Section3 from './component/Section3/Section3'
import Client from './component/Clients/Client'
import Header from './component/Header/Header'
import Footer from './component/Footer'
import CallToAction from './component/CallToAction'

export default function App() {
  return (
    <div>
      <Navbar />
      <Carousal />
      <Header />
      <Section2 />
      <CallToAction />
      <Section3 />
      <Client />
      <Footer />
    </div>
  )
}

