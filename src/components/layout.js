import React from "react"
import Footer from "./Footer"
import Header from "./Header"
import HeaderArrow from "./HeaderArrow"
import Sidebar from "./Sidebar"
import { GlobalStyle } from "./styles/GlobalStyles"

const Layout = ({ children, isOpen, onClick }) => {
  return (
    <>
      <GlobalStyle />
      <Header onClick={onClick} />
      <Sidebar isOpen={isOpen} onClick={onClick} />
      <HeaderArrow />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
