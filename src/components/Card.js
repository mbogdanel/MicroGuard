import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const Card = ({ item }) => {
  console.log(item)
  return (
    <StyledCard>
      <div>
        <h2>{item.node.name}</h2>
        <p>{item.node.description}</p>
      </div>

      <div>
        <ProductImg
          fluid={item.node.img.childImageSharp.fluid}
          alt={item.node.name}
        />
      </div>
    </StyledCard>
  )
}

export default Card

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 60px;
  flex-direction: row;

  & > div {
    flex: 1;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 30px;
    padding: 2em;
  }

  h2 {
    margin-bottom: 2rem;
  }
`
const ProductImg = styled(Img)`
  width: 80%;
  /* height: 100%;
  max-height: 400px;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1); */

  &:hover {
    filter: brightness(100%);
  }
  @media (max-width: 768px) {
    width: 13em;
    height: auto;
    /* width: 500px; */
    /* max-height: 400px; */
    border-radius: 10px;
  }
`
