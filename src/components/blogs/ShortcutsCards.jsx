"use client";
import Image from "next/image";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const ShortcutCards = ({ blogs }) => {
    return (
        <>
         <h1 className='text-white'>Shortcut Links</h1>
         <hr className='text-white' />
            {blogs.map((blog, index) => (
                <Card
                    key={index}
                    className="rounded-4 mb-3"
                    style={{ background: "linear-gradient(182.83deg, #020F23 12.2%, #073A89 97.46%)" }}
                >
                    <Card.Body>
                        <Row>
                            <Col xs={5}>
                                <Image
                                    src={"/blogs.png"}
                                    width={0}
                                    height={0}
                                    layout="responsive"
                                    style={{ width: "100%", height: "100%" }}
                                    alt="Blog Image"
                                />
                            </Col>
                            <Col xs={7} className="d-flex flex-column justify-content-between">
                 
                                <h5 className="text-white" style={{
                                    whiteSpace: "nowrap",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    margin: "0"
                                }}>{blog.title}</h5>

                                
                                <div className="d-flex justify-content-between">
                                    <p style={{ color: "#818ea3" }}>{blog.date}</p>
                                    <p style={{ color: "#818ea3" }}>{blog.author}</p>
                                </div>
                            </Col>
                        </Row>
                    </Card.Body>
                </Card>
            ))}
        </>
    );
};

export default ShortcutCards;
