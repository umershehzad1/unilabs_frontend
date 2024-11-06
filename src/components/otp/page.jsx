"use client"
import { useState, useEffect } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import OTPInput from "otp-input-react";
import { useRouter } from 'next/navigation';

const OTPVerification = () => {
    const [OTP, setOTP] = useState("");
    const [timer, setTimer] = useState(120);
    const [canResend, setCanResend] = useState(false);
    const router = useRouter()

    useEffect(() => {
        if (timer > 0) {
            const countdown = setTimeout(() => setTimer(timer - 1), 1000);
            return () => clearTimeout(countdown);
        } else {
            setCanResend(true);
        }
    }, [timer]);

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        router.push("/resetpassword")

        console.log('Entered OTP:', OTP);
    };

    const handleResendOTP = () => {
        setCanResend(false);
        setTimer(120);  // Reset timer for next resend
        setOTP("");  // Clear the OTP input
        console.log("OTP has been resent to your email");
    };

    return (
        <Container fluid className="px-md-4 text-white d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
            <Row className="w-100 justify-content-center">
                <Col xs={12} md={6}>
                    <div className="rounded-4 py-3 px-md-5 my-4 pb-5" style={{ background: "#589CFF0A" }}>
                        <h1 className="fw-bold text-center border-bottom border-success pb-2">Verify OTP</h1>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-4 text-center">
                                <Form.Label>Enter the OTP sent to your email</Form.Label>
                                <OTPInput
                                    value={OTP}
                                    onChange={setOTP}
                                    OTPLength={4}
                                    otpType="number"
                                    autoFocus
                                    className="justify-content-center otp-input"
                                />
                            </Form.Group>
                            <div className="d-flex justify-content-center">
                                <Button type="submit" className="login-btn f-of">Verify OTP</Button>
                            </div>
                        </Form>
                        <div className="text-center mt-3">
                            {canResend ? (
                                <span
                                    className="text-primary cursor-pointer"
                                    onClick={handleResendOTP}
                                >
                                    Resend OTP?
                                </span>
                            ) : (
                                <p>{`Resend code in ${formatTime(timer)}`}</p>
                            )}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default OTPVerification;

