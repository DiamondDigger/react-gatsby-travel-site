import React from "react"
import { Link } from "react-scroll"
import styled from "styled-components"
import { FaBars } from "react-icons/fa"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"

import { linkProps } from "./helpers/linkProps"

const Header = ({ onClick }) => {
  return (
    <Nav>
      <NavLink to="/">EXPLORIX</NavLink>
      <Bars
        onClick={() => {
          console.log("toggle the button")
          onClick()
        }}
      />
      <NavMenu>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index} {...linkProps}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" to="/page-2">
          Book a flight
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: transparent;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;

  @media screen and (max-width: 400px) {
    height: 60px;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  height: 100%;
  padding: 0 1rem;
  cursor: pointer;
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: none;
  }
`
