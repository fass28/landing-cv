import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const About = () => {
  return (
    <section className="about" id='about'>
        <div className="about-title">
          <h2>ABOUT</h2>
          <span>
                <hr />
                <FontAwesomeIcon icon="fa-solid fa-star" /> 
                <hr />
            </span>
        </div>
      <div className="row aboutText">
          <p className="col-lg-6 col-sm-12">Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className="col-lg-6 col-sm-12">You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
      </div>
      <button class="btn btn-outline-light btn-lg download-btn" type="button"><FontAwesomeIcon icon="fa-solid fa-download" /> Free Download! </button>
    </section>
  )
}
