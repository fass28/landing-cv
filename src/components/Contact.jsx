import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Contact = () => {
  return (
    <>
    <section className="contact-me">
      <form action="">
        <div className='contact-title'>
          <h2>CONTACT ME</h2>
          <span>
              <hr />
              <FontAwesomeIcon icon="fa-solid fa-star" /> 
              <hr />
          </span>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingName" placeholder="Password" />
          <label for="floatingName">Full name</label>
        </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingEmail" placeholder="Password" />
            <label for="floatingEmail">Email address</label>
          </div>
          <div className="form-floating">
            <input type="password" className="form-control" id="floatingPhone" placeholder="Password" />
            <label for="floatingPhone">Phone Number</label>
          </div>
          <div className="form-floating">
            <textarea type="password" className="form-control" id="floatingMessage" placeholder="Password"></textarea>
            <label for="floatingMessage">Message</label>
        </div>
        <button className='btn btn-success' id='button'>Send</button>
      </form>
    </section>
    </>



    
  )
}
