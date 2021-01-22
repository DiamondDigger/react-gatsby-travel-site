import React from "react"
import styled from "styled-components"
import { StatsData } from "../data/stats"

const Stats = () => {
  return (
    <StatsContainer id="stats">
      <Heading>Why you should choose us?</Heading>
      <Wrapper>
        {StatsData.map((item, index) => (
          <StatsBox key={index}>
            <Icon>{item.icon}</Icon>
            <Title>{item.title}</Title>
            <Info>{item.info}</Info>
          </StatsBox>
        ))}
      </Wrapper>
    </StatsContainer>
  )
}

export default Stats

const StatsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem calc((100vw - 1300px) / 2);
  background: #fff;
  color: #000;
  overflow: hidden;
`
const Heading = styled.h1`
  text-align: start;
  font-size: clamp(1.5rem, 5vw, 2rem);
  margin-bottom: 3rem;
  padding: 0 2rem;
`
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`

const StatsBox = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
`

const Icon = styled.div`
  font-size: 3rem;
  margin-bottom: 1rem;

  position: relative;
  /* animation-name: slideFrom;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate; */

  @keyframes slideFrom {
    0% {
      bottom: 300px;
    }
    100% {
      bottom: 0;
    }
  }

  @media screen and (max-width: 768px) {
    /* animation-name: slideFromDeepTop; */

    @keyframes slideFromDeepTop {
      0% {
        bottom: 800px;
      }
      100% {
        bottom: 0;
      }
    }
  }
`
const Title = styled.p`
  font-size: clamp(1rem, 2.5vw, 1.5rem);
  margin-bottom: 0.5rem;

  position: relative;
  /* animation-name: slideFrom;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate; */

  @keyframes slideFrom {
    0% {
      bottom: 300px;
    }
    100% {
      bottom: 0;
    }
  }

  @media screen and (max-width: 768px) {
    /* animation-name: slideFromDeepTop; */

    @keyframes slideFromDeepTop {
      0% {
        bottom: 800px;
      }
      100% {
        bottom: 0;
      }
    }
  }
`
const Info = styled.p`
  /* position: relative;
  animation-name: slideFromBottom;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate; */

  @keyframes slideFromBottom {
    0% {
      top: 200px;
    }
    100% {
      top: 0;
    }
  }

  @media screen and (max-width: 768px) {
    /* animation-name: slideFromDeepBottom; */

    @keyframes slideFromDeepBottom {
      0% {
        top: 800px;
      }
      100% {
        top: 0;
      }
    }
  }
`
