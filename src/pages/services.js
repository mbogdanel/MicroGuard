import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { ThemeProvider } from "styled-components"
import { theme } from "../components/styles/GlobalStyle"
import styled from "styled-components"
import Services2 from "../components/Services2"
import Video from "../assets/videos/frontVideo4.mp4"

const Services = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Seo title="contact" />
        <ServicesContainer>
          <ServicesBackground>
            <VideoBackground
              src={Video}
              type="video/mp4"
              autoPlay
              loop
              muted
              playsInline
            />
          </ServicesBackground>
        </ServicesContainer>
        <Services2 heading="Servicii de supraveghere" />
      </Layout>
    </ThemeProvider>
  )
}

export default Services

const ServicesContainer = styled.div`
  /* background: green; */
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 0 1rem;
  position: relative;
  margin-top: -80px;
  color: #fff;

  :before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 2;
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
  }
`

const ServicesBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
`

const VideoBackground = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`
