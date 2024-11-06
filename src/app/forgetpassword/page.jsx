"use client";
import { ForgotPasswordService } from '@/services/users';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import Swal from 'sweetalert2';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
const router =useRouter()
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ForgotPasswordService({ "email": email });

            if (response) {
                router.push(`/reset?email=${email}`); 
                Swal.fire({
                    title: 'Success!',
                    text: 'Check your email for reset instructions.',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'There was an issue processing your request.',
                    icon: 'error',
                    confirmButtonText: 'Try Again'
                });
            }
        } catch (error) {
            console.error('Error:', error);
          
        }
    };


    return (
        <Container fluid className="px-md-4 text-white d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row className="w-100 justify-content-center">
                <Col xs={12} md={6}>
                    <div className="rounded-4 py-3 px-md-5 my-4 pb-5" style={{ background: "#589CFF0A" }}>
                        <h1 className="fw-bold text-center border-bottom border-success pb-2">Forgot Password</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-4">
                                <Form.Label className='f-of'>Enter your registered email</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Email"
                                    className="px-3 py-3 border-0 input-custom"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                                <Button type="submit" className="login-btn f-of">Send OTP</Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ForgotPassword;
