import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: "Roboto Slab", serif;
  font-weight: 500;
  font-style: normal;
`
const NavigationLinks = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin: 25px 0;
`
const NavigationItems = styled.div`
  display: flex;
`
const NavigationItem = styled.a`
  display: flex;
  margin: 0 15px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
`

export function Navbar() {
  return (
    <Wrapper>
      <NavigationLinks>
        <NavigationItems>
          <NavigationItem href="#locations">LOCATIONS</NavigationItem>
          <NavigationItem href="#subscribe">NEWSLETTER</NavigationItem>
          <NavigationItem>CONTACT</NavigationItem>
        </NavigationItems>
      </NavigationLinks>
    </Wrapper>
  )
}
