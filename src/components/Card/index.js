import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  margin: 3%;
  &:hover {
    transform: ${({ hover }) => hover && "scale(1.2)"};
    transition: 1s;
  }
  cursor: ${({ hover }) => hover && "pointer"};
`
const Box = styled.div`
  position: relative;
  width: ${({ width }) => width || "200px"};
  height: ${({ height }) => height || "300px"};
  box-shadow: 0px 0px 8px #000;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: ${({ theme, image }) =>
    `linear-gradient(0deg, ${theme.colors.background}, rgba(255,255,255,0) 70%), url(${image})`};
  font-family: "Roboto Slab", serif;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  flex-direction: column;
  div {
    display: flex;
    flex-direction: column;
    justify-content: end;
    margin: -10% 0;
    height: 100%;
  }
`
const Card = ({ image, label, redirect_url, width, height, hover }) => {
  return (
    <Wrapper
      hover={hover}
      onClick={() => (window.location.href = redirect_url)}
    >
      <Box width={width} height={height} image={image}>
        <div>{label}</div>
      </Box>
    </Wrapper>
  )
}
export default Card
