import React, { useState } from "react";

const TextEllipsis = ({ value, className = "text-ellipsis" }) => {
    const [showTooltip, setShowTooltip] = useState(false);

    return (
        <p
            className={`${className} showValue mb-0`}
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
        >
            <span>{value}</span>
        </p>
    );
};

export default TextEllipsis;
