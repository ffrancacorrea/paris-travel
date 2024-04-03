import styled from "styled-components"

import banner from "../../assets/parisBridge.jpg"
import destinationJapan from "../../assets/destinationJapan.jpg"
import destinationUSA from "../../assets/destinationUSA.jpg"
import destinationBrazil from "../../assets/destinationBrazil.jpg"

import Card from "../Card"

const Wrapper = styled.div`
  display: flex;
  text-align: right;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.primary};
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ theme }) =>
    `linear-gradient(180deg, ${theme.colors.background} 10%, rgba(255,255,255,0) 50%, ${theme.colors.background} 90%), url(${banner})`};
  width: 100%;
  margin: 5% 0;
  margin-bottom: 1000px;
`
const Title = styled.div`
  display: flex;
  text-align: right;
  flex-direction: column;
  justify-content: right;
  margin: 10%;
  h1 {
    margin: 0;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
  }
  h3 {
    margin: 0;
    font-family: "Roboto Slab", serif;
    font-optical-sizing: auto;
    font-weight: 500;
    font-style: normal;
    font-size: small;
  }
`
const Destinations = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 5% 0;
  flex-wrap: wrap;
  margin-bottom: 10%;
  div:first-child {
    margin: -15% 0;
  }
  div:nth-child(2) {
    margin: 0 -4%;
  }
  div:nth-child(3) {
    margin: -5%;
  }
  div {
    @media screen and (max-width: 1400px) {
      margin: 5px !important;
    }
    @media screen and (max-width: 1024px) {
      margin: 0 !important;
    }
    @media screen and (max-width: 1024px) {
      margin: 5px 0 !important;
    }
  }
`

const Subscribe = () => {
  return (
    <Wrapper id="subscribe">
      <Title>
        <h1>SUBSCRIBE TO OUR NEWSLETTER</h1>
        <h3>AND DON'T MISS OUT ON THE </h3>
        <h3>DESTINATIONS WE RECOMEND WEEKLY</h3>
      </Title>
      <Destinations>
        <Card image={destinationJapan} width="500px" height="300px"></Card>
        <Card image={destinationUSA} width="500px" height="300px"></Card>
        <Card image={destinationBrazil} width="500px" height="300px"></Card>
      </Destinations>
    </Wrapper>
  )
}

export default Subscribe
