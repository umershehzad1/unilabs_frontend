import Link from 'next/link';
import { Col, Image, Modal, Row } from 'react-bootstrap';

function BasicModal({ showModal, setShowModal }) {

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (

        <Modal size='xl'   show={showModal} onHide={handleClose} dialogClassName='SignIn-modal-dialog'>
            <Modal.Header closeButton className='border-0' >
            </Modal.Header>
            <Modal.Body>
                <Row className="align-items-center justify-content-center">
                    <Col md={6} xs={12} className="text-center d-flex flex-column align-items-center text-white">
                        <h1 className="mb-3 display-4 fw-bold">Sign In</h1>
                        <p className="text-center f-of px-5">
                            To log in please use the method you used during the initial account opening process
                        </p>
                        <Link href="/login" className="mb-4 login-btn f-of" onClick={handleClose}>
                            Log In
                        </Link>
                        <Link href="/signup" className="mb-3 signup-btn f-of" onClick={handleClose}>
                            Sign Up
                        </Link>
                        <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
                            <Link onClick={handleClose} href="#" className="text-white text-decoration-none f-of">
                                Terms of Service
                            </Link>
                            <span className="text-white-50 f-of fs-3">|</span>
                            <Link onClick={handleClose} href="#" className="text-white text-decoration-none f-of">
                                Privacy Policy
                            </Link>
                        </div>
                        <p className="f-of">2024 Copyrights UNILABS</p>
                    </Col>

                    <Col md={6} className="d-md-flex d-none align-items-center justify-content-center">
                        <Image
                            src="/dashboard/SignModalBg.png"
                            rounded
                            fluid
                            alt="Auth Modal"
                            className="modal-image"
                            style={{ maxHeight: '80%', objectFit: 'cover', borderRadius: '20px' }}
                        />
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default BasicModal;
