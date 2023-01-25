import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Footer = () => {
  return (
    <>
      <section className="footer  text-center">
        <div className="row">
          <ul className="col-4">
            <h4>LOCATION</h4>
            <h5>2215 John Daniel Drive Clark, MO 65243</h5>
          </ul>
          <ul className="col-4 ">
            <h4>AROUND THE WEB</h4>
            <a href="" id='icon'><FontAwesomeIcon icon={['fab', 'facebook']} className="icon" /> </a>
            <a href="" id='icon'><FontAwesomeIcon icon={['fab', 'twitter']} className="icon"/> </a>
            <a href="" id='icon'><FontAwesomeIcon icon={['fab', 'linkedin']}  className="icon"/> </a>
            <a href="" id='icon'><FontAwesomeIcon icon={['fab', 'instagram']}  className="icon"/> </a>
          </ul>
          <ul className="col-4">
            <h4>ABOUT FREELANCER</h4>
            <h5>Freelance is a free to use, MIT licensed Bootstrap theme created by <a href="">Start Bootstrap.</a></h5>
          </ul>
        </div>
        <div>

        </div>

      </section>
        <div className='copyright'>
          <h6>Copyright © Your Website 2022</h6>
        </div>
    </>
  )
}
