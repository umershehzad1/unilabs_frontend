"use client";

import { Col, Container, Form, Image, InputGroup, Row } from "react-bootstrap";
import { TiPinOutline } from "react-icons/ti";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Link from "next/link";
import Subscribe from "@/components/shared/Subscribe";
import { Fade, Slide, Zoom } from "react-awesome-reveal";
import BlurShadowLayer from "@/components/BlurShadow";

const data = [
  {
    image: "/news1.png",
    link: "/newsDetail",
    date: "January 10, 2024",
    tag: "development",
    title: "Ethereum Eyes $6,200 Amid Secondary Bull Run",
    content:
      "velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec.",
  },
  {
    image: "/news2.png",
    link: "/newsDetail",
    date: "January 10, 2024",
    tag: "development",
    title: "Ethereum Eyes $6,200 Amid Secondary Bull Run",
    content:
      "velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec.",
  },
  {
    image: "/news3.png",
    link: "/newsDetail",
    date: "January 10, 2024",
    tag: "development",
    title: "Ethereum Eyes $6,200 Amid Secondary Bull Run",
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
  {
    image: "/news.png",
    link: "/newsDetail",
    date: "January 10, 2024",
    tag: "development",
    title: "Ethereum Eyes $6,200 Amid Secondary Bull Run",
    content:
      "velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec.",
  },
  {
    image: "/news1.png",
    link: "/newsDetail",
    date: "January 10, 2024",
    tag: "development",
    title: "What are the advantages of F-NFTs?",
    content:
      "velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec.",
  },
  {
    image: "/news1.png",
    link: "/newsDetail",
    date: "January 10, 2024",
    tag: "development",
    title: "Evaluate a new Web3 startup idea?",
    content:
      "velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec.",
  },
  {
    image: "/news3.png",
    link: "/newsDetail",
    date: "January 10, 2024",
    tag: "development",
    title: "Ethereum Eyes $6,200 Amid Secondary Bull Run",
    content:
      "velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec.",
  },
  {
    image: "/news1.png",
    link: "/newsDetail",
    date: "January 10, 2024",
    tag: "development",
    title: "How to Mint and Earn with your own NFTs on Polygon",
    content:
      "velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec.",
  },
];

const News = () => {
  return (
    <Container className="text-white news overflow-hidden">
      <BlurShadowLayer />
      <Fade direction="down" triggerOnce>
        <h1 className="py-2 text-center fw-bold">NEWS</h1>
      </Fade>

      <Row className="py-5">
        <Col
          as={Link}
          href="/newsDetail"
          lg={6} className="p-5 col-12 mb-4 ColStyle">
          <Slide direction="left" triggerOnce>
            <p className="text-white d-inline py-1 px-2 rounded-1" style={{ backgroundColor: "#161617" }}>
              <span className="me-2">Featured</span>
              <TiPinOutline />
            </p>
            <h5 className="text-black col-xl-4 fw-bolder text-uppercase py-2">
              Bitcoin Hits Milestone
            </h5>
            <p className="text-black col-xl-10 fw-normal">
              Record the number of times the function has been called and the
              output at each call. The starting random value chosen could be any
              string, like the headline of the New York times for the day
            </p>
          </Slide>
        </Col>
        <Col lg={6} className="col-12">
          <Zoom triggerOnce>
            <div className="w-100 d-flex justify-content-center mb-4">
              <Image fluid src="/news.png" />
            </div>
          </Zoom>
        </Col>
      </Row>

      <Row className="mb-5 d-flex">
        {data.map((item, index) => (
          <Col key={index} xs={12} md={4} className="py-3">
            <Fade direction="up" triggerOnce>
              <Card
                as={Link}
                href={item?.link}
                className="text-secondary h-100 rounded-0 cardStyle">
                <Card.Img
                  variant="top"
                  src={item.image}
                  style={{ height: "200px" }}
                />
                <Card.Body
                  style={{ height: "200px", overflow: "hidden" }}>
                  <p>
                    <small>{item.date}</small>
                    <small className="px-3">{item.tag}</small>
                  </p>
                  <Card.Title
                    className="text-white pointer text-decoration-none"
                  >
                    {item.title}
                  </Card.Title>
                  <Card.Text className="truncate-text">{item.content}</Card.Text>
                </Card.Body>
              </Card>
            </Fade>
          </Col>
        ))}
        <div className="d-flex justify-content-center">
          <Slide direction="up" triggerOnce>
            <Button className="newButton" variant="success">
              Load More
            </Button>
          </Slide>
        </div>
      </Row>

      <Subscribe />
    </Container>
  );
};

export default News;
