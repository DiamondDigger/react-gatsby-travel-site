import React from "react"
import styled from "styled-components"
import { FaArrowCircleUp } from "react-icons/fa"
import { scrollToHeader } from "./scrollToHeader"

const HeaderArrow = () => {
  return (
    <Container id="arrow">
      <Link>
        <FaArrowCircleUp
          onClick={() => {
            scrollToHeader()
            console.log("right to the top")
          }}
        />
      </Link>
    </Container>
  )
}

export default HeaderArrow

export const Container = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 7vh;
  height: 7vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 998;
`
export const Link = styled.div`
  position: sticky;
  display: flex;
  align-items: center;
  font-size: 7vh;
  opacity: 0.7;
  color: #f5580a;
  cursor: pointer;
  transition: 0.3s ease-in;
`
