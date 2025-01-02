"use client";
import DiscountCard from '@/components/dashboard/DiscountCard';
import { CreateInvoice } from '@/services/users';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button, Card, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { AiOutlineDown } from 'react-icons/ai';
import Swal from 'sweetalert2';
import { useAccount } from 'wagmi';

const BuyToken = () => {
  const isConnected = useAccount();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState(isConnected?.address || "Connect your wallet & Add wallet address");
  const searchParams = useSearchParams();
  const query = searchParams.get("query");
  const [amount, setAmount] = useState(query || 0);
  const [showStep2, setShowStep2] = useState(!!query);
  const [ethAmount, setEthAmount] = useState(0);
  const [uniTokens, setUniTokens] = useState(0);
  const [purchaseBonus, setPurchaseBonus] = useState(0);
  const [selectedDiscount, setSelectedDiscount] = useState(0);

  const ETH_RATE = 300;
  const UNI_RATE = 0.0001;

  const data = [
    { discount: 5, ds: 50.00, de: 250.0 },
    { discount: 15, ds: 251.00, de: 400.00 },
    { discount: 25, ds: 401.00, de: 1000.00 },
  ];

  useEffect(() => {
    if (isConnected?.address) {
      setAddress(isConnected?.address);
    }
  }, [isConnected?.address]);

  useEffect(() => {
    if (amount > 0) {
      const eth = amount / ETH_RATE;
      const uni = eth / UNI_RATE;
      setEthAmount(eth);
      setUniTokens(uni);
      const bonus = (uni * selectedDiscount) / 100;
      setPurchaseBonus(bonus);
    } else {
      setEthAmount(0);
      setUniTokens(0);
      setPurchaseBonus(0);
    }
  }, [amount, selectedDiscount]);

  const handleSelectDiscount = (selectedAmount, discount) => {
    setAmount(selectedAmount);
    setSelectedDiscount(discount);
    setShowStep2(true);
  };

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
    if (amount <= 0) {
      Swal.fire({
        title: "Error",
        text: "Please Enter valid amount to proceed",
        icon: "error",
        confirmButtonText: "OK",
      }); return
    }
    setLoading(true);
    const paymentData = {
      amount: amount,
      currency: "usd",
      pay_currency: "eth",
      // uni_tokens: (uniTokens + purchaseBonus).toFixed(2),
    };
    try {
      const response = await CreateInvoice(paymentData);
      if (response) {
        const { data } = response.data;
        const serializedData = encodeURIComponent(JSON.stringify(data));
        router.push(`/dashboard/makepayment?query=${serializedData}`);
      } else {
        setLoading(false);
        Swal.fire({
          icon: 'error',
          title: 'Create Payment Failed',
          text: 'Failed to create payment, please try again.',
        });
      }
    } catch (error) {
      setLoading(false);
      Swal.fire({
        icon: 'error',
        title: error.message,
      });
    } finally {
      setLoading(false);

    }
  };

  const getcard = [
    { label: "Token Ordered:", value: uniTokens.toFixed(2) },
    { label: "Purchase Bonus:", value: purchaseBonus.toFixed(2) },
    { label: "Total Tokens:", value: (uniTokens + purchaseBonus).toFixed(2) },
  ];

  const [isChecked, setIsChecked] = useState(false);

  return (
    <Container fluid className="px-md-4 text-white ">
      <div className="rounded-4 py-3 px-md-5 my-4 pb-5" style={{ background: "#589CFF0A" }}>
        {!query && !showStep2 && (
          <div className="page-bg bg-top">
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
                  <Button
                    className="shadow-button-lg mt-3 w-50 d-flex justify-content-center mx-auto"
                    style={{ background: 'var(--color4)' }}
                    onClick={() => {
                      handleSelectDiscount(d.de, d.discount);
                    }}
                  >
                    Select
                  </Button>
                </Col>
              ))}
            </Row>
          </div>
        )}

        {showStep2 && (
          <div>
            <h2 className="border-top border-bottom py-2 border-success fw-bold display-6 text-center">
              Step 2
            </h2>

            <Form className="py-5 row">
              <Col xs={12} md={6} className="mb-4 gap-2">
                <Form.Label className="fw-bold fs-5">Payment Amount</Form.Label>
                <Form.Control
                  type="number"
                  min={1}
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Enter Sending Amount"
                  className="amount-input fs-4 border-0 rounded-3 p-3"
                />
                <Form.Label className="fw-bold fs-5">Wallet Address</Form.Label>
                <Form.Control
                  type="text"
                  value={address}
                  disabled={true}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Wallet Address"
                  className="amount-input fs-5 border-0 rounded-3 p-3"
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
                    <option value="usd">USD</option>
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
            </Form>

            <h1 className="fw-bold display-6 text-center">You Get:</h1>
            <Col xl={5} md={7} xs={12} className="mx-auto text-center">
              <p className=' mb-0 fs-4 f-of rounded-3 ms-md-3 fw-bold  border-top border-success border-2' style={{ padding: "15px", }}>
                <Image src="/dashboard/coin.png" alt="Coins" className='mx-1' width={40} height={40} />

                <span style={{ color: "var(--color2)" }} className='px-2'>I UNI</span>
                = 0.0001 ETH
              </p>
              <Card className="p-sm-5 p-3 rounded-4" style={{ color: "white", backgroundColor: "hsla(213, 60.40%, 19.80%, 0.70)" }}>
                {getcard.map((data, index) => (
                  <div key={index} style={{ color: "#DBDBDB" }} className="d-flex justify-content-between fs-5 py-1">
                    <small>{data.label}</small>
                    <small>
                      <Image src="/dashboard/coin.png" alt="Coins" className="mx-2 mb-1" width={15} height={15} />
                      {data.value} UNI
                    </small>
                  </div>
                ))}
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
            {loading ? (
              <div className="loading-screen">
                <Image
                  src="/dashboard/coin.png"
                  alt="Loading Coin"
                  className="loading-coin"
                  width={80}
                  height={80}
                />
              </div>
            ) : (
              <div className="text-center">
                <Button
                  onClick={handleOnBuy}
                  disabled={!isChecked}
                  className="shadow-button-lg mt-4 mb-0 f-of btn-lg fw-bold"
                  style={{ background: isChecked ? 'var(--color4)' : '#cccccc', borderColor: '#cccccc' }}
                >
                  <Image src="/dashboard/coin.png" alt="Coins" className="mx-1" width={20} height={20} />
                  Buy Now
                </Button>
              </div>
            )}
          </div>
        )}
      </div>
    </Container>
  );
};

export default BuyToken;
