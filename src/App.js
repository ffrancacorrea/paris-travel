import { ThemeProvider } from "styled-components"
import theme from "./styles/theme"

// import components
import Header from "./components/Header"
import Locations from "./components/Locations"
import Subscribe from "./components/Subscribe"

// TODO add language selection

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Locations />
      <Subscribe />
    </ThemeProvider>
  )
}

export default App
