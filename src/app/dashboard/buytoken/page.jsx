"use client";
import DiscountCard from '@/components/dashboard/DiscountCard';
import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaAngleDown } from 'react-icons/fa';

const BuyToken = () => {
  const [havePromo,setHavePromo]=useState(null)
  const data = [
    { discount: 5, ds: 200, de: 500 },
    { discount: 15, ds: 200, de: 500 },
    { discount: 25, ds: 200, de: 500 },
  ];

  return (
    <Container fluid className="p-md-4 text-white ">

      <div className="rounded-4 py-3 px-md-5 my-4" style={{ background: "#589CFF0A" }}>
        <h1 className="fw-bold display-2 text-center">Step 1</h1>
        <div className="page-bg">
          <div className="border-bottom border-success my-4"></div>
          <Form className="py-5">
            <Form.Control
              type="number"
              placeholder="Enter the amount in USD you want to spend to purchase UNI tokens."
              className="amount-input fs-3 border-0 rounded-3"
            />
          </Form>
          <Row>

          {data.map((d, index) => (
            <Col key={index} md={4} xs={12}>
            <DiscountCard  data={d} />
            </Col>
          ))}
          </Row>
          <h2 className="border-top border-bottom py-2 border-success fw-bold display-2 text-center">
            Step 2
          </h2>
 
            <Form className="py-5 row align-items-center">
              <Col xs={12} md={6} className="mb-4">
                <Form.Label className="fw-bold">Select Payment Method</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Sending Amount"
                  className="amount-input fs-4 border-0 rounded-3 p-3"
                />
              </Col>

              <Col xs={12} md={3} className="mb-4 offset-md-3">
                <Form.Label className="fw-bold">Select Currency</Form.Label>
        
              <Form.Select
                aria-label="Select Currency"
                className="amount-input fs-4 border-0 rounded-3 p-3 "
                style={{cursor:"pointer"}}
              >
                <option value="btc">BTC</option>
                <option value="usd">USD</option>
                <option value="eth">ETH</option>
                
              </Form.Select>



              </Col>

              <Col xs={12} className=" mb-4">
                <Button
                  style={{color:"var(--color1)"}}
                  className="bg-transparent border-0 fw-semibold p-0"
                  onClick={() => setHavePromo(!havePromo)}
                >
                  Apply promo code
                </Button>
              </Col>

              {havePromo && (
                <Col xs={12} md={4} className="mb-4">
                  <Form.Control
                    type="text"
                    placeholder="Promo code"
                    className="amount-input fs-4 border-0 rounded-3 p-3"
                  />
                </Col>
              )}
            </Form>
         
        </div>
      </div>

    </Container>
  );
};

export default BuyToken;
