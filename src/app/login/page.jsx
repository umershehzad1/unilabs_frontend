"use client";
import { LoginForm } from "@/services/users";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
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
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data?.error ||
        "Something went wrong. Please try again.";
      Swal.fire({
        title: "Login Failed",
        text: errorMessage,
        icon: "error",
        confirmButtonText: "Ok",
        showClass: { popup: "animate__animated animate__shakeX" },
        hideClass: { popup: "animate__animated animate__fadeOut" },
      });
    }
  };

  const handleTogglePassword = () => setShowPassword((prev) => !prev);

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center  text-white"
      style={{ background: "#010B18" }}
    >
      <Row
        className="align-items-center justify-content-center w-100"
        style={{ maxWidth: "600px" }}
      >
        <h1 className="display-4 fw-bold text-center mt-5 pt-5 mb-3">Log In</h1>
        {error && (
          <Alert variant="danger" className="text-center">
            {error}
          </Alert>
        )}

        <Col xs={12}>
          <Form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Form.Group className="mb-3 form-floating">
              <Form.Control
                type="email"
                placeholder="Email"
                className="px-3 pb-2 border-0 input-custom"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Form.Label>Email</Form.Label>
            </Form.Group>

            <div style={{ position: "relative" }}>
              <Form.Group className="mb-3 form-floating">
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="px-3 pb-2 border-0 input-custom"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <Form.Label>Password</Form.Label>
                <span
                  onClick={handleTogglePassword}
                  style={{
                    cursor: "pointer",
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: "green",
                  }}
                  className="eye-icon"
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </span>
              </Form.Group>
            </div>

            <Form className="d-flex flex-md-row flex-column justify-content-between align-items-center mt-3 mb-5">
              <Form.Check
                type="checkbox"
                id="flexCheckDefault"
                className="form-check custom-checkbox"
                label={
                  <span className="text-white  ps-3 f-of fs-5">
                    Remember me
                  </span>
                }
              />
              <Link
                href="/forgetpassword"
                className="f-of text-white text-decoration-none fw-bold"
              >
                Forgot Password?
              </Link>
            </Form>
            <div className="d-flex justify-content-center">
              <Button type="submit" className="mb-4  login-btn f-of">
                Log In
              </Button>
            </div>
          </Form>
        </Col>
        <div className="d-flex flex-md-row flex-column justify-content-between   align-items-center ">
          <p className="f-of">Don’t have account yet?</p>

          <Link href="/signup" className="mb-3  signup-btn  f-of">
            Sign Up
          </Link>
        </div>
        <Col xs={12} className="text-center mt-4">
          <div className="d-flex justify-content-center align-items-center gap-3 mb-3">
            <Link href="#" className="text-white text-decoration-none f-of">
              Terms of Service
            </Link>
            <span className="text-white-50 f-of fs-3">|</span>
            <Link href="#" className="text-white text-decoration-none f-of">
              Privacy Policy
            </Link>
          </div>
          <p className="f-of">2024 Copyrights UNILABS</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
