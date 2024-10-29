"use client"
import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import SectionHeading from '../shared/SectionHeading'
import Divider from '../shared/Divider'

const Attributes = () => {
    const attributes = [
        {
            id: 1,
            title: "Coin Acquisition",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            colSize: 9
        },
        {
            id: 2,
            title: "Coin Acquisition",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            colSize: 3
        },
        {
            id: 3,
            title: "Coin Acquisition",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore",
            colSize: 3
        },
        {
            id: 4,
            title: "Coin Acquisition",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
            colSize: 9
        }
    ];

    return (
        <>
            <Container>
                <SectionHeading heading={"CORE ATTRIBUTES"} />
                <Divider/>


                <Row className='py-4'>
                    {attributes.map(attribute => (
                        <Col key={attribute.id} xs={12} lg={attribute.colSize}>
                            <Card className="bg-black py-3 px-3 presales mb-5" style={{ borderRadius: "20px" }}>
                                <Card.Body className="text-white mt-3">
                                    <h3>{attribute.title}</h3>
                                    <Card.Text style={{ color: "#aaaaaa" }}>{attribute.text}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    )
}

export default Attributes
