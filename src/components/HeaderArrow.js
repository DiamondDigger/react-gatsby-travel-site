import React from "react"
import styled from "styled-components"
import { FaArrowCircleUp } from "react-icons/fa"
import { scrollToHeader } from "./scrollToHeader"

const HeaderArrow = () => {
  return (
    <Container>
      <Wrapper>
        <Link>
          <FaArrowCircleUp
            onClick={() => {
              scrollToHeader()
              console.log("right to the top")
            }}
          />
        </Link>
      </Wrapper>
    </Container>
  )
}

export default HeaderArrow

export const Container = styled.div`
  position: fixed;
  width: 100%;
  height: 85vh;
  display: flex;
  justify-content: flex-end;
  z-index: 998;
`
export const Wrapper = styled.div`
  width: 10vw;
  display: flex;
  align-items: flex-end;
  margin-right: 7vw;
`
export const Link = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  font-size: 10vw;
  opacity: 0.7;
  color: #f5580a;
  transition: 0.3s ease-in;
`
