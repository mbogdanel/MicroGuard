import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const Card = ({ item }) => {
  const image = getImage(item.node.img)

  return (
    <StyledCard>
      <div>
        <h2>{item.node.name}</h2>
        <p>{item.node.description}</p>
      </div>

      <div>
        <ProductImg image={image} alt={item.node.name} />
      </div>
    </StyledCard>
  )
}

export default Card

const StyledCard = styled.div`
  display: grid;
  grid-template-columns: 2fr 1.5fr;
  align-items: center;
  background-color: #90acdd;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 40px;
  flex-direction: row;

  & > div {
    flex: 1;
  }

  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    padding: 1em;
  }

  h2 {
    margin-bottom: 2rem;
  }

  div:nth-child(1) {
    /* display: flex;
    justify-content: center; */
    /* background-color: green; */
    padding: 2em;
    @media (max-width: 768px) {
      padding: 0.3em;
    }
  }
  div:nth-child(2) {
    display: flex;
    justify-content: center;
    /* background-color: red; */
  }
`
const ProductImg = styled(GatsbyImage)`
  /* margin-right: 2px; */
  height: 80%;
  width: auto;
  max-height: 300px;
  max-width: 300px;
  position: relative;
  border-radius: 10px;
  filter: brightness(70%);
  transition: 0.4s cubic-bezier(0.075, 0.82, 0.165, 1);

  &:hover {
    filter: brightness(100%);
  }
  @media (max-width: 768px) {
    max-height: 400px;
    max-width: 400px;
  }
`
