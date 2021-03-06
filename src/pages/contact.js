import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ThemeProvider } from "styled-components"
import { theme } from "../components/styles/GlobalStyle"
import styled from "styled-components"

const Contact = () => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Seo title="contact" />
      <ContactWrapper>
        <h1>Cum ne puteti contacta</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
          consectetur iusto animi consequatur amet nobis totam ipsa incidunt ea
          vero sunt, eveniet, corporis quisquam. Quasi quos soluta veniam iusto
          dolore?
        </p>
      </ContactWrapper>

      <Link to="/">Link Pagina start</Link>
    </Layout>
  </ThemeProvider>
)

export default Contact

const ContactWrapper = styled.div`
  min-height: calc(100vh - 70px);
  width: 1000px;
  max-width: 100%;
  padding: 40px 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  h1 {
    margin: 4rem 0;
  }
  p {
    margin: 1rem 0;
  }
`
