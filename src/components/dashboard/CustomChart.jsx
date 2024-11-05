"use client";
import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PieChart = ({ percentage }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        let start = 0;
        const end = percentage;
        const duration = 2; // duration in seconds
        const increment = end / (duration * 60); // calculate increment per frame
        const totalFrames = duration * 60; // total frames based on duration
        let frame = 0;

        const animation = () => {
            if (frame <= totalFrames) {
                setValue(Math.round(start));
                start += increment;
                frame++;
                requestAnimationFrame(animation);
            } else {
                setValue(end); // ensure we set to final value
            }
        };

        animation();

        return () => clearInterval(animation); // cleanup on unmount
    }, [percentage]);

    return (
        <div className='custom-Chart'>
            <CircularProgressbar
                value={100}
                text={`${value}%`}
                styles={buildStyles({
                    pathColor: '#FEBF5499',
                    trailColor: '#FFA500',
                    strokeLinecap: 'butt',
                    textColor: 'white',
                    textSize: '20px',
                    pathTransitionDuration: 0.5,
                    strokeWidth: 20,
                })}
            />
            <div
                style={{
                    position:'absolute',
                    top:percentage>50?0: "-7px",
                    left: percentage > 50 ? 0 : "15px",
                    width: '100%',
                    height: '100%',
                    filter: 'drop-shadow(0px 0px 3px white)',
                }}
            >
                <CircularProgressbar
                    value={value} 
                    strokeWidth={20}
                    styles={buildStyles({
                        pathColor: '#FFD700',
                        trailColor: 'transparent',
                        strokeLinecap: 'butt',
                    })}
                />
            </div>


        </div>
    );
};

export default PieChart;
