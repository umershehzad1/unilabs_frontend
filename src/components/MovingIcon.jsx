import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';

const MovingIcons = () => {
    const icons = [
        "/svg/f1.png",
        "/svg/f2.png",
        "/svg/f3.png",
        "/svg/f4.png",
        "/svg/f5.png",
    ];

    const [animations, setAnimations] = useState([]);

    useEffect(() => {
        const animationNames = ['moveTopToBottom', 'moveBottomToTop', 'moveLeftToRight', 'moveRightToLeft'];

        const generatedAnimations = icons.map(() => {
            const animationName = animationNames[Math.floor(Math.random() * animationNames.length)];
            const duration = Math.random() * 5 + 5;
            const delay = Math.random() * 2;
            return { animationName, duration, delay };
        });

        setAnimations(generatedAnimations);
    }, [icons]);

    return (
        <>
            {icons.map((icon, index) => (
                <Image
                    key={index}
                    src={icon}
                    alt={`icon-${index}`}
                    className={`fIcon${index + 1}`}

                />
            ))}
        </>
    );
};

export default MovingIcons;
