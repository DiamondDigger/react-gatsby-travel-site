import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TripInfo from "../components/TripInfo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    {/* <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p> */}
    <TripInfo />
  </Layout>
)

export default NotFoundPage
