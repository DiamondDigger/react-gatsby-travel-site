import React from 'react'
import styled from 'styled-components'

const Hero = () => {
    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg src='' type='video/mp4'/>
            </HeroBg>
        </HeroContainer>
    )
}

export default Hero

const HeroContainer = styled.div``

const HeroBg = styled.div``

const VideoBg = styled.video``
