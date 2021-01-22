import React, { useEffect } from "react"
import Email from "../components/Email"
import Hero from "../components/Hero"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

import { animateSections } from "../data/scrollObserver"

const IndexPage = () => {
  useEffect(() => {
    const heroSection = document.querySelector("#hero")
    const tripsSection = document.querySelector("#trips")
    const statsSection = document.querySelector("#stats")

    animateSections(heroSection, tripsSection, statsSection)
    console.log("animation after useEffect()")
  }, [])

  return (
    <Layout>
      <SEO title="Home" />
      <Hero />
      <Trips heading={"Our Favorite Destinations"} />
      <Testimonials />
      <Stats />
      <Email />
    </Layout>
  )
}

export default IndexPage
