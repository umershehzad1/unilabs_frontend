"use client";
import DiscountCard from '@/components/dashboard/DiscountCard';
import { CreateInvoice } from '@/services/users';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { AiOutlineDown } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { useAccount } from 'wagmi';


const BuyToken = () => {
  const isConnected = useAccount()
  console.log("first", isConnected.address)
  const searchParams = useSearchParams();
  const query = searchParams.get("query"); // Get the 'query' parameter

  console.log("Received query:", query);
  const router = useRouter();
  const [amount, setAmount] = useState(query | 0)
  const [havePromo, setHavePromo] = useState(null)
  const data = [
    { discount: 5, ds: 250.00, de: 1999.9 },
    { discount: 15, ds: 250.00, de: 2025.00 },
    { discount: 25, ds: 300.00, de: 3020.00 },
  ];

  const getcard = [


    { label: "Token Ordered:", value: 0.00 },
    { label: "Purchase Bonus:", value: 0.00 },
    { label: "Amount Bonus:", value: 0.00 },
    { label: "Promo Bonus:", value: 0.00 },
  ]

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const handleOnBuy = async () => {
    if (isConnected.status === "disconnected") {
      Swal.fire({
        title: "Error",
        text: "Please connect your wallet to proceed",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    const paymentData = {
      amount: amount,
      currency: "usd",
      pay_currency: "eth"
    }
    try {
      const response = await CreateInvoice(paymentData)
      if (response) {
        const { data } = response.data
        // console.log("response: ", data)
        // return
        const serializedData = encodeURIComponent(JSON.stringify(data));
        console.log("Serialized Data:", serializedData);

        router.push(`/dashboard/makepayment?query=${serializedData}`);
        // router.push(`/dashboard/makepayment/${data}`)
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Create Payment Failed',
          text: 'Failed to create payment, please try again.',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: error,
      });
    }

  }
  return (
    <Container fluid className="px-md-4 text-white ">
      <div className="rounded-4 py-3 px-md-5 my-4 pb-5" style={{ background: "#589CFF0A" }}>
        {!query && <div className="page-bg bg-top">
          <h1 className="fw-bold display-6 text-center">Step 1</h1>
          <div className="border-bottom border-success "></div>
          <Form className="py-3">
            <Form.Control
              type="number"
              placeholder="Enter the amount in USD you want to spend to purchase UNI tokens."
              className="amount-input fs-3 border-0 rounded-3"
            />
          </Form>
          <Row>

            {data.map((d, index) => (
              <Col key={index} md={4} xs={12}>
                <DiscountCard data={d} />
              </Col>
            ))}
          </Row>

        </div>}
        <h2 className="border-top border-bottom py-2 border-success fw-bold display-6 text-center">
          Step 2
        </h2>

        <Form className="py-5 row align-items-center">
          <Col xs={12} md={6} className="mb-4">
            <Form.Label className="fw-bold fs-5">Select Payment Method</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={(text) => setAmount(text.target.value)}
              placeholder="Enter Sending Amount"
              className="amount-input fs-4 border-0 rounded-3 p-3"
            />
          </Col>

          <Col xs={12} md={3} className="mb-4 offset-md-3">
            <Form.Label className="fw-bold fs-5">Select Currency</Form.Label>
            <div style={{ position: 'relative', display: 'inline-block', width: '100%' }}>
              <Form.Select
                aria-label="Select Currency"
                className="amount-input amount-select fs-4 border-0 rounded-3 p-3"
                style={{
                  cursor: "pointer",
                  appearance: 'none',
                  paddingRight: '2rem',
                  backgroundColor: '#fff',
                }}
              >
                {/* <option value="btc">BTC</option>
                <option value="usd">USD</option> */}
                <option value="eth">ETH</option>
              </Form.Select>

              <AiOutlineDown
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '1rem',
                  transform: 'translateY(-50%)',
                  pointerEvents: 'none',
                  color: '#83888E',
                  fontSize: '1.25rem'
                }}
              />
            </div>



          </Col>

          {/* <Col xs={12} >
            <Button
              style={{ color: "var(--color1)" }}
              className="bg-transparent border-0 fw-semibold p-0"
              onClick={() => setHavePromo(!havePromo)}
            >
              Apply promo code
            </Button>
          </Col> */}

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



        <h1 className="fw-bold display-6 text-center">You Get:</h1>
        <Col xl={5} md={7} xs={12} className="mx-auto text-center">
          <p className=' mb-0 fs-4 f-of rounded-3 ms-md-3 fw-bold  border-top border-success border-2' style={{ padding: "15px", }}>
            <Image src="/dashboard/coin.png" alt="Coins" className='mx-1' width={40} height={40} />

            <span style={{ color: "var(--color2)" }} className='px-2'>I UNI</span>
            = 0.0001 ETH
          </p>
          <Card className='p-sm-5 p-3 rounded-4' style={{
            color: "white",
            backgroundColor: "hsla(213, 60.40%, 19.80%, 0.70)"
          }}>


            {
              getcard?.map((data, index) => {
                return (

                  <div key={index} style={{ color: "#DBDBDB" }} className="d-flex justify-content-between fs-4 py-1">

                    <small >
                      {data?.label}        </small>
                    <small>
                      <Image src="/dashboard/coin.png" alt="Coins" className='mx-2 mb-1' width={15} height={15} />
                      {data?.value} UNI
                    </small>              </div>
                )
              })
            }



          </Card>


        </Col>

        <Form>
          <Form.Check
            type="checkbox"
            onChange={handleCheckboxChange}
            id="flexCheckDefault"
            className="form-check my-3 custom-checkbox"
            label={
              <span className="text-white fs-5 ps-md-4 ps-2">
                I agree to the{' '}
                <span style={{ color: 'var(--color2)' }} className="px-1">
                  payment agreement and token sales term
                </span>
              </span>
            }
          />
        </Form>
        <div className="text-center">
          <Button onClick={handleOnBuy}
            disabled={!isChecked}
            className='shadow-button-lg mt-4 mb-0 f-of btn-lg fw-bold' style={{ background: isChecked ? 'var(--color4)' : '#cccccc' }}>
            <Image src="/dashboard/coin.png" alt="Coins" className='mx-1' width={20} height={20} />
            Buy Now
          </Button>
        </div>




      </div>


    </Container>
  );
};

export default BuyToken;
