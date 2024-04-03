import styled from "styled-components"
import arc from "../../assets/arc.jpg"
import louvre from "../../assets/louvre.jpg"
import eiffelTower from "../../assets/eiffelTower.jpg"
import moulinRouge from "../../assets/moulinRouge.jpg"

import Card from "../Card"

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  color: ${({ theme }) => theme.colors.primary};
  width: 100%;
`
const Title = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5%;
  font-family: "Roboto Slab", serif;
  font-weight: 400;
  h1 {
    margin: 0;
    font-family: "Roboto Slab", serif;
    font-weight: 500;
  }
  p {
    font-size: smaller;
    margin: 0;
  }
`
const Cards = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 0;
  flex-wrap: wrap;
`

const Locations = () => {
  return (
    <Wrapper id="locations">
      <Title>
        <p>YOU SHOULD DEFINETLY CHECK OUT</p>
        <h1>OUR FAVORITE PLACES</h1>
      </Title>
      <Cards>
        <Card
          image={arc}
          label="Arc de Triomphe"
          redirect_url="https://www.google.com/search?q=arc+de+triomphe"
          hover
        ></Card>
        <Card
          image={louvre}
          label="Musée du Louvre"
          redirect_url="https://www.google.com/search?q=mus%C3%A9e+du+louvre"
          hover
        ></Card>
        <Card
          image={eiffelTower}
          label="Tour Eiffel"
          redirect_url="https://www.google.com/search?q=tour+eiffel"
          hover
        ></Card>
        <Card
          image={moulinRouge}
          label="Moulin Rouge"
          redirect_url="https://www.google.com/search?q=moulin+rouge"
          hover
        ></Card>
      </Cards>
    </Wrapper>
  )
}

export default Locations
