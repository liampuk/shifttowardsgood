import { Footer } from "./components/Footer"
import { Hero } from "./components/Hero"
import { HowWeMatch } from "./components/HowWeMatch"
import { HowYouCanHelp } from "./components/HowYouCanHelp"
import { Nav } from "./components/Nav"
import { WhoWeAre } from "./components/WhoWeAre"
import { GlobalStyles } from "./GlobalStyles"

function App() {
  return (
    <>
      <GlobalStyles />
      <Nav />
      <Hero />
      <WhoWeAre />
      <HowYouCanHelp />
      <HowWeMatch />
      <Footer />
    </>
  )
}

export default App
