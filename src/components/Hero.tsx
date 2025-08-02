import styled from "styled-components"

export const Hero = () => {
  return (
    <Container id="top">
      <BgImage src="bg-image.png" />
      <MainText>
        <Header>One Shift Can Make a Difference</Header>
        <div>
          <p>
            Donating one extra shift can make a huge difference to help people
            critically in need in Palestine.
          </p>
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
  object-position: 0 0;
  height: 100svh;

  @media (orientation: portrait) {
    height: 700px;

    animation: moveRight 30s linear infinite;

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
`

const Container = styled.div`
  height: 100svh;
`

const MainText = styled.div`
  width: 500px;
  background-color: white;
  /* background-color: rgba(255, 255, 255, 0.8); */
  /* backdrop-filter: blur(10px); */
  position: absolute;
  right: 100px;
  top: 58svh;
  padding: 32px;
  font-size: 20px;
  text-align: justify;
  border-radius: 8px;

  @media (orientation: portrait) {
    width: 100vw;
    top: auto;
    bottom: 0;
    right: 0;
    padding: 16px;
    border-radius: 0;
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
