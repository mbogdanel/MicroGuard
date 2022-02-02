import React from "react"
import styled from "styled-components"
import EmailBg from "../assets/images/emailPic4.jpg"

const Email = () => {
  return (
    <EmailContainer>
      <EmailContent>
        <h1>Protejeaza ce e important pentru tine</h1>
      </EmailContent>
    </EmailContainer>
  )
}

export default Email

const EmailContainer = styled.div`
  background: linear-gradient(
      18deg,
      rbba(0, 0, 0, 0.5) 0%,
      rbba(0, 0, 0, 0.5) 35%,
      rbba(0, 0, 0, 0.1) 100%
    ),
    no-repeat center;

  background-image: url(${EmailBg});
  filter: brightness(70%);

  background-size: cover;
  height: 350px;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) / 2);
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`

const EmailContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    margin-bottom: 1rem;
    font-size: clamp(1rem, 5vw, 3rem);
    padding: 0 1rem;
    color: white;
  }

  p {
    text-align: center;
    font-size: clamp(1rem, 2.5vw, 1.5rem);
    padding: 0 1rem;
    margin-bottom: 2rem;
  }

  form {
    z-index: 10;
  }
`
