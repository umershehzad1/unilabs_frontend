import Link from 'next/link';
import { Modal, Row, Col, Image } from 'react-bootstrap';
import { FaX } from 'react-icons/fa6';

function CustomModal({showModal,setShowModal}) {

    const handleClose = () => setShowModal(false);

    return (
        <Modal
            show={showModal}
            onHide={handleClose}
            // backdrop="static"
            centered
            dialogClassName="SignIn-modal-dialog"
            backdropClassName="SignIn-backdrop"
        >
            <div className='text-end p-3'>
            <FaX onClick={handleClose}  className='text-white'/>    
            </div>
            <Modal.Body>
                <Row className="align-items-center justify-content-center">
                    <Col md={6} xs={12} className="text-center d-flex flex-column align-items-center text-white">
                        <h1 className="mb-3 display-4 fw-bold">Sign In</h1>
                        <p className="text-center  f-of px-5">
                            To log in please use the method you used during the initial account opening process
                        </p>
                        <Link href="/login" className="mb-4  login-btn f-of" onClick={handleClose}>
                            Log In
                        </Link>
                        <Link href="/signup" className="mb-3  signup-btn  f-of" onClick={handleClose}>
                            Sign Up
                        </Link>
                        <div className="d-flex justify-content-center align-items-center gap-3 mb-3">

                            <Link onClick={handleClose} href="#" className="text-white text-decoration-none f-of">
                            Terms of Service
                        </Link>
                            <span className="text-white-50 f-of fs-3">|</span>
                            <Link onClick={handleClose} href="#" className="text-white text-decoration-none f-of"  >
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

export default CustomModal;
