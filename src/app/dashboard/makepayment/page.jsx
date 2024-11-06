"use client";
import BarCodeRow from '@/components/dashboard/BarCodeRow';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Card, Col, Container, Image } from 'react-bootstrap';

const MakePayment = () => {
  const router = useRouter();
  const [havePromo, setHavePromo] = useState(null);


  const getcard = [
    { label: "Token Ordered:", value: 0.00876 },
    { label: "Purchase Bonus:", value: 12.00 },
  ];

  return (
    <Container fluid className="px-md-4 text-white">
      <div className="rounded-4 py-3 px-md-5 my-4 pb-5" style={{ background: "#589CFF0A" }}>
        <div className="page-bg bg-top">
          <h1 className="fw-bold display-5 text-center">Make Your Payment</h1>
          <div className="border-bottom border-success mb-2"></div>


<BarCodeRow/>


          
          <div className="border-top border-success mb-2 "></div>
          <h1 className="fw-bold display-6 text-center">You Get:</h1>
          <div className="border-bottom border-success mb-3 "></div>
          <Col xl={5} md={7} xs={12} className="mx-auto text-center">
            <p className="mb-0 fs-4 f-of rounded-3 ms-md-3 fw-bold " style={{ padding: "15px" }}>
              <Image src="/dashboard/coin.png" alt="Coins" className="mx-1" width={40} height={40} />
              <span style={{ color: "var(--color2)" }} className="px-2">I UNI</span> = 0.00000001 BTC
            </p>
            <Card className="p-sm-5 p-3 rounded-4" style={{
              color: "white",
              backgroundColor: "rgba(20, 47, 81, 0.7)"
            }}>
              {getcard.map((item, index) => (
                <div key={index} className="d-flex justify-content-between fs-4 py-1" style={{ color: "#DBDBDB" }}>
                  <small>{item.label}</small>
                  <small>
                    <Image src="/dashboard/coin.png" alt="Coins" className="mx-2 mb-1" width={15} height={15} />
                    {item.value} UNI
                  </small>
                </div>
              ))}
            </Card>
          </Col>
        </div>
      </div>
    </Container>
  );
};

export default MakePayment;
