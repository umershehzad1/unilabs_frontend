"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const BlogsCards = ({ blogs }) => {

    return (
        <>
            {blogs.length > 0 && (
                <Link className="text-decoration-none" href={`/blogsdetail`} passHref>
                    <Card
                        className="rounded-4 mb-3"
                        style={{ background: "linear-gradient(182.83deg, #020F23 12.2%, #073A89 97.46%)" }}
                    >
                        <Card.Body>
                            <Row>
                                <Col xs={5}>
                                    <Image
                                        src={blogs[0].image}
                                        width={0}
                                        height={0}
                                        layout="responsive"
                                        style={{ width: "100%", height: "100%" }}
                                        alt="Blog Image"
                                    />
                                </Col>
                                <Col xs={7} className="d-flex flex-column justify-content-between">
                                    <div>

                                        <h2 className="text-white" style={{
                                            cursor: "pointer", whiteSpace: "nowrap",
                                            overflow: "hidden",
                                            textOverflow: "ellipsis"
                                        }}>{blogs[0].title}</h2>

                                        <p
                                            className="m-0"
                                            style={{
                                                color: "#818ea3",
                                                whiteSpace: "nowrap",
                                                overflow: "hidden",
                                                textOverflow: "ellipsis"
                                            }}
                                        >
                                            {blogs[0].description}
                                        </p>

                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p style={{ color: "#818ea3" }}>{blogs[0].date}</p>
                                        <p style={{ color: "#818ea3" }}>{blogs[0].author}</p>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Link>
            )}
            <Row>
                {blogs.slice(1).map((blog, index) => (

                    <Col xs={6} key={index}>
                        <Link className="text-decoration-none" href={`/blogsdetail`} passHref>
                            <Card
                                className="rounded-4 mb-3"
                                style={{ background: "linear-gradient(182.83deg, #020F23 12.2%, #073A89 97.46%)" }}
                            >
                                <Card.Body>
                                    <Image
                                        src={blog.image}
                                        width={0}
                                        height={0}
                                        layout="responsive"
                                        style={{ width: "100%", height: "100%" }}
                                        alt="Blog Image"
                                    />
                                    <h4 className="text-white mt-3" style={{ cursor: "pointer" }}>{blog.title}</h4>

                                    <p className="text-white m-0" style={{ minHeight: "40px", color: "#818ea3" }}>
                                        {blog.description}
                                    </p>
                                    <div className="d-flex justify-content-between">
                                        <p style={{ color: "#818ea3" }} className=" mb-0">{blog.date}</p>
                                        <p style={{ color: "#818ea3" }} className=" mb-0">{blog.author}</p>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default BlogsCards;
