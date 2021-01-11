import React from "react"

import Hero from "../components/hero"
import Layout from '../components/layout'
import Selection from "../components/selection"
import Categories from "../components/categories"

const Index = () => {
  return (
    <div>
      <Layout>
        <Hero />
        <Selection />
        <Categories />
      </Layout>
    </div>
  )
}

export default Index
