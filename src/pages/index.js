import React, { useState, useEffect } from "react"
import Email from "../components/Email"
import Hero from "../components/Hero"

import Layout from "../components/layout"
import MapAndTrips from "../components/MapAndTrips"
import SEO from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

import "../components/styles/leafletStyles.css"
// import "../components/styles/defaultLeaflet.css"

import {
  slideFromRightAnimation,
  topAndBottomAnimation,
  combineAnimation,
  combineAnimationOtherSide,
  hideArrowToHeader,
} from "../data/scrollObserver"

const IndexPage = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onClick = () => {
    setIsOpen(!isOpen)
    console.log("isOpen", isOpen)
  }

  useEffect(() => {
    const heroSection = document.querySelector("#hero")
    const tripsSection = document.querySelector("#trips")
    const statsSection = document.querySelector("#stats")
    const aboutSection = document.querySelector("#about")
    const arrowHeader = document.querySelector("#arrow")

    const heroP = heroSection.querySelector("p")
    const heroH1 = heroSection.querySelector("h1")
    const heroButton = heroSection.querySelector("#button")
    const tripsCards = tripsSection.querySelectorAll("#card")

    // hideArrowToHeader.observe(arrowHeader)
    console.log("arrow + root", arrowHeader)
    slideFromRightAnimation.observe(heroP)
    slideFromRightAnimation.observe(heroH1)
    slideFromRightAnimation.observe(heroButton)
    tripsCards.forEach(card => {
      topAndBottomAnimation.observe(card)
    })
    combineAnimationOtherSide.observe(aboutSection)
    combineAnimation.observe(statsSection)

    console.log("animation after useEffect()")

    return () => {
      // hideArrowToHeader.unobserve(arrowHeader)
      slideFromRightAnimation.unobserve(heroP)
      slideFromRightAnimation.unobserve(heroH1)
      slideFromRightAnimation.unobserve(heroButton)
      tripsCards.forEach(card => {
        topAndBottomAnimation.unobserve(card)
      })
      combineAnimationOtherSide.unobserve(aboutSection)
      combineAnimation.unobserve(statsSection)
    }
  }, [])

  return (
    <>
      <Layout isOpen={isOpen} onClick={onClick} visible={true}>
        <SEO title="Home" />
        <Hero />
        <Trips heading={"Our Favorite Destinations"} />
        <Testimonials />
        <Stats />
        <Email />
      </Layout>
    </>
  )
}

export default IndexPage
