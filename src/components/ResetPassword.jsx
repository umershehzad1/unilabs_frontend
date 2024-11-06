"use client";
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ResetPasswordService } from '@/services/users';
import OTPInput from 'otp-input-react';
import { useRouter, useSearchParams } from 'next/navigation';
import Swal from 'sweetalert2';
import { Salsa } from 'next/font/google';

const ResetPassword = () => {
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
        otp: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [otpValue, setOtpValue] = useState('');
    const [isPasswordReset, setIsPasswordReset] = useState(false);

    const router = useRouter();
    const query = useSearchParams()
    const email = query.get("email");
    const handleTogglePassword = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleOtpChange = (otp) => {
        setOtpValue(otp);
        setFormData((prevData) => ({ ...prevData, otp }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Passwords do not match.',
            });
            return;
        }

        try {
            // Prepare data to send to the reset password service
            const data = { email, password: formData.password, code: formData.otp };
            const response = await ResetPasswordService(data);

            if (response) {
                Swal.fire({
                    icon: 'success',
                    title: 'Password Updated',
                    text: 'Your password has been successfully changed.',
                }).then(() => {
                    router.push('/login'); // Redirect after successful reset
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Reset Failed',
                    text: 'Failed to reset password, please try again.',
                });
            }
        } catch (error) {
            console.error('Error resetting password:', error);
          
        }
    };


    return (
        <Container fluid className="px-md-4 text-white d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row className="w-100 justify-content-center">
                <Col xs={12} md={6}>
                    <div className="rounded-4 py-3 px-md-5 my-4 pb-5" style={{ background: "#589CFF0A" }}>
                        <h1 className="fw-bold text-center border-bottom border-success pb-2">Reset Password</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-4 d-flex justify-content-center flex-column align-items-center">
                                <Form.Label className='f-of'>Enter OTP</Form.Label>
                                <OTPInput
                                    value={otpValue}
                                    onChange={handleOtpChange}
                                    OTPLength={6}  
                                    separator={<span>-</span>}
                                    inputClassName={"otp-input"}
                                   
                                />
                            </Form.Group>
                            <Form.Group className="mb-4 position-relative">
                                <Form.Label className='f-of'>Enter new password</Form.Label>
                                <Form.Control
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    placeholder="New Password"
                                    className="px-3 py-3 border-0 input-custom"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                                <span
                                    onClick={handleTogglePassword}
                                    style={{
                                        cursor: 'pointer',
                                        position: 'absolute',
                                        top: '50%',
                                        right: '10px',
                                        transform: 'translateY(10%)',
                                        color: 'green',
                                    }}
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </Form.Group>

                            <Form.Group className="mb-4">
                                <Form.Label className='f-of'>Confirm new password</Form.Label>
                                <Form.Control
                                    type={showPassword ? 'text' : 'password'}
                                    name="confirmPassword"
                                    placeholder="Confirm Password"
                                    className="px-3 py-3 border-0 input-custom"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>



                            <div className="d-flex justify-content-center">
                                <Button type="submit" className="login-btn f-of">Reset Password</Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ResetPassword;
