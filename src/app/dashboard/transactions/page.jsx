"use client";
import PaginationComponent from '@/components/shared/Pagination';
import { useState } from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';

const Transactions = () => {
    const headers = ["Tranx NO", "Transaction Date", "Tokens", "Amount", "USD Amount", "To", "Type"];
    const dummyData = Array.from({ length: 100 }, (_, i) => ({
        tranxNo: `${i + 1}`,
        date: new Date(2024, 10, 5).toISOString().split('T')[0],
        tokens: 100 + i,
        amount: (100 + i) * 1.5,
        usdAmount: (100 + i) * 2,
        to: `Recipient ${i + 1}`,
        type: i % 2 === 0 ? "Purchase" : "Sale"
    }));

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const totalPages = Math.ceil(dummyData.length / itemsPerPage);

    const startIdx = (currentPage - 1) * itemsPerPage + 1;
    const endIdx = Math.min(currentPage * itemsPerPage, dummyData.length);

    const currentData = dummyData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <Container fluid className="text-white">
            <div className="rounded-4  px-md-4 my-4 pb-5">
                <div className="page-bg bg-top ">
                    <h1 className="fw-bold border-bottom border-success pb-3">Transactions</h1>
                    <Table responsive className="mt-4">
                        <thead>
                            <tr clas>
                                {headers.map((header, index) => (
                                    <th
                                        className='f-of fw-normal'
                                        key={index}
                                        style={{
                                            background: "#589CFF38",
                                            color: "#DBDBDB",
                                            padding: '1rem',
                                            border: 'none',
                                            borderBottom: '22px solid transparent',
                                            position: 'relative',
                                        }}
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {currentData.map((item, index) => (
                                <tr key={index} style={{
                                    backgroundColor: 'rgba(88, 156, 255, 0.3)!important',
                                    color: '#DBDBDB',
                                    borderRadius: '8px',
                                    marginBottom: '10px',
                                    overflow: 'hidden'
                                }}>
                                    <td className='f-of ps-4'
                                        style={{ color: "#DBDBDB" }}>{item.tranxNo}</td>
                                    <td className='f-of'
                                        style={{ color: "#DBDBDB" }}>{item.date}</td>
                                    <td className='f-of'
                                        style={{ color: "#DBDBDB" }}>{item.tokens}</td>
                                    <td className='f-of'
                                        style={{ color: "#DBDBDB" }}>{item.amount.toFixed(2)}</td>
                                    <td className='f-of'
                                        style={{ color: "#DBDBDB" }}>{item.usdAmount.toFixed(2)}</td>
                                    <td className='f-of'
                                        style={{ color: "#DBDBDB" }}>{item.to}</td>
                                    <td className='f-of'
                                        style={{ color: "#DBDBDB" }}>{item.type}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>
            
                <Row className="align-items-center mt-4">
                    <Col xs={12} md={6} className="d-flex justify-content-lg-start justify-content-center">
                        <p className="text-white">
                            Showing {startIdx} - {endIdx} data from {dummyData.length}
                        </p>
                    </Col>
                    <Col xs={12} md={6} className="d-flex justify-content-lg-end justify-content-center">
                        <PaginationComponent
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={setCurrentPage}
                        />
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Transactions;
