import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterDescription>
                <h1>Explorix</h1>
                <p>We strive to create the best expreince for our customers</p>
            </FooterDescription>
            <FooterWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Contact Us</FooterLinkTitle>
                    <FooterLink to='/'>Contact</FooterLink>
                    <FooterLink to='/'>Support</FooterLink>
                    <FooterLink to='/'>Destinations</FooterLink>
                    <FooterLink to='/'>Sponsorship</FooterLink>
                </FooterLinkItems>
            </FooterWrapper>
            <FooterWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>Videos</FooterLinkTitle>
                    <FooterLink to='/'>Submit Video</FooterLink>
                    <FooterLink to='/'>Ambassadors</FooterLink>
                    <FooterLink to='/'>Agency</FooterLink>
                    <FooterLink to='/'>Influencer</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle >Social Media</FooterLinkTitle>
                    <FooterLink to='/'>Instagram</FooterLink>
                    <FooterLink to='/'>Facebook</FooterLink>
                    <FooterLink to='/'>Youtube</FooterLink>
                    <FooterLink to='/'>Twitter</FooterLink>
                </FooterLinkItems>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.div``
const FooterDescription = styled.div``
const FooterWrapper = styled.div``
const FooterLinkItems = styled.div``
const FooterLinkTitle= styled.div``
const FooterLink = styled.div``