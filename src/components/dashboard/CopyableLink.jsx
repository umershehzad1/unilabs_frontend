import { useState } from 'react';
import { Button } from 'react-bootstrap';
import Confetti from 'react-confetti';
import { MdContentCopy } from "react-icons/md";
import { useWindowSize } from 'react-use';

const CopyableLink = () => {
    const [copied, setCopied] = useState(false);
    const { width, height } = useWindowSize(); 

    const handleCopy = () => {
        navigator.clipboard.writeText("https://your-reference-link.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 1500); 
    };

    return (
        <div className="my-4 d-flex align-items-center">
            {copied && <Confetti width={width} height={height} recycle={false} numberOfPieces={200} />}
            <div
                style={{
                    backgroundColor: "white",
                    color: "black",
                    padding: "10px 15px",
                    borderRadius: "8px",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    flexGrow: 1
                }}
            >
                <span>https://your-reference-link.com</span>
            </div>
            <Button
                onClick={handleCopy}
                className="ms-2"
                style={{
                    backgroundColor: "transparent",
                    border: "none",
                    color: "black",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "10px"
                }}
            >
                <MdContentCopy color={copied ? "green" : "white"} />
            </Button>
        </div>
    );
};

export default CopyableLink;
