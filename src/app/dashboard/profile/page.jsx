"use client";
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import PhoneInput from 'react-phone-number-input';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Profile = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        password: '',
        oldPassword: '',
        confirmPassword: ''
    });
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => setShowPassword(!showPassword);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handlePhoneChange = (value) => {
        setFormData((prevData) => ({ ...prevData, phone: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('Form Data:', formData);
    };

    return (
        <Container fluid className="px-md-4 text-white">
            <div className="rounded-4 py-3 px-md-5 my-4 pb-5" style={{ background: "#589CFF0A" }}>
                <div className="page-bg bg-top py-5">
                    <h1 className="fw-bold border-bottom border-success pb-2">Profile Details</h1>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3 mt-4   ">
                            <Col className="mb-3" md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">Enter your full name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="fullName"
                                        placeholder="First Name"

                                        className="px-4 py-3 border-0 input-custom rounded"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                            <Col className="mb-3" md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">Enter your email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="email"

                                        className="px-4 py-3 border-0 input-custom rounded"
                                        value={formData.email}
                                        required
                                    />
                                </Form.Group>
                            </Col>

                            <Col className="mb-3" md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">Enter phone number</Form.Label>
                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        value={formData.phone}
                                        onChange={handlePhoneChange}
                                        className="px-3 py-3 border-0 input-custom rounded-2"
                                        required
                                        international
                                        defaultCountry="US"
                                    />
                                </Form.Group>
                            </Col>

                            <Col className="mb-3" md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">Enter Old Password</Form.Label>
                                    <div className="position-relative">
                                        <Form.Control
                                            type={showPassword ? 'text' : 'password'}
                                            name="oldPassword"
                                            placeholder="Old Password"

                                            className="px-4 py-3 border-0 input-custom rounded"
                                            value={formData.oldPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span
                                            onClick={handleTogglePassword}
                                            style={{
                                                cursor: 'pointer',
                                                position: 'absolute',
                                                right: '10px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: 'green',
                                                fontSize: '1.2rem'
                                            }}
                                            className="eye-icon"
                                        >
                                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                                        </span>
                                    </div>
                                </Form.Group>
                            </Col>

                            <Col className="mb-3" md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">Enter New Password</Form.Label>
                                    <div className="position-relative">
                                        <Form.Control
                                            type={showPassword ? 'text' : 'password'}
                                            name="password"
                                            placeholder="New Password"

                                            className="px-4 py-3 border-0 input-custom rounded"
                                            value={formData.password}
                                            onChange={handleChange}
                                            required
                                        />
                                        <span
                                            onClick={handleTogglePassword}
                                            style={{
                                                cursor: 'pointer',
                                                position: 'absolute',
                                                right: '10px',
                                                top: '50%',
                                                transform: 'translateY(-50%)',
                                                color: 'green',
                                                fontSize: '1.2rem'
                                            }}
                                            className="eye-icon"
                                        >
                                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                                        </span>
                                    </div>
                                </Form.Group>
                            </Col>

                            <Col className="mb-3" md={6}>
                                <Form.Group>
                                    <Form.Label className="fw-semibold">Re-enter New Password</Form.Label>
                                    <Form.Control
                                        type={showPassword ? 'text' : 'password'}
                                        name="confirmPassword"
                                        placeholder="Confirm New Password"

                                        className="px-4 py-3 border-0 input-custom rounded"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Col>
                        </Row>

                        <div className="d-flex justify-content-center">
                            <Button type="submit" className="mb-4 login-btn f-of  py-2">
                                Update Profile
                            </Button>
                        </div>
                    </Form>
                </div>
            </div>
        </Container>
    );
};

export default Profile;
