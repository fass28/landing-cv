export const NavBar = () => {
  return (
    <>  
       <nav className="navbar navbar-expand-lg navbar-dark" id="mainNav">
        <a className="navbar-brand" >START BOOTSTRAP</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto ">
              <li className="nav-item">
                  <a className="nav-link" href="#footer">PORTAFOLIO</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#pricing">ABOUT</a>
              </li>
              <li className="nav-item">
                  <a className="nav-link" href="#cta">CONTACT</a>
              </li>
          </ul>
      </div>
      </nav>
    </>
  )
}
