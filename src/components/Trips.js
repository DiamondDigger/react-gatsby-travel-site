import React from "react"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Button } from "./Button"
import { ImLocation } from "react-icons/im"

const Trips = ({ heading }) => {
  const data = useStaticQuery(graphql`
    query TripsQuery {
      images: allTripsJson {
        edges {
          node {
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
                fixed {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            name
            id
            button
            alt
          }
        }
      }
    }
  `)

  function getImages(data) {
    return data.images.edges.map((item, index) => {
      return (
        <ProductCard key={index}>
          <ProductImage
            fluid={item.node.image.childImageSharp.fluid}
            alt={item.node.alt}
          />
          <ProductInfo>
            <TextWrapper>
              <ImLocation />
              <ProductTitle>{item.node.name}</ProductTitle>
            </TextWrapper>
            <Button
              to="/trips"
              primary="true"
              css={"position: absolute; top: 420px; font-size: 14px"}
            >
              {item.node.button}
            </Button>
          </ProductInfo>
        </ProductCard>
      )
    })
  }

  return (
    <ProductsContainer id="trips" clasName="section">
      <ProductsHeading>{heading}</ProductsHeading>
      <ProductsWrapper>{getImages(data)}</ProductsWrapper>
    </ProductsContainer>
  )
}

export default Trips

const ProductsContainer = styled.div`
  min-height: 100vh;
  color: #fff;
  padding: 5rem calc((100vw - 1300px) / 2);

  /* animation-name: slideFromRight; */
  /* animation-duration: 3s;
  animation-direction: alternate;
  animation-iteration-count: infinite; */

  @keyframes slideFromRight {
    from {
      margin-left: 200%;
      width: 200%;
    }
    to {
      margin-left: 0;
      width: 100%;
    }
  }
`

const ProductsHeading = styled.div`
  font-size: clamp(1.2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 5rem;
  color: black;
`

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  justify-items: center;
  padding: 0 2rem;

  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.div`
  width: 100%;
  height: 500px;
  border-radius: 10px;
  position: relative;
  transition: 0.2s ease;
`

const ProductImage = styled(Img)`
  max-width: 100%;
  height: 100%;
  position: relative;
  filter: brightness(75%);
  border-radius: 10px;
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
`

const ProductInfo = styled.div`
  display: flex;
  min-width: 220px;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 2rem;

  @media screen and (max-width: 280px) {
    padding: 0 1rem;
  }
`
const TextWrapper = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  top: 375px;
`
const ProductTitle = styled.div`
  font-size: 1rem;
  font-weight: 400;
  margin-left: 0.5rem;
`
