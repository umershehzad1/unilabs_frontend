"use client";
import PaginationComponent from '@/components/shared/Pagination';
import { AllPayments } from '@/services/users';
import { useEffect, useState } from 'react';
import { Container, Table, Row, Col } from 'react-bootstrap';
import Swal from 'sweetalert2';

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
            console.log("API Response: ", res);
            setAllTransactions(res.data.data); // Ensure the API response structure matches
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

    const totalPages = Math.ceil(allTransactions.length / itemsPerPage);
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = Math.min(currentPage * itemsPerPage, allTransactions.length);
    const currentData = allTransactions.slice(startIdx, endIdx);

    return (
        <Container fluid className="text-white">
            <div className="rounded-4  px-md-4 my-4 pb-5">
                <div className="page-bg bg-top ">
                    <h1 className="fw-bold border-bottom border-success pb-3">Transactions</h1>
                    {isLoading ? (
                        <p className="text-center text-white">Loading...</p>
                    ) : error ? (
                        <p className="text-center text-danger">{error}</p>
                    ) : (
                        <Table responsive className="mt-4">
                            <thead>
                                <tr>
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
                                    <tr key={item._id || index} style={{
                                        backgroundColor: 'rgba(88, 156, 255, 0.3)!important',
                                        color: '#DBDBDB',
                                        borderRadius: '8px',
                                        marginBottom: '10px',
                                        overflow: 'hidden'
                                    }}>
                                        <td className='f-of ps-4' style={{ color: "#DBDBDB" }}>
                                            {item.invoiceId || "N/A"}
                                        </td>
                                        <td className='f-of' style={{ color: "#DBDBDB" }}>
                                            {new Date(item.createdAt).toLocaleDateString() || "N/A"}
                                        </td>
                                        <td className='f-of' style={{ color: "#DBDBDB" }}>
                                            {item.status || "N/A"}
                                        </td>
                                        <td className='f-of' style={{ color: "#DBDBDB" }}>
                                            {item.pay_amount ? item.pay_amount.toFixed(2) : "N/A"}
                                        </td>
                                        <td className='f-of' style={{ color: "#DBDBDB" }}>
                                            {item.amount || "N/A"}
                                        </td>
                                        <td className='f-of' style={{ color: "#DBDBDB" }}>
                                            {item.to || "N/A"}
                                        </td>
                                        <td className='f-of' style={{ color: "#DBDBDB" }}>
                                            {item.status || "N/A"}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    )}
                </div>

                {!isLoading && !error && (
                    <Row className="align-items-center mt-4">
                        <Col xs={12} md={6} className="d-flex justify-content-lg-start justify-content-center">
                            <p className="text-white">
                                Showing {startIdx + 1} - {endIdx} data from {allTransactions.length}
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
        </Container>
    );
};

export default Transactions;
