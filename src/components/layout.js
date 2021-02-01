import React from "react"
import { FaYenSign } from "react-icons/fa"
import Footer from "./Footer"
import Header from "./Header"
import HeaderArrow from "./helpers/HeaderArrow"
import Sidebar from "./Sidebar"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children, isOpen, onClick, visible }) => {
  return (
    <>
      <GlobalStyle />
      <Header onClick={onClick} visible={visible} />
      <Sidebar isOpen={isOpen} onClick={onClick} />
      <HeaderArrow />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
