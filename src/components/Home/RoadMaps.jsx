"use client";
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Button, Container, Spinner } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import SectionHeading from '../shared/SectionHeading';
import { SiReactos } from "react-icons/si";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const roadmapData = [
    {
        title: 'Launch Phase 1',
        items: [
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum.', completed: true },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum.', completed: false },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum.', completed: true }
        ]
    },
    {
        title: 'Launch Phase 2',
        items: [
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum.', completed: false },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum.', completed: false },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum.', completed: true }
        ]
    },
    {
        title: 'Launch Phase 3',
        items: [
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum.', completed: false },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum.', completed: false },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum.', completed: true }
        ]
    },
    {
        title: 'Launch Phase 4',
        items: [
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum.', completed: false },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum.', completed: false },
            { text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute mollit anim id est laborum.', completed: true }
        ]
    },
];

const RoadMaps = () => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    const particlesOptions = {
        fullScreen: { enable: false },
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                repulse: {
                    distance: 100,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#202731",
            },
            links: {
                color: "#202731",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 100,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,

    };

    return (
        <>
            <div className="position-relative">
                <Particles
                    style={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        zIndex: 0
                    }}
                    id="tsparticles"
                    init={particlesInit}
                    options={particlesOptions}
                />

                <Container className='py-5 ' style={{ zIndex: 9999 }}>
                    <SectionHeading heading={"UNILabs Roadmap"} />
                    <VerticalTimeline className='my-4'>
                        {roadmapData.map((phase, index) => (
                            <VerticalTimelineElement
                                key={index}
                                className="vertical-timeline-element--work no-box-shadow"
                                contentStyle={{ background: 'transparent', color: '#fff' }}
                                contentArrowStyle={{ borderRight: '7px solid #438446' }}
                                iconStyle={{ background: '#438446', color: '#fff' }}
                                icon={<SiReactos className='text-black' />}
                                visible={true}
                            >
                                <h1 className="vertical-timeline-element-title fw-bold">{phase.title}</h1>
                                <ul className="list-unstyled">
                                    {phase.items.map((item, idx) => (
                                        <li key={idx} className="mb-3 fs-5 d-flex">
                                            {item.completed ? (
                                                <FaCheckCircle className="me-2 mt-1" style={{ color: '#28a745', minWidth: '20px', minHeight: '20px' }} />
                                            ) : (
                                                <Spinner
                                                    animation="border"
                                                    size="sm"
                                                    className="me-2 mt-2"
                                                    style={{ color: '#fff', minWidth: '20px', minHeight: '20px' }}
                                                />
                                            )}
                                            {item.text}
                                        </li>
                                    ))}
                                </ul>
                            </VerticalTimelineElement>
                        ))}
                    </VerticalTimeline>
                    <div className='text-center'>
                        <Button
                         
                        className="py-2 px-3 nav-button">Download RoadMap</Button>
                    </div>
                </Container>

            </div>
        </>
    );
};

export default RoadMaps;
