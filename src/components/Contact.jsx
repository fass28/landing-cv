import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
export const Contact = () => {
  return (
    <>
    <section className="contact-me">
      <form autocomplete="off">
        <div className='contact-title'>
          <h2>CONTACT ME</h2>
          <span>
              <hr />
              <FontAwesomeIcon icon="fa-solid fa-star" /> 
              <hr />
          </span>
        </div>
        <div >
          <input placeholder="Full name" type="text" />
        </div>
        <div >
          <input placeholder="Email address" type="text"  />
        </div>
        <div >
          <input placeholder="Phone number" type="text"  />
        </div>
        <div >
          <textarea placeholder="Message" type="text"  />
        </div>
        <button className="btn btn-success">Send</button>
      </form>
    </section>
    </>



    
  )
}
