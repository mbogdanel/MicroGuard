import * as React from "react"
import Email from "../components/Email"
import Hero from "../components/Hero"
import { ThemeProvider } from "styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Services from "../components/Services"
import Services2 from "../components/Services2"
import { theme } from "../components/styles/GlobalStyle"

const IndexPage = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Seo title="Home" />
      <Hero />
      <Services heading="Servicii de supraveghere" />
      <Services2 heading="Servicii de supraveghere" />
      <Testimonials />
      <Stats />
      <Email />
    </Layout>
  </ThemeProvider>
)

export default IndexPage
