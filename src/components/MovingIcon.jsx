import { Image } from 'react-bootstrap';

const MovingIcons = () => {
    const icons = [
        "/svg/f1.png",
        "/svg/f2.png",
        "/svg/f3.png",
        "/svg/f4.png",
        "/svg/f5.png",
    ];
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
