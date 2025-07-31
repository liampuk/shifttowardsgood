import styled from "styled-components"
import { Anchor } from "../commonStyles"

export const HowYouCanHelp = () => {
  return (
    <Container>
      <Anchor id="HowYouCanHelp" />
      <h2>How you can help</h2>
      <p>We are currently building this website, please come back later</p>
    </Container>
  )
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 64px;
  color: white;
`
