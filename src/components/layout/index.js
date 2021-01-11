import React from "react"

import Footer from './footer'
import Navbar from './navbar'

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
