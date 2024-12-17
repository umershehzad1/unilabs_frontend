import React from 'react';
import { Col, Container, Row, ProgressBar } from 'react-bootstrap';
import SectionHeading from '../shared/SectionHeading';
import PieChartComponent from '../shared/PieChart';

const Tokenomics = () => {

    const data = [
        { name: 'Private Sale', value: 10 },
        { name: 'Burned', value: 30 },
        { name: 'Public Sale', value: 20 },
        { name: 'Staking Reward', value: 28 },
        { name: 'Partneship Funds', value: 7 },
        { name: 'Team Pool', value: 5 },
    ];

    return (
        <>
            <Container className='py-4'>
                <h1 className='fw-bold text-white text-center text-uppercase'>Tokenomics</h1>
                <Row className='pt-5 align-items-center'>
                    <Col xs={12} lg={6} className="pe-0">
                        <div className='tokemonics-Bg-img'>
                            <PieChartComponent data={data} />
                        </div>
                    </Col>
                    <Col xs={12} lg={6}>
                        <h4 className='text-white text-uppercase fw-bold'>Allocation of funds</h4>
                        <p style={{ color: "#898990" }}>Total token supply - 10,000,000,000 SDW</p>

                        <Row className='gap-3'>
                            {data.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Col xs={12}>
                                        <div className="position-relative">
                                            <ProgressBar
                                                now={item.value}
                                                style={{
                                                    minHeight: "30px",
                                                    borderRadius: "5px",
                                                    background: "transparent",
                                                }}
                                                variant={"success"}
                                            />
                                            <div
                                                style={{
                                                    position: "absolute",
                                                    top: "0%",
                                                    left: `calc(${item.value}% + 10px)`,
                                                    fontSize: '16px',
                                                    fontWeight: 'bold',
                                                    color: '#fff',
                                                    whiteSpace: 'nowrap',
                                                }}
                                            >
                                                {item.value}% {item.name}
                                            </div>
                                        </div>
                                    </Col>
                                </React.Fragment>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Tokenomics;
