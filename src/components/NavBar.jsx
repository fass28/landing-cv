export const NavBar = () => {
  return (
    <>  
      <section className="nav-bar fixed-top" id="navBar">
       <nav className="navbar navbar-expand-lg navbar-dark " >
        <a className="navbar-brand" >START BOOTSTRAP</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           Menu <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto ">
              <li className="nav-item">
                <a className="nav-link" href="#portfolio">PORTAFOLIO</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">ABOUT</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </>
  )
}
