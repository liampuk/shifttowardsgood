import styled from "styled-components"
import { Anchor } from "../commonStyles"

export const HowYouCanHelp = () => {
  return (
    <Container>
      <Anchor id="HowYouCanHelp" />
      <Heading>How You Can Help</Heading>
      <SectionText>
        Please, either pick up one extra shift, or donate what you can out of a
        day of work.
      </SectionText>
      <SectionText>
        With each shift towards good we can make a huge difference for the
        health and dignity of Palestinians living under occupation and as
        refugees.
      </SectionText>
      <DonateButton
        onClick={() =>
          (window.location.href =
            "https://www.gofundme.com/f/shift-towards-good-for-medical-aid-for-palestinians")
        }
      >
        Click here to DONATE
      </DonateButton>
    </Container>
  )
}

const Container = styled.div`
  background-color: #222;
  color: white;
  width: 100vw;
  /* height: 100svh; */
  padding: 64px;
  position: relative;
  display: flex;
  direction: column;
  align-items: center;
  flex-direction: column;
`

const Heading = styled.h2`
  font-size: 60px;
  font-weight: 600;
  margin-bottom: 32px;
`

const SectionText = styled.div`
  font-size: 33px;
  width: 40vw;
  margin-bottom: 32px;
  text-align: justify;

  @media (orientation: portrait) {
    width: 100%;
    font-size: 24px;
  }
`

const DonateButton = styled.button`
  border: none;
  font-size: 32px;
  color: white;
  background-color: #d32626;
  padding: 16px;
  cursor: pointer;
  border-radius: 8px;
`
