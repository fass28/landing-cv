import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { NavBar } from "./components/NavBar"
import { Portfolio } from "./components/Portfolio/Index"
import { Start } from "./components/Start"

const  App = () =>   {
  return (
    <>
      <NavBar></NavBar>
      <Start></Start>
      <Portfolio></Portfolio>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
    </>
  )
}

export default App
