import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import MapAndTrips from "../components/MapAndTrips"

import "../components/styles/leafletStyles.css"
import { Button } from "../components/Button"
import styled from "styled-components"

const SecondPage = visible => (
  <Layout visible={false} style={{ scroll: "none" }}>
    <SEO title="Page two" />
    <MapAndTrips />
    <Wrapper>
      <Button component as={Link} to="/">
        Back Home
      </Button>
    </Wrapper>
  </Layout>
)

export default SecondPage

export const Wrapper = styled.div`
  height: 50px;
  width: 100%;
  text-align: center;
  align-items: center;
  padding-top: 15px;
`
