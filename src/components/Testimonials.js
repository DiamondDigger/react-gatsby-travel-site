import React from "react"
import styled from "styled-components"
import { IoMdCheckmarkCircleOutline } from "react-icons/io"
import { FaRegLightbulb } from "react-icons/fa"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Testimonials = () => {
  const data = useStaticQuery(graphql`
    query TestimonialsQuery {
      allFile(
        filter: {
          ext: { regex: "/(jpg)|(png)|(jpeg)/" }
          name: { in: ["testimonial-2", "testimonial-3"] }
        }
        sort: { fields: name, order: DESC }
      ) {
        edges {
          node {
            id
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

  return (
    <TestimonialsContainer id="about">
      <TopLine>Testimonials</TopLine>
      <Description>What People are saying</Description>
      <ContentWrapper>
        <ColumnOne>
          <Testimonial>
            <IoMdCheckmarkCircleOutline
              css={`
                color: lightgreen;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Dan Mackinski</h3>
            <p>
              The greatest experience of my life! It was so much fun exploring
              the mountains and they made it super easy to book my trip and
              accommodation.
            </p>
          </Testimonial>
          <Testimonial>
            <FaRegLightbulb
              css={`
                color: pink;
                font-size: 2rem;
                margin-bottom: 1rem;
              `}
            />
            <h3>Sarah Jay</h3>
            <p>
              It was so easy to set up my trip! They answered all my questions
              right away and gave me the best price out of all the companies
              researched.
            </p>
          </Testimonial>
        </ColumnOne>
        <ColumnTwo>
          {data.allFile.edges.map((image, key) => (
            <Images key={key} fluid={image.node.childImageSharp.fluid} />
          ))}
        </ColumnTwo>
      </ContentWrapper>
    </TestimonialsContainer>
  )
}

export default Testimonials

const TestimonialsContainer = styled.div`
  width: 100%;
  height: 100%;
  background: #fcfcfc;
  color: #000;
  padding: 5rem calc((100vw - 1300px) / 2);
`
const TopLine = styled.p`
  color: #077bf1;
  font-size: 1rem;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
`
const Description = styled.p`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  padding-left: 2rem;
  margin-bottom: 5rem;
  font-weight: bold;

  /* animation-name: slidein;
  animation-duration: 3s; */

  @keyframes slidein {
    from {
      margin-left: 300%;
      width: 300%;
    }

    to {
      margin-left: 0%;
      width: 100%;
    }
  }
`
const ContentWrapper = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  padding: 0 2rem;
  margin-bottom: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const ColumnOne = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
`
const Testimonial = styled.div`
  padding-top: 1rem;
  padding-right: 2rem;

  h3 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-style: italic;
    font-weight: bold;
  }

  p {
    color: #3b3b3b;
  }
`

const ColumnTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
  margin-top: 2rem;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const Images = styled(Img)`
  height: 100%;
  border-radius: 10px;
`
