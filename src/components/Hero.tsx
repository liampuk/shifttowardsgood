import { useEffect } from "react"
import styled from "styled-components"

export const Hero = () => {
  useEffect(() => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--initial-vh", `${vh}px`)
  }, [])

  return (
    <Container id="top">
      <BgImage src="bg-image.webp" />
      <MainText>
        <Header>One Shift Can Make a Difference</Header>
        <div>
          <p>Donating one extra shift can make a huge difference.</p>
        </div>
        <DonateButton
          onClick={() =>
            (window.location.href =
              "https://www.gofundme.com/f/shift-towards-good-for-medical-aid-for-palestinians")
          }
        >
          Click here to DONATE
        </DonateButton>
      </MainText>
    </Container>
  )
}

const BgImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: 1 0;
  height: 100svh;

  @media (orientation: portrait) {
    height: 700px;

    animation: moveRight 50s linear infinite;

    @keyframes moveRight {
      0% {
        object-position: 0 0;
      }
      50% {
        object-position: 100% 0;
      }
      100% {
        object-position: 0% 0;
      }
    }
  }
`

const Container = styled.div`
  /* height: 700px; */
  height: calc(var(--initial-vh) * 100);
  display: flex;
  flex-direction: column;
`

const MainText = styled.div`
  @media (orientation: landscape) {
    width: 500px;
    background-color: white;
    position: absolute;
    right: 100px;
    top: 58svh;
    padding: 32px;
    font-size: 20px;
    text-align: justify;
    border-radius: 8px;
  }

  @media (orientation: portrait) {
    background-color: white;
    width: 100vw;
    display: block;
    border-radius: 0;
    right: 0;
    padding: 32px;
    font-size: 20px;
    text-align: justify;
    /* top: auto;
    bottom: 0;
    right: 0;
    padding: 16px;
    border-radius: 0; */
  }
`

const Header = styled.h2`
  @media (orientation: landscape) {
    font-size: 32px;
    margin: 0;
    text-align: justify;
    height: 32px;

    &:after {
      content: "";
      display: inline-block;
      width: 100%;
    }
  }

  @media (orientation: portrait) {
    font-size: 6vw;
  }
`

const DonateButton = styled.button`
  font-size: 20px;
  border: none;
  background-color: #e62a2a;
  color: white;
  padding: 0 24px;
  cursor: pointer;
  float: right;
  height: 48px;
`
