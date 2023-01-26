import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export const NavBar = () => {
  return (
    <>
      <section className="nav-bar" id="navBar">
        <Container>
          <Navbar variant="dark" expand="lg">
            <Navbar.Brand href="#home">START BOOTSTRAP</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
              Menu <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse
              id="basic-navbar-nav"
              className="justify-content-end"
            >
              <Nav className="ml-auto">
                <Nav.Item>
                  <Nav.Link href="#portfolio" className="py-3 px-0 px-lg-3">
                    PORTAFOLIO
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#about" className="py-3 px-0 px-lg-3">
                    ABOUT
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href="#contact" className="py-3 px-0 px-lg-3">
                    CONTACT
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
      </section>
    </>
  );
};
