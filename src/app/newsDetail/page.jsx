"use client";
import Subscribe from "@/components/shared/Subscribe";
import { Button, Container, Form, Image } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { FaRegComment } from "react-icons/fa";

const NewsDetail = () => {
    return (
        <Container className="text-white news">
            <h1 className="py-4 fw-bold col-xl-8 text-uppercase mx-auto text-center">
                Ethereum Eyes $6,200 Amid Secondary Bull Run
            </h1>
            <Card
                style={{ backgroundColor: "transparent" }}
                className="text-secondary"
            >
                <Card.Img
                    variant="top"
                    src="/news1.png"
                    style={{ height: "400px" }}
                    className="img-fluid object-fit-cover rounded-0"
                />
                <Card.Body>
                    <p>
                        <small style={{ backgroundColor: "#CBFB4533", color: "#CBFB45" }} className="py-1 px-2 rounded-1">Crypto</small>
                        <small style={{ backgroundColor: "#CBFB4533", color: "#CBFB45" }} className="py-1 px-2 mx-2 rounded-1">Blockchain</small>
                    </p>
                    <p className="d-flex align-items-center gap-3" style={{ color: "#F3F3F3CC" }}>
                        <small>January 10, 2024</small>
                        <small className="d-flex align-items-center">.</small>
                        <small>By Janet Lawson</small>
                        <small className="d-flex align-items-center">.</small>
                        <small className="gap-1">
                            <FaRegComment />
                            3 comments
                        </small>
                    </p>
                    {/* <Card.Title className="text-white">Title Here</Card.Title> */}
                    <Card.Text >Startup business owners need more exposure and advertisements to thrive in their business venture. It is also the best way to promote and showcase your business, products, and services to your target market. velit viverra sit semper lorem eu cursus vel hendrerit elementum morbi curabitur etiam nibh justo, lorem aliquet donec.</Card.Text>
                    <div className="d-flex gap-4">
                        <div>
                            <Image
                                src="/DoubleQuote.png"
                            />
                        </div>
                        <div className="col-xl-7">
                            <h5 className="text-white">
                                Success is not final; failure is not fatal: it is the courage to continue that counts
                            </h5>
                            <p style={{ color: "#CBFB45" }}>Winston Churchill</p>
                        </div>
                    </div>
                    <Card.Text >Lorem ipsum dolor sit amet, id duo diam scaevola, ad usu alienum rationibus philosophia,ad etiam corrumpit interpretaris eum. Tation mucius dolorm pro in, te tamquam molestie imperdiet cum. Sit quis ubique ei, in eum diceret probatus. Ut qui case verterem, simul perfecto qualisque mea ei. At sea utmur fuisset tibique ali quenean lor. loremispum doler bovum. Morbi tincidunt ornare massa eget egestas. In nisl nisi scelerisque eu ultrices. Scelerisque fermentum dui faucibus in. Egestas pretium aenean pharetra magna ac placerat. Lacus viverra vitae congue eu consequat ac felis donec et. Velit scelerisque in dictum non consectetur. Malesuada fames ac turpis egestas maecenas pharetra convallis. Facilisis mauris sit amet massa vitae tortor condimentum lacinia quis.</Card.Text>
                    <Card.Img
                        variant="top"
                        src="/news1.png"
                        style={{ height: "400px" }}
                        className="img-fluid object-fit-cover rounded-0"
                    />
                    <p className="py-2 text-center">Morbi quis commodo odio aenean.</p>
                    <h4 className="fw-bold text-white">Strong visuals</h4>
                    <p className="py-2">Lorem ipsum dolor sit amet, id duo diam scaevola, ad usu alienum rationibus philosophia,ad etiam corrumpit interpretaris eum. Tation mucius dolorm pro in, te tamquam molestie imperdiet cum. Sit quis ubique ei, in eum diceret probatus. Ut qui case verterem, simul perfecto qualisque mea ei. At sea utmur fuisset tibique ali quenean lor. </p>
                    <ul className="newsBullet" style={{ listStyleType: "square" }} >
                        <li>You can’t “just do it” without regard to the rules, as Knight clearly states.</li>
                        <li>One learned from their mistakes, and the greatest lesson was that there was always another day to fight on.</li>
                        <li>Faucibus in ornare quam viverra orci sagittis eu voltpat odio.</li>
                    </ul>
                </Card.Body>
            </Card>

            <Subscribe/>
        </Container>
    );
};

export default NewsDetail;
