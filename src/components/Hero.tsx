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
          onClick={() => (window.location.href = "https://www.map.org.uk/")}
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
  height: 95vh;
`

const Container = styled.div`
  height: 100vh;
`

const MainText = styled.div`
  width: 500px;
  background-color: white;
  /* background-color: rgba(255, 255, 255, 0.8); */
  /* backdrop-filter: blur(10px); */
  position: absolute;
  right: 100px;
  top: 58vh;
  padding: 32px;
  font-size: 20px;
  text-align: justify;

  @media (orientation: portrait) {
    width: 100vw;
    top: auto;
    bottom: 5vh;
    right: 0;
  }
`

const Header = styled.h2`
  font-size: 32px;
  margin: 0;
  text-align: justify;
  height: 32px;

  &:after {
    content: "";
    display: inline-block;
    width: 100%;
  }
`

const Link = styled.a`
  color: #e62a2a;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
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
