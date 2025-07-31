import styled from "styled-components"
import { Anchor } from "../commonStyles"

export const WhoWeAre = () => {
  return (
    <Container>
      <Anchor id="WhoWeAre" />
      <h2>Who We Are</h2>
      <p>We are currently building this website, please come back later</p>
    </Container>
  )
}

const Container = styled.div`
  background-color: #222;
  color: white;
  width: 100vw;
  height: 100vh;
  padding: 64px;
  position: relative;
`
