"use client";
import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import PollCard from '../shared/PollCards';
import Divider from '../shared/Divider';

const ActivePolls = () => {
    const [selectedOptions, setSelectedOptions] = useState({});

    const pollData = [
        {
            id: 1,
            question: "Would you like the UNILABS token tax to be changed?",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            options: [
                { id: 'A', label: 'YES' },
                { id: 'B', label: 'NO' }
            ]
        },
       
    ];

    const handleOptionSelect = (questionId, optionId) => {
        setSelectedOptions((prevState) => ({
            ...prevState,
            [questionId]: optionId
        }));
    };

    return (
        <>
                    <h1 className='text-white fw-bold'>Active Polls</h1>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.
                    </p>
                    <Col xs={12}>
                        {pollData.map((poll) => (
                            <PollCard
                                key={poll.id}
                                poll={poll}
                                selectedOption={selectedOptions[poll.id]}
                                handleOptionSelect={handleOptionSelect}
                            />
                        ))}
                    </Col>
                    <Divider />
                    <h1 className='text-white fw-bold'>Previous Polls</h1>
                    <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  mollit anim id est laborum.
                    </p>
                    <Col xs={12}>
                        {pollData.map((poll) => (
                            <PollCard
                                key={poll.id}
                                poll={poll}
                                selectedOption={selectedOptions[poll.id]}
                                handleOptionSelect={handleOptionSelect}
                            />
                        ))}
                    </Col>
                
        </>
    );
};

export default ActivePolls;
