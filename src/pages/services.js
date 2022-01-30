import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ThemeProvider } from "styled-components"
import { theme } from "../components/styles/GlobalStyle"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Services = () => {
  const data = useStaticQuery(graphql`
    query ServicessomtingQuery {
      allServicesJson {
        edges {
          node {
            button
            description
            name
            img {
              childImageSharp {
                fluid(maxWidth: 500, quality: 90) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Seo title="contact" />
        <ServicesPageWrapper>
          <h1>Serviciile noastre</h1>
          <div>
            <ProductImg
              fluid={
                data.allServicesJson.edges[0].node.img.childImageSharp.fluid
              }
              alt={data.allServicesJson.edges[0].node.name}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            consectetur iusto animi consequatur amet nobis totam ipsa incidunt
            ea vero sunt, eveniet, corporis quisquam. Quasi quos soluta veniam
            iusto dolore?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            consectetur iusto animi consequatur amet nobis totam ipsa incidunt
            ea vero sunt, eveniet, corporis quisquam. Quasi quos soluta veniam
            iusto dolore?
          </p>
          <div>
            <ProductImg
              fluid={
                data.allServicesJson.edges[1].node.img.childImageSharp.fluid
              }
              alt={data.allServicesJson.edges[1].node.name}
            />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita
            consectetur iusto animi consequatur amet nobis totam ipsa incidunt
            ea vero sunt, eveniet, corporis quisquam. Quasi quos soluta veniam
            iusto dolore?
          </p>

          <Link to="/">Link Pagina start</Link>
        </ServicesPageWrapper>
      </Layout>
    </ThemeProvider>
  )
}

export default Services

const ServicesPageWrapper = styled.div`
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

const ProductImg = styled(Img)`
  height: 100%;
  max-height: 150px;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);
  margin: 2rem 0;

  &:hover {
    filter: brightness(100%);
  }
`
