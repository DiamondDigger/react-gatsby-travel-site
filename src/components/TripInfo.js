import React from "react"
import styled from "styled-components"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

const TripInfo = () => {
  const data = useStaticQuery(graphql`
    query Info {
      allTripsInfoJson {
        nodes {
          id
          name
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  console.log("data:", data)

  return (
    <Container>
      {data.allTripsInfoJson.nodes.map((node, key) => (
        <Image key={key} fluid={node.image.childImageSharp.fluid} />
      ))}
    </Container>
  )
}

export default TripInfo

export const Container = styled.div`
  width: 80%;
  height: 80vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
  /* background: green; */
  border: 2px greenyellow;
`
export const LeftColumn = styled.div`
  background: red;
`
export const RigthColumn = styled.div`
  background: grey;
`
export const ImageWrapper = styled.div`
  object-fit: cover;
`

export const TextWrapper = styled.div`
  background: pink;
`
export const Image = styled(Img)`
  height: 70%;
  width: 70%;
  margin: auto;
  border-radius: 40px;
  cursor: pointer;
  transition: 1s ease-in-out;

  :hover {
    transform: scale(1.5, 1.5);
    transition: 0.5s ease-in-out;
    z-index: 1;
    position: relative;
    top: 50px;
  }
`
