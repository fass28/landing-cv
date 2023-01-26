import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <>
      <section className="contact-me py-5" id="contact">
        <div className="container">
          <div className="row justify-content-center py-5">
            <div className="col-12 col-lg-8">
              <form onSubmit={handleSubmit} action="">
                <div className="contact-title">
                  <h2>CONTACT ME</h2>
                  <span>
                    <hr />
                    <FontAwesomeIcon icon="fa-solid fa-star" />
                    <hr />
                  </span>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingName"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingName">Full name</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingEmail">Email address</label>
                </div>
                <div className="form-floating mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPhone"
                    placeholder="Password"
                  />
                  <label htmlFor="floatingPhone">Phone Number</label>
                </div>
                <div className="form-floating mb-4">
                  <textarea
                    type="password"
                    className="form-control"
                    id="floatingMessage"
                    placeholder="Password"
                  ></textarea>
                  <label htmlFor="floatingMessage">Message</label>
                </div>
                <button className="btn btn-success" id="button">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
