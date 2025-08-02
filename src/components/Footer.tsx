import styled from "styled-components"

export const Footer = () => {
  return (
    <Container>
      Photo Credit:
      <a href="https://www.map.org.uk/landing-pages/maps-emergency-response">
        MAP
      </a>
    </Container>
  )
}

const Container = styled.div`
  background-color: #333;
  width: 100vw;
  height: 100px;
  color: white;
  padding: 32px;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    color: white;
    margin-left: 4px;
  }
`
