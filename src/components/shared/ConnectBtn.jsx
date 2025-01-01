"use client"
import { useAccount } from "wagmi";
const ConnectBtn = () => {
    const { isConnected } = useAccount();
    return (
        <>
            {isConnected ? <w3m-network-button /> : <w3m-button />}
        </>
    );
};

export default ConnectBtn;
