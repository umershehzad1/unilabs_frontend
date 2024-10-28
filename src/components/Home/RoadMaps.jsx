"use client";
import React from 'react';
import { FaSquareUpwork } from 'react-icons/fa6';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Spinner } from 'react-bootstrap';
import { FaCheckCircle } from 'react-icons/fa';

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
            <VerticalTimeline>
                {roadmapData.map((phase, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work no-box-shadow"
                        contentStyle={{ background: 'transparent', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid rgb(33, 150, 243)' }}
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<FaSquareUpwork />}
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
        </>
    );
};

export default RoadMaps;
