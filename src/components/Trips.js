import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Trips = () => {

    const data = useStaticQuery(graphql`
        query TripsQuery {
            allTripsJson {
                edges {
                  node {
                    img
                    button
                    alt
                    name
                  }
                }
              }
            allImageSharp {
                edges {
                  node {
                    fluid {
                      base64
                      tracedSVG
                      srcWebp
                      srcSetWebp
                      originalImg
                      originalName
                    }
                  }
                }
              }
            }
    `)

    console.table(data)

    function getImages({data}) {
    const images = []
    data.allTripsJson.edges.map((edge, index) => 
        images.push(
            <div key={index}>
                <Img src={edge.node.img}
                    fluid='fluid' />
            </div>
        )
    )
    return images
}
    // images.map(node => console.table(node))

    return (
        <ProductsContainer>
            <ProductsHeading>Heading</ProductsHeading>
            <ProductsWrapper>Wrapper
                {getImages(data)}
            </ProductsWrapper>
        </ProductsContainer>
    )
}

export default Trips

const ProductsContainer = styled.div`
    min-height: 100vh;
    background: grey;
    color: #fff;
    padding: 5rem calc((100vw - 1300px) / 2);
`

const ProductsHeading = styled.div`
    font-size: clamp(1.2rem, 5vw, 3rem);
    text-align: center;
    margin-bottom: 5rem;
`

const ProductsWrapper = styled.div``
