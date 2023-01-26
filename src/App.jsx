import { About } from "./components/About"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import Modal from "./components/Modal"
import { NavBar } from "./components/NavBar"
import { Portafolio } from "./components/Portafolio"
import { Start } from "./components/Start"

const  App = () =>   {
  return (
    <>
      <NavBar></NavBar>
      <Start></Start>
      <Portafolio></Portafolio>
      <About></About>
      <Contact></Contact>
      <Footer></Footer>
      <Modal></Modal>
    </>
  )
}

export default App
