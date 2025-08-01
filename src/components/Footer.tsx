import styled from "styled-components"

export const Footer = () => {
  return (
    <Container>
      Photo Credit:
      <a href="https://unsplash.com/photos/a-person-standing-in-a-room-eUSkjC5gOVk">
        Jonathan Borba, 2022
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
