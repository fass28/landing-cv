import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import "./portfolio.css";

export const PortfolioCard = ({ image, title }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="col-md-6 col-lg-4" onClick={handleShow}>
        <div className="portfolio-card mb-5 position-relative rounded overflow-hidden">
          <div className="portfolio-content position-absolute h-100 w-100 d-flex align-items-center justify-content-center">
            <div className="text-white">
              <FontAwesomeIcon size="4x" icon="fa-solid fa-plus" />
            </div>
          </div>
          <img className="img-fluid" src={`/portfolio/${image}`} alt="" />
        </div>
      </div>

      <Modal show={show} onHide={handleClose} size={'lg'}>
        <Modal.Header closeButton>
          <Modal.Title>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            Woohoo, you're reading this text in a modal!
            <img className="img-fluid" src={`/portfolio/${image}`} alt="" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
