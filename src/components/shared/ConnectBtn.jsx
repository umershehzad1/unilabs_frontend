"use client"
import React from 'react';
import { useAccount } from "wagmi";
const ConnectBtn = () => {
    const isConnected = useAccount()
    console.log(isConnected)
    return (
        <>
            {!isConnected ? <w3m-network-button /> : <w3m-button />}
        </>
    );
};

export default ConnectBtn;
