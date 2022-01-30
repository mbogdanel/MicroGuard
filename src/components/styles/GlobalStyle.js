import { createGlobalStyle } from "styled-components"

export const theme = {
  mobile: "768",
  colors: {
    main: "#f26a2e",
    second: "#077BF1",
    third: "#f26",
  },
}

export const GlobalStyle = createGlobalStyle`
* {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
      background: rgba(0, 0, 0, 0.4);
    }
  }

#hidden a {
    margin-bottom: 5px;
}  

main {
  /* background-color: #d3d3d3; */

}

`
