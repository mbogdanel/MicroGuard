import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>Microguard</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repudiandae quis cum iste, voluptates neque temporibus. Lorem ipsum
          </p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Contact us</FooterLinkTitle>
          <FooterLink to="/">Contact</FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="/">Destination</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
      <FooterLinksWrapper>
        <FooterLinkItems>
          <FooterLinkTitle>Contact us</FooterLinkTitle>
          <FooterLink to="/">Contact</FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="/">Destination</FooterLink>
        </FooterLinkItems>
        <FooterLinkItems>
          <FooterLinkTitle>Contact us</FooterLinkTitle>
          <FooterLink to="/">Contact</FooterLink>
          <FooterLink to="/">Support</FooterLink>
          <FooterLink to="/">Destination</FooterLink>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer

const FooterContainer = styled.div`
  padding: 5rem calc((100vw - 1100px) / 2);
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  color: #000;
  background: #fafafa;

  @media screen and (max-width: 400px) {
    padding: 1rem;
    grid-template-columns: 1fr;
  }
`

const FooterDesc = styled.div`
  padding: 0 2rem;

  h1 {
    margin-bottom: 3rem;
    color: ${({ theme }) => theme.colors.main};
  }

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
  align-items: flex-start;

  @media screen and (max-width: 400px) {
    padding: 1rem;
  }
`

const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 16px;
`

const FooterLink = styled(Link)`
  text-decoration: none;
  color: #3d3d4e;
  margin-bottom: 0%.5rem;
  font-size: 14px;

  &:hover {
    color: ${({ theme }) => theme.colors.main};
    transition: 0ms.3s ease-out;
  }
`
