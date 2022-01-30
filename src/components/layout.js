import * as React from "react"
import Header from "./Header"
import Footer from "../components/Footer"
import { GlobalStyle } from "./styles/GlobalStyle"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
