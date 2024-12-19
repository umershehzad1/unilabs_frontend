"use client";
import LoginLeftAnime from "@/components/shared/LoginLeftAnime";
import { UsersCreate } from "@/services/users";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

function SignUp() {
    const [email, setEmail] = useState("");
    const [fullName, setFullName] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRePassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { email, password, fullName };

        if (password !== repassword || password === "") {
            Swal.fire({
                title: "Password Mismatch",
                text: "Passwords do not match or are empty. Please try again.",
                icon: "error",
                confirmButtonText: "OK",
            });
        }

        if (!email || !password) {
            Swal.fire({
                title: "Error",
                text: "Please enter your credentials.",
                icon: "error",
                confirmButtonText: "OK",
            });
            return;
        }

        Swal.fire({
            title: "Signing Up...",
            html: `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
            <div class="spinner-container" style="display: flex; justify-content: center; align-items: center;">
                <div class="loading-spinner" 
                    style="width: 40px; height: 40px; border: 4px solid #f3f3f3; border-top: 4px solid #3498db; border-radius: 50%; animation: spin 1s linear infinite;">
                </div>
            </div>
            <p style="margin: 0; color: #555; font-size: 1rem;">Please wait while we process your sign-up.</p>
        </div>
    `,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            backdrop: true,
        });


        try {
            const response = await UsersCreate(data);
            const user = response.data.data;
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                router.push("/dashboard");
                Swal.close();
            }
        } catch (error) {
            const errorMessage = error.response?.data?.errors[0].msg || error.response?.data?.error || "Something went wrong. Please try again.";
            console.log(errorMessage)
            Swal.fire({
                title: "Sign Up Failed",
                text: errorMessage,
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    const handleTogglePassword = () => setShowPassword((prev) => !prev);

 
    return (
        <Container fluid className="d-flex vh-100 overflow-hidden">
            <Col xs={12} md={6} className="position-relative d-md-flex d-none  align-items-center justify-content-center" >
                <LoginLeftAnime />
            </Col>

            <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center text-white" >
                <h1 className="display-5 fw-bold mb-4">Sign Up</h1>

                <Button
                    variant="light"
                    className="mb-4 w-100 py-2 d-flex align-items-center justify-content-center"
                    style={{ maxWidth: "400px" }}
                >
                    <FcGoogle size={20} className="me-2" />
                    Sign Up with Google
                </Button>
                <div class="d-flex align-items-center my-4">
                    <div class="custom-divider"></div>
                    <span class="mx-3 text-white">Or</span>
                    <div class="custom-divider"></div>
                </div>
                <Form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "400px" }}>
                    <Form.Group className="mb-3 ">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Full Name"
                            className="px-3 py-2 border-0 input-custom"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3 ">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            className="px-3 py-2 border-0 input-custom"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Form.Group>

                    <Form.Group className="mb-3 ">
                        <div className="d-flex   justify-content-between align-items-center">

                            <Form.Label>Password</Form.Label>
                            <Button className="bg-transparent border-0 p-0" onClick={handleTogglePassword}
                            >                                {showPassword ? <>

                                <FaEye className="mx-2" />
                                <small>
                                    Hide
                                </small>
                            </> :
                                <>
                                    <FaEyeSlash className="mx-2" />
                                    <small>
                                        Show
                                    </small>
                                </>
                                }
                            </Button>
                        </div>
                        <Form.Control
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="px-3 py-2 border-0 input-custom"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Form.Group>
                    <Form.Group className=" ">
                        <div className="d-flex   justify-content-between align-items-center">

                            <Form.Label>Re-enter Password</Form.Label>
                            <Button className="bg-transparent border-0 p-0" onClick={handleTogglePassword}
                            >                                {showPassword ? <>

                                <FaEye className="mx-2" />
                                <small>
                                    Hide
                                </small>
                            </> :
                                <>
                                    <FaEyeSlash className="mx-2" />
                                    <small>
                                        Show
                                    </small>
                                </>
                                }
                            </Button>
                        </div>
                        <Form.Control
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                            className="px-3 py-2 border-0 input-custom"
                            value={repassword}
                            onChange={(e) => setRePassword(e.target.value)}
                            required
                        />
                    </Form.Group>


                    <div className="d-flex flex-md-row flex-column justify-content-center align-items-center py-4 gap-3">
                        <Button type="submit" className=" greenBtn ">
                            Sign Up
                        </Button>
                        <p className="mb-0">
                            Don’t have an account? <Link href="/login" className=" text-white">Sign In</Link>
                        </p>
                    </div>
                </Form>
            </Col>
        </Container>
    );
}

export default SignUp;
