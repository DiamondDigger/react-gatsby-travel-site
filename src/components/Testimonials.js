import React from 'react'
import styled from 'styled-components'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'

const Testimonials = () => {
    return (
        <TestimonialsContainer>
            <TopLine>
                Testimonials
            </TopLine>
            <Description>
                What People are saying
            </Description>
            <ContentWrapper>
                <ColumnOne>
                    <Testimonial>
                        <IoMdCheckmarkCircleOutline />
                        <h3>Dan Mackinski</h3>
                        <p>'The greatest experience of my life!
                            It was so much fun exploring the mountains
                            and they made it super easy to book
                            my trip and accommodation.
                        '</p>
                    </Testimonial>
                    <Testimonial>
                        <FaRegLightbulb />
                        <h3>Sarah Jay</h3>
                        <p>'It was so easy to set up my trip! They 
                            answered all my questions right away
                            and gave me the best price out of all
                            the companies researched.
                        '</p>
                    </Testimonial>
                </ColumnOne>
                <ColumnTwo>
                    images
                </ColumnTwo>
            </ContentWrapper>
        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    width: 100%;
    height: 100%;
    background: gray;
    color: white;
    padding: 5rem calc((100vw - 1300) / 2)

`
const TopLine = styled.p`
    color: lightskyblue;
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
`
const ContentWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`
const ColumnOne = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

`
const Testimonial = styled.div`
    padding-top: 1rem;
    padding-right: 2rem;

    h3{
        margin-bottom: 1rem;
        font-size: 1rem;
        font-style: italic;
    }

    p{
        color: #3b3b3b;
    }
`

const ColumnTwo = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    margin-top: 2rem;

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
    }
`
