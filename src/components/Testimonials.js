import React from 'react'
import styled from 'styled-components'
import {IoMdCheckmarkCircleOutline} from 'react-icons/io'
import {FaRegLightbulb} from 'react-icons/fa'

const Testimonials = () => {
    return (
        <testimonialsContainer>
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
        </testimonialsContainer>
    )
}

export default Testimonials
