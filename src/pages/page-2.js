import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MapAndTrips from "../components/MapAndTrips"
import "../components/styles/leafletStyles.css"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <MapAndTrips />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
