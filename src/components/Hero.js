import React from "react"
import styled, { keyframes } from "styled-components"
import { Button } from "./Button"
import Video from "../assets/videos/travel4.mp4"

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
      </HeroBg>
      <HeroContent>
        <HeroItems>
          <HeroH1>Unreal Destinations</HeroH1>
          <HeroP>Out of this world</HeroP>
          <ButtonWrapper>
            <Button to="/trips" primary="true" big="true" id="hero-button">
              Travel Now
            </Button>
          </ButtonWrapper>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero

const HeroContainer = styled.div`
  overflow: hidden;
  background: #0c0c0c;
  color: whitesmoke;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;

  :before {
    z-index: 2;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`

const HeroBg = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: hidden;
`

const VideoBg = styled.video`
  height: 100%;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`

const HeroContent = styled.div`
  z-index: 3;
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);

  @keyframes slideFromRight {
    from {
      margin-left: 300%;
      width: 300%;
    }
    to {
      margin-left: 0;
      width: 100%;
    }
  }
`

const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  text-align: center;
  height: 100vh;
  max-height: 100%;
  line-height: 1.1;
  font-weight: bold;
`

const HeroH1 = styled.h1`
  font-size: clamp(1.5rem, 6vw, 4rem);
  margin-bottom: 1.5rem;
  padding: 0 1rem;
  letter-spacing: 3px;

  animation-name: slideFromRight;
  animation-duration: 3s;
`

const HeroP = styled.p`
  font-size: clamp(1rem, 3vw, 3rem);
  font-weight: 400;
  margin-bottom: 2rem;

  animation-name: slideFromRight;
  animation-duration: 5s;
`

const ButtonWrapper = styled.div`
  animation-name: slideFromBottom;
  animation-duration: 5s;
  animation-direction: alternate;
  animation-iteration-count: 3;

  @keyframes slideFromBottom {
    from {
      margin-top: 200%;
    }

    to {
      margin-top: 0;
    }
  }
`
