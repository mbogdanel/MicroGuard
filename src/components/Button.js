import styled from "styled-components"
import { Link } from "gatsby"
// import { theme } from "../components/styles/GlobalStyle"

export const Button = styled(Link)`
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
