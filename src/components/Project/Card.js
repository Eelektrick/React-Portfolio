import React, {useState} from "react";
import "./style.css";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Card(props){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="container">
            <div className="row">
                <div className="p-4 col-md-6">
                    <img className="img-fluid" id="projects" alt="portfolio imgs"  src={props.img} />
                    <div className="text-center">
                        <h2 className="text-center">{props.name}</h2>
                        <a href={props.deployLink} className="text-light link">Website</a>
                        <>
                            <a variant= "light" className="p-4 m-5 text-light link" onClick={handleShow}>
                                Information
                            </a>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                                </Modal.Header>
                                    <Modal.Body>{props.detail}</Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Close
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </>
                        <a href={props.githubLink} className="text-light link">Github</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;