"use client";

import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
const data = [
    {
        image: "/news1.png",
        link: "/newsDetail",
        date: "January 10, 2024",
        tag: "development",
        title: "Bitcoin Hits Milestone",
        content:
            "velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec.",
    },
    {
        image: "/news2.png",
        link: "/newsDetail",
        date: "January 10, 2024",
        tag: "development",
        title: "Understand the Splitting of Bitcoin",
        content:
            "velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec.",
    },
    {
        image: "/news3.png",
        link: "/newsDetail",
        date: "January 10, 2024",
        tag: "development",
        title: " A Steady Decline Following a Peak",
        content:
            "velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec.",
    },
    {
        image: "/news1.png",
        link: "/newsDetail",
        date: "January 10, 2024",
        tag: "development",
        title: "How creative industries benefit from blockchain",
        content:
            "velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec.",
    },

];

const News = () => {
    return (
        <Container className="text-white news">
            <Fade direction="down" triggerOnce>
                <h1 className="py-2 text-center fw-bold">Latest News</h1>
            </Fade>
            <Row className="mb-5 d-flex">


                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    className='py-5 latestnews position-relative'
                    spaceBetween={50}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        320: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1576: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                    }}
                    loop={true}
                >
                    {data.map((item, index) => (
                        <SwiperSlide key={index}>
                            <Fade direction="up" triggerOnce>
                                <Card style={{ backgroundColor: "#232325" }} className="text-secondary">
                                    <Card.Img
                                        variant="top"
                                        src={item.image}
                                        style={{ height: "200px" }}
                                    />
                                    <Card.Body className="overflow-auto" style={{ height: "200px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                                        <div>
                                            <p>
                                                <small>{item.date}</small>
                                                <small className="px-3">{item.tag}</small>
                                            </p>
                                            <Card.Title
                                                as={Link}
                                                href={item?.link}
                                                className="text-white pointer fs-5 fw-bold text-decoration-none"
                                            >
                                                {item.title}
                                            </Card.Title>
                                        </div>
                                        <Button className="greenBtn w-50 mt-3 text-dark">Read more</Button>
                                    </Card.Body>
                                </Card>
                            </Fade>
                        </SwiperSlide>
                    ))}
                </Swiper>



            </Row>

        </Container>
    );
};

export default News;
