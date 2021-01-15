import React from "react"

import Footer from './footer'
import Navbar from './navbar'

import 'pure-react-carousel/dist/react-carousel.es.css';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <main className="mt-16">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
