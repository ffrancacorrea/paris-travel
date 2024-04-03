import { styled } from "styled-components"

import banner from "../../assets/banner.jpg"
import { Navbar } from "../Navbar"

const Wrapper = styled.div`
  display: flex;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.colors.background} 0%, rgba(255,255,255,0) 50%, ${theme.colors.background} 100%), url(${banner})`};
  width: 100%;
  height: 100vh;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  h1 {
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 900;
    font-style: normal;
    font-size: 600%;
    margin: -17px 20%;
    text-align: left;
  }
`
const Header = () => {
  return (
    <Wrapper>
      <Container>
        <Navbar />
        <Title>
          <h1>COME</h1>
          <h1>TO</h1>
          <h1>PARIS</h1>
        </Title>
      </Container>
    </Wrapper>
    // TODO add arrow
  )
}

export default Header
