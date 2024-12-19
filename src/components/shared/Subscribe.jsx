import React from 'react'
import { Button, Container, Form } from 'react-bootstrap'

const Subscribe = () => {
    return (
        <Container
            style={{ backgroundColor: "var(--green)" }}
            className="p-5 d-flex justify-content-center align-items-center flex-column"
        >
            <h2
                style={{ color: "#161617", fontWeight: "800!important" }}
                className=" text-uppercase col-xl-7 text-center"
            >
                <strong> Stay informed and never miss an
                    <span className="px-2" style={{ color: "#fff" }}>
                        UNILABS
                    </span>
                    update!</strong>
            </h2>
            <div className="d-flex py-3 flex-md-row flex-column justify-content-center align-items-center gap-2">
                <Form.Control
                    className="subscribeInput w-100 py-2"
                    placeholder="Your email address..."
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                />
                <Button variant="dark" style={{ color: "var(--green)" }} className="rounded-0 fw-bold  py-2">
                    <small>                    Subscribe
                    </small>                </Button>
            </div>
        </Container>)
}

export default Subscribe