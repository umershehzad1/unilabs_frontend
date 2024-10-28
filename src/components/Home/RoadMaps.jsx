"use client";
import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Button, Container, Spinner } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';
import SectionHeading from '../shared/SectionHeading';
import { SiReactos } from "react-icons/si";
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
    return (
        <>
            <Container className='py-3'>
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
                    <Button className="py-2 px-3 nav-button">Download RoadMap</Button>
                </div>
            </Container>
        </>
    );
};

export default RoadMaps;
