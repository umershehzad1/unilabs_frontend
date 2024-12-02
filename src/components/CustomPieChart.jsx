import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import { VictoryPie } from "victory";

const CustomLabelWithShortLine = ({ x, y, datum, pieCenter }) => {
    const lineStartX = pieCenter.x;
    const lineStartY = pieCenter.y;

    const lineEndX = x;
    const lineEndY = y;

    const adjustedX = x - 50;
    const adjustedY = y - 40;

    return (
        <>
            <svg>
                <line
                    x1={lineStartX}
                    y1={lineStartY}
                    x2={lineEndX}
                    y2={lineEndY}
                    stroke="#4CAF50"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                />
            </svg>
            <foreignObject x={adjustedX < 0 ? 0 : adjustedX} y={adjustedY < 0 ? 0 : adjustedY} width={100} height={60}>
                <div className="custom-label-card">
                    <div className="custom-label-body">{datum.y}%</div>
                    <div className="custom-label-header">{datum.x}</div>
                </div>
            </foreignObject>
        </>
    );
};

const MyVictoryPie = () => {
    const [data, setData] = useState([
        { x: "Uni A", y: 20 },
        { x: "Uni B", y: 35 },
        { x: "Uni C", y: 25 },
        { x: "Uni D", y: 15 },
        { x: "Uni E", y: 15 },
    ]);

    const [colorPalette] = useState([
        "#589CFFE5",
        "#0068FFCC",
        "#6358FFCC",
        "#0400FFB2",
        "#0058FFCC",
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setData((prevData) =>
                prevData.map((item) => ({
                    ...item,
                    y: Math.floor(Math.random() * 40 + 10),
                }))
            );
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="h-100 w-100 position-relative">
            <Image src="/pieBg.png" alt="BGChart" className="pieBG" />
            <VictoryPie
                data={data}
                padding={{ top: 50, bottom: 50, left: 50, right: 50 }}
                radius={({ datum }) => datum.y + 45}
                innerRadius={15}
                labelComponent={
                    <CustomLabelWithShortLine
                        pieCenter={{ x: 200, y: 200 }}
                    />
                }
                labelIndicatorOuterOffset={0}
                style={{
                    data: {
                        fill: ({ index }) => colorPalette[index % colorPalette.length],
                        stroke: ({ index }) => colorPalette[index % colorPalette.length],
                        strokeWidth: 2,
                        transition: "all 1.5s ease-out",
                    },
                }}
            />
        </div>
    );
};

export default MyVictoryPie;
