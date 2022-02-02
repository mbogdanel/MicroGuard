import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { AiOutlineMenuFold } from "react-icons/ai"
import { menuData } from "../data/MenuData"
import { useState } from "react"
import { StaticImage } from "gatsby-plugin-image"

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <Nav>
      <NavLink to="/">
        <StaticImage
          src="../assets/images/microguardLogo.png"
          alt="microguardLogo"
        />
      </NavLink>
      <Bars onClick={() => setMobileNav(!mobileNav)} />
      <NavMenuWrapper>
        <NavMenu id={mobileNav ? "hidden" : ""}>
          {menuData.map((item, index) => (
            <NavLink to={item.link} key={index}>
              {item.title}
            </NavLink>
          ))}
        </NavMenu>
      </NavMenuWrapper>

      <NavBtn>
        <ButtonTel primary="true" round="true" big="" href="tel:+40770480952">
          <BtnDiv>
            <span>Contacteaza-ne</span>
            <span>0770 480 952</span>
          </BtnDiv>
        </ButtonTel>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.4);
  height: 80px;
  /* display: flex;
  justify-content: space-between; */
  display: grid;
  grid-template-columns: 1.2fr 3fr 1fr;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;

  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  max-width: clamp(18rem, 5vw, 4rem);
  cursor: pointer;
  @media screen and (max-width: 768px) {
    max-width: 200px;
  }
  &:hover {
    color: #bcd0f1;
    transition: 0ms.3s ease-out;
  }
`
const Bars = styled(AiOutlineMenuFold)`
  display: none;
  color: #fff;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`

const NavMenuWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`

const NavMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  /* align-items: center; */
  /* margin-right: -48px; */

  @media screen and (max-width: 768px) {
    display: none;
  }

  #hidden {
    @media screen and (max-width: 768px) {
      position: absolute;
      left: 0;
      top: 80px;
      height: auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`
const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const BtnDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
`
const ButtonTel = styled.a`
  background: #4069b0;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "16px 40px" : "7px 32px")};
  color: #fff;
  font-size: ${({ big }) => (big ? "20px" : "16px")};
  outline: none;
  border: none;
  min-width: 100px;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ round }) => (round ? "50px" : "none")};

  &:hover {
    background: #133c82;
    transform: translateY(-2px);
  }

  @media screen and (max-width: 600px) {
    padding: 10px 24px;
  }
`
