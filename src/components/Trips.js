import React from 'react'
import styled from 'styled-components'
import {useStaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'

const Trips = () => {


    const data = useStaticQuery(graphql`
    query TripsQuery {
    
        image: file(relativePath: {eq: "travel2.jpg"}) {
          id
          childImageSharp {
            fixed(
                width: 400
            ) {
              ...GatsbyImageSharpFixed
            }
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
        `)
        
        console.table(data.image)
        console.table(data.images)
    
    return (
        <ProductsContainer>
            <ProductsHeading>Heading</ProductsHeading>
            <ProductsWrapper>Wrapper
                <Img 
                    // fixed={data.image.childImageSharp.fixed}
                    fluid={data.image.childImageSharp.fluid}
                />
                {/* {data.images.node.map((image, index) => {
                    return (<div key={index}>
                        <Img 
                            fluid={image.childImageSharp.fluid}
                        />
                    </div>)
                })} */}
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

