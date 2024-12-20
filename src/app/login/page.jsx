"use client";
import LoginLeftAnime from "@/components/shared/LoginLeftAnime";
import { LoginForm } from "@/services/users";
import { AuthVerify } from "@/utils/auth.utils";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { loadFull } from "tsparticles";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();
    const Auth = AuthVerify()
    useEffect(() => {
        if (Auth) {
            router.back();
        }
    }, [Auth, router]); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = { email, password };

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
            title: "Logging In...",
            html: `<div class="spinner-container"><div class="loading-spinner"></div></div><p>Please wait while we log you in.</p>`,
            showConfirmButton: false,
            allowOutsideClick: false,
            allowEscapeKey: false,
            backdrop: true,
        });

        try {
            const response = await LoginForm(data);
            const user = response.data.data;
            if (user) {
                localStorage.setItem("user", JSON.stringify(user));
                router.push("/dashboard");
                Swal.close();
            }
        } catch (error) {
            const errorMessage = error.response?.data?.errors[0]?.msg || error.response?.data?.error || "Something went wrong. Please try again.";
            console.log(errorMessage)
            Swal.fire({
                title: "Login Failed",
                text: errorMessage,
                icon: "error",
                confirmButtonText: "Ok",
            });
        }
    };

    const handleTogglePassword = () => setShowPassword((prev) => !prev);

    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Container fluid className="d-flex vh-100 overflow-hidden">
            <Col xs={12} md={6} className="position-relative d-md-flex d-none  align-items-center justify-content-center" >
                <LoginLeftAnime />
            </Col>

            <Col xs={12} md={6} className="d-flex flex-column justify-content-center align-items-center text-white" >
                <h1 className="display-5 fw-bold mb-4">Sign In</h1>

                {/* <Button
                    variant="light"
                    className="mb-4 w-100  py-2 d-flex align-items-center justify-content-center"
                    style={{ maxWidth: "400px" }}
                >
                    <FcGoogle size={20} className="me-2" />
                    Sign in with Google
                </Button>
                <div class="d-flex d align-items-center my-4">
                    <div class="custom-divider"></div>
                    <span class="mx-3 text-white">Or</span>
                    <div class="custom-divider"></div>
                </div>
 */}




                <Form onSubmit={handleSubmit} style={{ width: "100%", maxWidth: "400px" }}>
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

                    <div style={{ position: "relative" }}>
                        <Form.Group className=" ">
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
                    </div>
                    <div className="text-end mt-2">
                        <Link href="/forgetpassword" className="text-white text-decoration-none ">
                            Forgot Password?
                        </Link>
                    </div>

                    <div className="d-flex flex-md-row flex-column justify-content-center align-items-center py-4 gap-3">
                        <Button type="submit" className=" greenBtn ">
                            Sign In
                        </Button>
                        <p className="mb-0">
                            Don’t have an account? <Link href="/signup" className=" text-white">Sign Up</Link>
                        </p>
                    </div>
                </Form>
            </Col>
        </Container>
    );
}

export default Login;
