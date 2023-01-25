import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import img01 from "../assets/01.png"
import img02 from "../assets/02.png"
import img03 from "../assets/03.png"
import img04 from "../assets/04.png"
import img05 from "../assets/05.png"
import img06 from "../assets/06.png"

export const Portafolio = () => {
  return (
    <section className="container d-flex align-items-center flex-column portafolio">
      <div className='portfolio-title'>
        <h2>PORTFOLIO</h2>
        <span>
            <hr />
            <FontAwesomeIcon icon="fa-solid fa-star" /> 
            <hr />
        </span>
      </div>
     <div className='row'>
        <img src={img01} alt="" className='col-4' />
        <img src={img02} alt="" className='col-4'/>
        <img src={img03} alt="" className='col-4'/>
     </div>
     <div className='row'>
        <img src={img04} alt="" className='col-4' />
        <img src={img05} alt="" className='col-4'/>
        <img src={img06} alt="" className='col-4'/>
     </div>
    </section>
  )
}
