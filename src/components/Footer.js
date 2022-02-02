import React from "react"
import styled from "styled-components"
import { GoLocation } from "react-icons/go"
import { GrFacebook } from "react-icons/gr"
import { BsFillTelephoneInboundFill } from "react-icons/bs"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTop>
        <FooterDesc>
          <h1>Microguard</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae quis cum iste, voluptates neque temporibus. Lorem ipsum
          </p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Date Contact</FooterLinkTitle>
          <FooterLink href="tel:+40770480952">
            <BsFillTelephoneInboundFill
              css={`
                color: green;
                font-size: 1.5rem;
                margin-right: 10px;
              `}
            />
            +40 770 480 952
          </FooterLink>
          <FooterLink href="https://www.facebook.com/alex.microguard">
            <GrFacebook
              css={`
                color: blue;
                font-size: 1.5rem;

                margin-right: 10px;
              `}
            />
            microguard
          </FooterLink>
          <FooterLink to="/">
            <GoLocation
              css={`
                color: red;
                font-size: 1.5rem;
                margin-right: 10px;
              `}
            />
            Casa Modei, Bacau
          </FooterLink>
        </FooterLinkItems>
      </FooterTop>
      <hr />
      <FooterBottom>
        <span>&#169; 2022 </span>
        <LinkCopyRight href="https://www.mariusbogdanel.com/">
          mbogdanel
        </LinkCopyRight>
      </FooterBottom>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem calc((100vw - 1100px) / 2);
  background: #4069b0;
`

const FooterTop = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  width: 1000px;
  max-width: 100%;
  padding: 5px 20px;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const FooterBottom = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`
const LinkCopyRight = styled.a`
  text-decoration: none;
  margin-left: 5px;
  /* color: #3d3d4e; */
  color: white;
  cursor: pointer;

  &:hover {
    color: #f26a2e;
    transition: 0ms.3s ease-out;
  }
`

const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 2rem;
    color: #f26a2e;
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  align-items: flex-start;
  margin-left: 20px;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled.a`
  text-decoration: none;
  /* color: #3d3d4e; */
  color: white;
  margin: 0.5rem;
  font-size: 16px;
  margin-left: 5px;
  cursor: pointer;

  &:hover {
    color: #f26a2e;
    transition: 0ms.3s ease-out;
  }
`
