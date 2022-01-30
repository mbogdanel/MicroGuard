import * as React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { AiOutlineMenuFold } from "react-icons/ai"
import { menuData } from "../data/MenuData"
import { Button } from "./Button"
import { useState } from "react"

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false)

  return (
    <Nav>
      <NavLink to="/">MICROGUARD </NavLink>
      <Bars onClick={() => setMobileNav(!mobileNav)} />
      <NavMenu id={mobileNav ? "hidden" : ""}>
        {menuData.map((item, index) => (
          <NavLink to={item.link} key={index}>
            {item.title}
          </NavLink>
        ))}
      </NavMenu>
      <NavBtn>
        <Button primary="true" round="true" big="" to="trips">
          Contacteaza-ne
        </Button>
      </NavBtn>
    </Nav>
  )
}

export default Header

const Nav = styled.nav`
  background: rgba(0, 0, 0, 0.4);
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
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
const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -48px;

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
