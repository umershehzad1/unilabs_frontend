"use client";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import HowToBuySteps from "@/components/HowToBuySteps";
import { Button, Container, Image, Row } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import ParticlesWave from "@/components/ParticlesWave";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import LatestNews from "@/components/LatestNews";
import BlurShadowLayer from "@/components/BlurShadow";

const page = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <div className="py-5">
            <div className="position-relative overflow-hidden">
                <ParticlesWave
                    height="90vh"
                    backgroundColor="#010B18"
                    particleColor="#68AC6A"
                />
                <div className="howTB-content w-100">
                    <div className="container text-center pt-5 pe-0">
                        <p className="green pt-5">
                            We are currently in the Presale of the UNIL Token. Log-In or Create an account to buy.
                        </p>
                        <h1 className=" fw-bold  mb-3 text-white text-uppercase">
                            How to Buy <span className="px-2 green">UNIL</span>
                        </h1>


                        <div className="d-flex gap-4 align-items-stretch flex-md-row flex-column col-xl-10 mx-auto">
                            <div
                                style={{ backgroundColor: "#232325" }}
                                className="d-flex justify-content-between align-items-center py-2 px-3 rounded-3 flex-grow-1"
                            >
                                <div>
                                    <p className="mb-0 gray" >You have</p>
                                    <p className="text-white">$42.984</p>
                                </div>
                                <div className="text-white d-flex align-items-center">
                                    <span
                                        style={{
                                            background: "#7D32F9",
                                            width: "30px",
                                            height: "30px",
                                            borderRadius: "50%",
                                        }}
                                        className="d-flex justify-content-center align-items-center mx-2"
                                    >
                                        $
                                    </span>
                                    USD
                                </div>
                            </div>

                            <div className="d-flex justify-content-center align-items-center flex-grow-0">
                                <FaArrowRightArrowLeft color="white" size={30} />
                            </div>

                            <div
                                style={{ backgroundColor: "#232325" }}
                                className="d-flex justify-content-between align-items-center py-2 px-3 rounded-3 flex-grow-1"
                            >
                                <div>
                                    <p className="mb-0 gray">You get</p>
                                    <p className="text-white">1.95</p>
                                </div>
                                <div className="text-white d-flex align-items-center">UNI</div>
                            </div>

                            <div className="d-md-flex ">
                                <Button className="greenBtn px-5 rounded-3">Buy Now</Button>
                            </div>
                        </div>

                    </div>
                </div>
                <Image src="/UFO.png" alt="UFO IMAGE" className="ufoImage " />
            </div>
            <div className="howtobuy position-relative ">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    options={{
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onHover: {
                                    enable: true,
                                    mode: "repulse"
                                },
                                resize: true,
                            },
                            modes: {
                                repulse: {
                                    distance: 100,
                                    duration: 0.6
                                }
                            }
                        },
                        particles: {
                            color: {
                                value: "#68AC6A"
                            },
                            links: {
                                color: "#68AC6A",
                                distance: 120,
                                enable: true,
                                opacity: 0.4,
                                width: 1
                            },
                            move: {
                                enable: true,
                                speed: 0.6,
                                direction: "none",
                                outModes: {
                                    default: "bounce"
                                }
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800
                                },
                                value: 100
                            },
                            opacity: {
                                value: 0.3
                            },
                            shape: {
                                type: "circle"
                            },
                            size: {
                                value: { min: 2, max: 4 }
                            }
                        },
                        detectRetina: true,
                        fullScreen: { enable: false, zIndex: -2 }
                    }}
                />
                <BlurShadowLayer />

                <Container className="text-white text-center">
                    <Fade bottom delay={300}>
                        <h1 className="display-5 fw-bold py-5 text-uppercase">
                            How to Buy
                        </h1>
                    </Fade>
                    <HowToBuySteps />
                </Container>
            </div>
            <LatestNews />
        </div>
    );
};

export default page;
