"use client";
import { LoginForm, UsersCreate } from '@/services/users';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Alert, Button, Col, Container, Form, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import PhoneInput from 'react-phone-number-input';
import { AiOutlineDown } from 'react-icons/ai';

function Signup() {
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        token: '',
        purchaseAmount: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.email || !formData.password) {
            Swal.fire({
                title: 'Error',
                text: 'Please enter your credentials.',
                icon: 'error',
                confirmButtonText: 'OK',
            });
            return;
        }

        Swal.fire({
            title: 'Creating Account...',
            html: `<div class="spinner-container"><div class="loading-spinner"></div></div><p>Please wait while we create your account.</p>`,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            backdrop: true,
        });

        try {
            const response = await UsersCreate(formData);
            const user = response.data.data;
            if (user) {
                localStorage.setItem('user', JSON.stringify(user));
                router.push("/dashboard");
                Swal.close();
            }
        } catch (error) {
            console.log(error)
            const errorMessage = error.response?.data?.message || error.response?.data?.error || 'Something went wrong. Please try again.';
            Swal.fire({
                title: 'Signup Failed',
                text: errorMessage,
                icon: 'error',
                confirmButtonText: 'Ok',
            });
        }
    };
    const [isChecked, setIsChecked] = useState({ notifications: false, terms: false });

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        setIsChecked((prev) => ({ ...prev, [name]: checked }));
    };

    const handleTogglePassword = () => setShowPassword((prev) => !prev);
    return (
        <Container className="d-flex justify-content-center align-items-center  text-white" style={{ background: "#010B18" }}>
            <Row className="align-items-center justify-content-center w-100">
                <h1 className="display-4 fw-bold text-center mt-5 pt-5 mb-3">Create Your Account</h1>
                {error && <Alert variant="danger" className="text-center">{error}</Alert>}

                <Col xs={12} md={11}>
                    <Form onSubmit={handleSubmit} style={{ width: '100%' }}>
                        <Row className="mb-3">
                            <Col className="mb-3" md={6}>
                                <Form.Group className="form-floating">
                                    <Form.Control
                                        type="text"
                                        placeholder="First Name"
                                        name="firstName"

                                        value={formData?.firstName}
                                        onChange={handleChange}
                                        className="px-3 pb-2 border-0 input-custom"
                                        required
                                    />
                                    <Form.Label>Enter your first name</Form.Label>
                                </Form.Group>
                            </Col>
                            <Col className="mb-3" md={6}>
                                <Form.Group className="form-floating">
                                    <Form.Control
                                        type="text"
                                        placeholder="Last Name"
                                        name="lastName"

                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className="px-3 pb-2 border-0 input-custom"
                                        required
                                    />
                                    <Form.Label>Enter your last name</Form.Label>
                                </Form.Group>
                            </Col>
                            <Col className="mb-3" md={6}>
                                <Form.Group className="form-floating">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        name='email'
                                        className="px-3 pb-2 border-0 input-custom"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                    <Form.Label>Enter your email address</Form.Label>
                                </Form.Group>
                            </Col>
                            <Col className="mb-3" md={6}>
                                <Form.Group >
                                    <PhoneInput
                                        placeholder="Enter phone number"
                                        value={formData.phone}
                                        onChange={(value) => setFormData((prev) => ({ ...prev, phone: value }))}

                                        style={{ padding: "13px" }}
                                        className="px-3  border-0 input-custom rounded-2"
                                        required
                                        international
                                        defaultCountry="US"
                                    />
                                </Form.Group>
                            </Col>
                            <Col className="mb-3" md={6}>
                                <Form.Group className="form-floating">
                                    <Form.Control
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Password"

                                        className="px-3 pb-2 border-0 input-custom"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange} required
                                    />
                                    <Form.Label>Enter your password</Form.Label>
                                    <span
                                        onClick={handleTogglePassword}
                                        style={{
                                            cursor: 'pointer',
                                            position: 'absolute',
                                            right: '10px',
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            color: 'green',
                                        }}
                                        className="eye-icon"
                                    >
                                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                                    </span>
                                </Form.Group>
                            </Col>
                            <Col className="mb-3" md={6}>
                                <Form.Group className="form-floating">
                                    <Form.Control
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Confirm Password"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        name="confirmPassword"

                                        className="px-3 pb-2 border-0 input-custom"
                                        required
                                    />
                                    <Form.Label>Re-enter your password</Form.Label>
                                </Form.Group>
                            </Col>
                            <Col className="mb-3" md={6}>
                                <Form.Group className="mb-3 form-floating">
                                    <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
                                        <Form.Select
                                            className="px-3 py-3 border-0 input-custom"
                                            defaultValue=""
                                            value={formData.token}
                                            name="token"

                                            onChange={handleChange}
                                            aria-label="Select Token (Optional)"
                                            style={{
                                                cursor: "pointer",
                                                appearance: 'none',
                                                paddingRight: '2rem',
                                                backgroundColor: 'transparent',
                                                color: 'white',
                                                fontSize: '1rem'
                                            }}
                                        >
                                            <option value="" disabled selected style={{ backgroundColor: '#1D2632', color: 'lightgreen' }}>
                                                Select Token (Optional)
                                            </option>                                            <option value="btc" style={{ backgroundColor: '#1D2632', color: 'lightgreen' }}>BTC</option>
                                            <option value="usd" style={{ backgroundColor: '#1D2632', color: 'lightgreen' }}>USD</option>
                                            <option value="eth" style={{ backgroundColor: '#1D2632', color: 'lightgreen' }}>ETH</option>
                                        </Form.Select>

                                        <AiOutlineDown
                                            style={{
                                                position: 'absolute',
                                                bottom: '18px',
                                                right: '1rem',
                                                pointerEvents: 'none',
                                                color: '#83888E',
                                                fontSize: '1.25rem'
                                            }}
                                        />
                                    </div>
                                </Form.Group>
                            </Col>

                            <Col className="mb-3" md={6}>
                                <Form.Group className="mb-3 form-floating">
                                    <Form.Control
                                        type="number"
                                        placeholder="Purchase Amount"
                                        value={formData.purchaseAmount}
                                        name="purchaseAmount"

                                        onChange={handleChange}
                                        className="px-3 pb-2 border-0 input-custom"
                                    />
                                    <Form.Label>Purchase Amount (Optional)</Form.Label>
                                </Form.Group>
                            </Col>
                        </Row>

                        <Form.Group className="mt-3 mb-3">
                            <Form.Check
                                type="checkbox"
                                name="notifications"
                                checked={isChecked.notifications}
                                onChange={handleCheckboxChange}
                                className="custom-checkbox"
                                label={
                                    <span className="text-white ps-3">
                                        I agree to receive email notifications from UNILabs with order information, special offers, and updates.
                                    </span>
                                }
                            />
                            <Form.Check
                                type="checkbox"
                                name="terms"
                                checked={isChecked.terms}
                                onChange={handleCheckboxChange}
                                className="custom-checkbox"
                                label={
                                    <span className="text-white ps-3">
                                        I agree to the
                                        <Link href="#" className="text-white px-2">Terms and Conditions</Link>
                                        and
                                        <Link href="#" className="text-white px-2">Privacy Policy</Link>
                                    </span>
                                }
                            />
                        </Form.Group>



                        <OverlayTrigger
                            placement="top"
                            overlay={
                                (!isChecked.notifications || !isChecked.terms) ? (
                                    <p className='custom-tooltip f-of '>Please check all conditions to proceed.</p>
                                ) : <></>
                            }

                        >
                            <div className="d-flex justify-content-center">
                                <Button
                                    type="submit"
                                    className="mb-4 login-btn f-of"
                                    disabled={!isChecked.notifications || !isChecked.terms}
                                >
                                    Create Account
                                </Button>
                            </div>
                        </OverlayTrigger>
                    </Form>
                </Col>

                <div className="d-flex flex-md-row flex-column align-items-center justify-content-center  gap-5 mt-3">
                    <p className="text-white f-of mb-0">Already have an account?</p>
                    <Link href="/login" className="text-white f-of signup-btn">Log in</Link>
                </div>

                <Col xs={12} className="text-center mt-4">
                    <div className="d-flex justify-content-center align-items-center gap-3 mb-3">

                        <Link href="terms&conditions" className="text-white text-decoration-none f-of">
                            Terms of Service
                        </Link>
                        <span className="text-white-50 f-of fs-3">|</span>
                        <Link href="/privacy&policy" className="text-white text-decoration-none f-of"  >
                            Privacy Policy
                        </Link>
                    </div>
                    <p className="f-of">2024 Copyrights UNILABS</p>
                </Col>
            </Row>
        </Container>
    );
}

export default Signup;
