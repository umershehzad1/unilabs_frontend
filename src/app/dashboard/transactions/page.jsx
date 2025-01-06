"use client";
import PaginationComponent from '@/components/shared/Pagination';
import { AllPayments } from '@/services/users';
import { useEffect, useState } from 'react';
import { Col, Container, Row, Spinner, Table } from 'react-bootstrap';

const Transactions = () => {
    const headers = ["Tranx NO", "Transaction Date", "Status", "Amount", "USD Amount", "To", "Type"];
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    const [allTransactions, setAllTransactions] = useState([]);

    const getAllTransactions = async () => {
        setIsLoading(true);
        try {
            const res = await AllPayments();
            setAllTransactions(res?.data?.data || []);
        } catch (err) {
            setError("Failed to fetch transactions. Please try again.");
            console.error("Error fetching transactions: ", err.response || err);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        getAllTransactions();
    }, []);

    const totalPages = Math.ceil(allTransactions?.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = Math.min(currentPage * itemsPerPage, allTransactions?.length);
    const currentData = allTransactions?.slice(startIdx, endIdx);

    return (
        <Container fluid className="text-white">
            <div className="rounded-4 transactions  px-md-4 my-4 pb-5">
                <div className="page-bg bg-top">
                    <h1 className="fw-bold border-bottom border-success pb-3">Transactions</h1>
                    {isLoading ? (
                        <div className="d-flex justify-content-center align-items-center" style={{ height: "400px" }}>
                            <Spinner animation="border" variant="light" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </Spinner>
                        </div>
                    ) : error ? (
                        <p className="text-center text-danger">{error}</p>
                    ) : allTransactions?.length === 0 ? (
                        <p className="text-center text-warning">No records found.</p>
                    ) : (
                        <Table responsive className="mt-4">
                            <thead>
                                <tr>
                                    {headers?.map((header, index) => (
                                        <th
                                            className="f-of fw-normal"
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
                                {currentData?.map((item, index) => (
                                    <tr
                                        key={item?._id || index}
                                        style={{
                                            backgroundColor: 'rgba(88, 156, 255, 0.3)!important',
                                            color: '#DBDBDB',
                                            borderRadius: '8px',
                                            marginBottom: '10px',
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <td className="f-of ps-4" style={{ color: "#DBDBDB" }}>
                                            {item?.invoiceId || "N/A"}
                                        </td>
                                        <td className="f-of" style={{ color: "#DBDBDB" }}>
                                            {new Date(item?.createdAt).toLocaleDateString() || "N/A"}
                                        </td>
                                        <td className="f-of" style={{ color: "#DBDBDB" }}>
                                            {item?.status || "N/A"}
                                        </td>
                                        <td className="f-of" style={{ color: "#DBDBDB" }}>
                                            {item?.pay_amount ? item.pay_amount?.toFixed(2) : "N/A"}
                                        </td>
                                        <td className="f-of" style={{ color: "#DBDBDB" }}>
                                            {item?.amount || "N/A"}
                                        </td>
                                        <td className="f-of" style={{ color: "#DBDBDB" }}>
                                            {item?.to || "N/A"}
                                        </td>
                                        <td className="f-of" style={{ color: "#DBDBDB" }}>
                                            {item?.status || "N/A"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </div>
                {!isLoading && !error && allTransactions?.length > 0 && (
                    <Row className="align-items-center mt-4">
                        <Col xs={12} md={6} className="d-flex justify-content-lg-start justify-content-center">
                            <p className="text-white">
                                Showing {startIdx + 1} - {endIdx} of {allTransactions.length} transactions
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
                )}
            </div>
        </Container >
    );
};

export default Transactions;
