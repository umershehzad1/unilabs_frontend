import React from 'react';
import { Card } from 'react-bootstrap';
import Image from 'next/image';
import { motion } from 'framer-motion';

const PollCard = ({ poll, selectedOption, handleOptionSelect }) => {
    return (
        <Card className='border-0 bg-transparent mb-4'>
            <Image
                src={"/polls.png"}
                width={0}
                height={0}
                layout="responsive"
                style={{ width: "100%", height: "100%" }}
                alt={"image"}
            />
            <Card.Body>
                <h1 className='text-white fw-bold'>{poll.question}</h1>
                <Card.Text className='text-white'>
                    {poll.description}
                </Card.Text>
                {poll.options.map((option) => (
                    
                    <div
                        key={option.id}
                        className={`py-3 d-flex gap-2 px-3 align-items-center mb-3 ${selectedOption === option.id ? "selected-option" : "not-selected-option"}`}
                        style={{
                            background: "#D9D9D91A",
                            borderRadius: "10px",
                            cursor: "pointer",
                            position: 'relative',
                            overflow: 'hidden',
                        }}
                        onClick={() => handleOptionSelect(poll.id, option.id)}
                    >
                        
                        <motion.div
                            className="shine"
                            initial={{ x: '-100%' }}
                            animate={{ x: '100%' }}
                            transition={{
                                duration: 10,
                                ease: [0.25, 0.1, 0.25, 1],
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: option.label === 'YES'
                                ? 'linear-gradient(45deg, rgba(76, 175, 80, 0.5) 0%, rgba(76, 175, 80, 0) 50%, rgba(76, 175, 80, 0.5) 100%)'
                                : 'linear-gradient(45deg, rgba(244, 67, 54, 0.5) 0%, rgba(244, 67, 54, 0) 50%, rgba(244, 67, 54, 0.5) 100%)',
                                filter: 'blur(2px)',
                                pointerEvents: 'none',
                            }}
                        />
                        <div className='text-white fs-3'>
                            <div className='d-flex align-items-center justify-content-center text-white'
                                style={{
                                    width: "50px",
                                    height: "50px",
                                    background: "linear-gradient(180deg, #4CAF50 0%, #204921 100%)",
                                    borderRadius: "10px"
                                }}>
                                {option.id}
                            </div>
                        </div>
                        <div className='text-white fs-3'>{option.label}</div>
                    </div>
                ))}
            </Card.Body>
        </Card>
    );
};

export default PollCard;
