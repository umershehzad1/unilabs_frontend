import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SectionHeading from '../shared/SectionHeading'
import PieChartComponent from '../shared/PieChart';

const Tokenomics = () => {

    const data = [
        { name: 'PRESALES', value: 10, fill: '#4ec1ee' },
        { name: 'LIQUIDITY', value: 25, fill: '#135eb4' },
        { name: 'MARKETING', value: 20, fill: '#0e5fc3' },
        { name: 'DEVELOPMENT', value: 10, fill: '#2c91f7' },
    ];

    return (
        <>
            <Container>
                <SectionHeading heading={"TOKENOMICS"} subHeading={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et consequat. Duis aute  mollit anim id est laborum."} />

                <Row className='pt-5 align-items-center'>
                    <Col xs={12} lg={8}>
                        <PieChartComponent data={data} />
                    </Col>
                    <Col xs={12} lg={4}>
                        <Row>
                            {data.map((item, index) => (
                                <React.Fragment key={index}>
                                    <Col xs={9}>
                                        <div className='fs-5 text-white py-2 px-4 rounded-5 mb-3 d-flex align-items-center' style={{ height: "50px", background: "#24406a" }}>
                                            {item.name}
                                        </div>
                                    </Col>
                                    <Col xs={3}>
                                        <div className='fs-5 text-white py-2 px-4 rounded-5 mb-3 d-flex align-items-center justify-content-center' style={{ width: "50px", height: "50px", background: "#24406a" }}>
                                            {item.value}
                                        </div>
                                    </Col>
                                </React.Fragment>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Tokenomics
