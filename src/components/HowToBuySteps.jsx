"use client";
import { useEffect, useRef } from 'react';
import { Container, Image } from 'react-bootstrap';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { GoDotFill } from "react-icons/go";
import { Step1, Step2, Step3 } from '../../public/svg/SVG';

const steps = [
    {
        text: "Welcome aboard! Start by getting MetaMask on your desktop browser or a Wallet Connect-compatible wallet like Trust Wallet for your mobile.",
        text2: "Desktop users, MetaMask is ideal for a smooth purchase process. Mobile users, Trust Wallet or MetaMask connected through Wallet Connect is your go-to.",
        heading: "Sign Up",
        img: "/howtobuy1.png",
        icon: <Step1 />
    },
    {
        text: "Ready to invest? Simply pick your preferred currency on our site, input how many UNIL tokens you'd like, and hit 'Buy Now'. A prompt will pop up from your wallet for transaction confirmation, where you’ll also see the gas fees.",
        heading: "Purchase Process",
        img: "/howtobuy2.png",
        icon: < Step2 />
    },
    {
        text: "Once our presale wraps up, you can collect your UNIL tokens through our website or wait for an airdrop straight to your wallet. Meanwhile, keep an eye on your investment and the token prices from your dashboard. Just connect your wallet to our website, and voilà—you’re there!",
        heading: "Make Your Payment",
        img: "/howtobuy3.png",
        icon: < Step3 />

    },
];

const RoadMaps = () => {
    const sectionRef = useRef(null);
    const progressIconRef = useRef(null);

    const handleScroll = () => {
        if (sectionRef.current && progressIconRef.current) {
            const sectionTop = sectionRef.current.offsetTop;
            const sectionHeight = sectionRef.current.clientHeight;
            const scrollY = window.scrollY;
            const maxScroll = sectionHeight - window.innerHeight;
            const scrollPosition = scrollY - sectionTop;
            if (scrollPosition >= 0 && scrollPosition <= maxScroll) {
                const newHeight = Math.min(100, (scrollPosition / maxScroll) * 100);
                document.documentElement.style.setProperty('--timeline-height', `${newHeight}%`);
                progressIconRef.current.style.top = `calc(${newHeight}%)`;
            }
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <style>
                {`
                    .vertical-timeline {
                    padding:0px;
                }
                    .vertical-timeline::before {
                        height: var(--timeline-height, 0%) !important;
                        transition: height 0.2s ease-in-out; 
                    }

                    .progress-icon {
                        position: absolute;
                        left: 20px!important;
                        transform: translateX(-50%);
                        top: 0;
                        z-index: 10;
                        width: 24px;
                        height: 24px;
                        background-color: #28a745;
                        border-radius: 50%;
                        box-shadow: 0 0 10px rgba(40, 167, 69, 0.8),
                                    0 0 20px rgba(40, 167, 69, 0.6),
                                    0 0 30px rgba(40, 167, 69, 0.4);
                        transition: top 0.2s ease-in-out;
                    }

                    .green-icon {
                        width: 40px;
                        height: 40px;
                        background-color: #010B18; 
                        border: 5px solid #28a745; 
                        border-radius: 50%; 
                        display: flex;
                        align-items: center;
                        justify-content: center;

                    }

                    /* Ensure the icon stays centered on all screen sizes */
                    @media (max-width: 1170px) {
                        .progress-icon {
                            left: 8px!important;
                            transform: none;
                        }

                        /* Adjust the icon size for smaller screens */
                        .green-icon {
                            width: 20px;
                            height: 20px;
                            border: 3px solid #28a745;
                        }
                    }

                    @media (min-width: 1170px) {
                        .progress-icon {
                            left: 50%;
                            transform: translateX(-50%);
                        }
                    }
                `}
            </style>

            <div ref={sectionRef} className="position-relative roadmaps howtobuysteps">


                <Container className="py-5 col-lg-8 col-12 px-md-auto px-0 mx-auto">
                    <VerticalTimeline className="my-4" animate
                        layout={"1-column-left"}>
                        {steps.map((phase, index) => (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element-work no-box-shadow "
                                contentStyle={{ background: 'transparent', color: '#fff', paddingTop: "0px" }}
                                contentArrowStyle={{ borderRight: '6px solid #438446' }}
                                iconStyle={{ background: '#438446', color: '#fff' }}
                                visible={true}
                                animate
                                position="right"

                                icon={<div className='green-icon' >
                                    <p className="m-0 pt-3">{phase.icon}</p>
                                </div>}
                            >
                                <div className="text-start pt-0">
                                    <h3 className="text-white fw-bold display-5 text-uppercase">
                                        Step {index + 1}: <span className="px-2 green ">{phase.heading}</span>
                                    </h3>
                                    <p style={{ color: "#CFCFCF" }} className="font-apfel ">{phase.text}</p>
                                    <p style={{ color: "#CFCFCF" }} className="font-apfel mt-1">{phase.text2}</p>
                                    <div className="pt-5">
                                        <Image src={phase.img} alt={index + " Image How To Buy"} fluid />
                                    </div>
                                </div>
                            </VerticalTimelineElement>
                        ))}
                        <div ref={progressIconRef} className="progress-icon"></div>
                    </VerticalTimeline>
                </Container>
            </div>
        </>
    );
};

export default RoadMaps;
