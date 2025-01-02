"use client";
import { WalletSign } from "@/services/users";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { useAccount, useSignMessage } from "wagmi";

const ConnectBtn = () => {
    const { address, isConnected } = useAccount();
    const { signMessageAsync } = useSignMessage();
    const router = useRouter();
    const User = JSON.parse(localStorage?.getItem('user'));
    const message = process.env.NEXT_PUBLIC_SIGN_MESSAGE || "Default Message";

    const handleSignMessage = async () => {
        try {
            const signature = await signMessageAsync({ message });
            const response = await WalletSign({
                message,
                signature,
                walletAddress: address,
            });

            if (response?.data?.data) {
                const user = response.data.data;
                localStorage.setItem("user", JSON.stringify(user));
                Swal.fire({
                    title: "Signed Successfully",
                    text: "Redirecting to Dashboard...",
                    icon: "success",
                    timer: 2000,
                    showConfirmButton: false,
                });
                router.push("/dashboard");
            } else {
                throw new Error("Failed to authenticate. Please try again.");
            }
        } catch (error) {
            console.error("Error signing message:", error);
        }
    };

    const handleWalletConnection = async () => {

        if (isConnected?.status !== "connected") {
            handleSignMessage();
        } else {
            return;
        }

    };

    useEffect(() => {
        if (!User?.token) {
            handleWalletConnection();
        }
    }, [address]);

    return (
        <div>
            {User?.token ? <w3m-network-button /> : <w3m-button />}
        </div>
    );
};

export default ConnectBtn;
