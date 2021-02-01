import React from "react"
import styled from "styled-components"
import { Link } from "react-scroll"
import { Button } from "./Button"
import { AiOutlineClose } from "react-icons/ai"

import { linkProps } from "./helpers/linkProps"

const Sidebar = ({ isOpen, onClick }) => {
  return (
    <Container isOpen={isOpen}>
      <Top>
        <Icon onClick={() => onClick()}>
          <CloseIcon />
        </Icon>
      </Top>
      <Middle>
        <SidebarLink to="about" {...linkProps} onClick={() => onClick()}>
          About
        </SidebarLink>
        <SidebarLink to="trips" {...linkProps} onClick={() => onClick()}>
          Trips
        </SidebarLink>
        <SidebarLink to="" {...linkProps} onClick={() => onClick()}>
          Careers
        </SidebarLink>
        <SidebarLink to="email" {...linkProps} onClick={() => onClick()}>
          Contact
        </SidebarLink>
      </Middle>
      <Bottom>
        <ButtonWrapper>
          <Button to="/page-2/" big="true" primary="true">
            Book a flight
          </Button>
        </ButtonWrapper>
      </Bottom>
    </Container>
  )
}

export default Sidebar

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  top: 0;
  background: #125969;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0%")};
  /* top: ${({ isOpen }) => (!isOpen ? "100" : "0")}; */
  transform: ${({ isOpen }) => (!isOpen ? "scale(0)" : "scale(1)")};
  transition: 0.5s ease-in-out;
  z-index: 999;
`
export const Top = styled.div`
  height: 15vh;
  text-align: end;
`
export const Middle = styled.div`
  height: 50vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
`
export const Bottom = styled.div`
  height: 25vh;
`
export const Icon = styled.div`
  display: block;
  align-items: flex-end;
  padding: 20px;
  font-size: 2rem;
`

export const CloseIcon = styled(AiOutlineClose)`
  color: orange;
`

export const ButtonWrapper = styled.div`
  text-align: center;
  padding: 12vh;
`

export const SidebarLink = styled(Link)`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: auto auto;
  color: white;
  font-size: 1.7rem;
  font-weight: 500;
  letter-spacing: 2px;
  outline: none;
  transition: 0.3s ease-in-out;
  cursor: pointer;
  /* border: 1px solid greenyellow; */

  :hover {
    color: orange;
    transition: 0.5s ease-in-out;
  }
`
