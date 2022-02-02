import React from "react"
import styled from "styled-components"
import Card from "./Card"
import { useStaticQuery, graphql } from "gatsby"

const Services2 = () => {
  const data = useStaticQuery(graphql`
    query Services2Query {
      allServicesJson {
        edges {
          node {
            button
            description
            name
            img {
              childImageSharp {
                gatsbyImageData(
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  `)

  console.log(data)
  return (
    <ServicesContainer>
      {data.allServicesJson.edges.map((item, index) => (
        <Card key={index} item={item} />
      ))}
    </ServicesContainer>
  )
}

export default Services2

const ServicesContainer = styled.div`
  width: 1000px;
  max-width: 100%;
  padding: 5px 20px;
  margin: 0 auto;
  background-color: #bcd0f1;
`
