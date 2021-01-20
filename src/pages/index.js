import React from "react"
import Email from "../components/Email"
import Hero from "../components/Hero"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => {
  const node_sections = document.querySelectorAll("#hero")
  const sections = Array.prototype.slice.call(node_sections)

  console.log("node_sections", node_sections, sections.length)
  console.log("sections", sections, sections.length)
  console.log("document:", document)

  const callback = entries => {
    entries.forEach(entry => {
      console.log("******")
      console.log(entry.target)
      console.log(entry.target.nextSibling)
      console.log("******")
      // sections.push(entry.target.nextSibling)
      entry.target.nextSibling.id !== ""
        ? sections.push(entry.target.nextSibling)
        : console.log("no next id nodes")
    })
  }
  const option = {}
  const observer = new IntersectionObserver(callback, option)

  sections.length !== 0
    ? observer.observe(sections[0])
    : console.log("section is not defined")

  return (
    <Layout>
      <SEO title="Home" />
      <Hero className="hero" />
      <Trips heading={"Our Favorite Destinations"} />
      <Testimonials className="testimonials" />
      <Stats />
      <Email />
    </Layout>
  )
}

export default IndexPage
