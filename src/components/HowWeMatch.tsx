import styled from "styled-components"
import { Anchor } from "../commonStyles"

export const HowWeMatch = () => {
  return (
    <Container>
      <Anchor id="HowWeMatch" />
      <div>
        <Heading>How We Match Donations</Heading>
        <SectionText>
          Your donation will be matched by us on the GoFundMe page with a
          reference for the date you donated on.
        </SectionText>
        <SectionText>
          We are currently able to match £5000 of donations. If you or your
          business can help us increase this, please get in touch at{" "}
          <Link href="mailto:contact@shifttowardsgood.org.uk">
            contact@shifttowardsgood.org.uk
          </Link>
        </SectionText>
      </div>
      <ImageContainer>
        <MatchedImage src="matched.png" />
      </ImageContainer>
    </Container>
  )
}

const Link = styled.a`
  color: #29ab23;
`

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
`

const MatchedImage = styled.img`
  width: 100%;
  margin-top: 30vh;
  border-radius: 8px;

  @media (orientation: portrait) {
    margin-top: 0;
  }
`

const Container = styled.div`
  background-color: #222;
  color: white;
  width: 100vw;
  padding: 64px;
  position: relative;
  display: flex;
  height: 110vh;
  gap: 64px;

  @media (orientation: portrait) {
    flex-direction: column;
    height: auto;
  }
`

const Heading = styled.div`
  font-size: 60px;
  margin-top: 35vh;
  font-weight: 600;
  margin-bottom: 32px;

  @media (orientation: portrait) {
    margin-top: 150px;
  }
`

const SectionText = styled.div`
  font-size: 24px;
  width: 45vw;
  margin-bottom: 32px;
  text-align: justify;

  @media (orientation: portrait) {
    width: 100%;
  }
`
