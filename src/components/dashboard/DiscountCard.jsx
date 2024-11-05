"use client";
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const DiscountCard = ({ data }) => {
  return (
    <Card className="bg-transparent text-center text-white">
      <div style={{ position: 'relative' }}>
        <Card.Img variant="top" src="/dashboard/discountImg.gif" alt="Card image cap" />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '2rem', 
            color:"#589CFF", 
            fontWeight: 'bold',
            padding: '5px 10px',
            borderRadius: '8px'
          }}
        >
       
       

           {data.discount}% 
        
        </div>
      </div>
      <Card.Body>
        <Card.Text className="fs-4 fw-bold">
          Discount range from
          <span className="text-success px-1">{data.ds} USD</span> to
          <span className="text-success px-1 d-block">{data.de} USD</span>.
        </Card.Text>

      </Card.Body>
    </Card>
  );
};

export default DiscountCard;
