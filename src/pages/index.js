import React, { useEffect } from "react"
import Email from "../components/Email"
import Hero from "../components/Hero"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => {
  const sideAnimation = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log(entry.target)
      console.log(entry.isIntersecting)
      if (entry.isIntersecting) {
        entry.target.style.animation =
          "3s easy-in .5s infinite alternate sideSlide"
      } else {
        entry.target.style.animation = "none"
      }
    })
  })
  const topAndBottomAnimation = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log(entry.target)
      console.log(entry.isIntersecting)
      if (entry.isIntersecting) {
        entry.target.style.animation =
          "3s easy-in .5s infinite alternate topAndBottomSlide"
      } else {
        entry.target.style.animation = "none"
      }
    })
  })
  const combineAnimation = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log(entry.target)
      console.log(entry.isIntersecting)
      if (entry.isIntersecting) {
        entry.target.style.animation =
          "3s easy-in .5s infinite alternate combineSlide"
        entry.target.style.animationName = "combineSlide "
      } else {
        entry.target.style.animation = "none"
      }
    })
  })

  const animateSections = (arg1, arg2, arg3) => {
    sideAnimation.observe(arg1)
    topAndBottomAnimation.observe(arg2)
    combineAnimation.observe(arg3)

    console.log("animateSection invoked")
  }

  useEffect(() => {
    const heroSection = document.querySelector("#hero")
    const tripsSection = document.querySelector("#trips")
    const statsSection = document.querySelector("#stats")
    // console.log("sections:", heroSection, tripsSection, statsSection)

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
