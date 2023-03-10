import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import avatarImg from "../assets/avataaars.svg";

export const Start = () => {
  return (
    <>
      <section
        className="d-flex align-items-center flex-column start"
        id="start"
      >
        <div className="container text-center">
          <img src={avatarImg} alt="" className="img-fluid" />
          <h1>START BOOTSTRAP</h1>
          <span>
            <hr />
            <FontAwesomeIcon icon="fa-solid fa-star" />
            <hr />
          </span>
          <h6>Graphic Artist - Web Designer - Illustrator</h6>
        </div>
      </section>
    </>
  );
};
