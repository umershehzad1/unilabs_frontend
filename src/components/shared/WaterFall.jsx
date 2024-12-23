import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { Col, Container, Image } from 'react-bootstrap';

const WaterfallWithBackground = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(containerRef.current.offsetWidth, containerRef.current.offsetHeight);
        containerRef.current.appendChild(renderer.domElement);

        const lineMaterial = new THREE.LineBasicMaterial({
            color: 0x00ff00,
            transparent: true,
            opacity: 0.5,
        });

        const lineGeometry = new THREE.BufferGeometry();
        const positions = new Float32Array(300);
        lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

        const lines = [];
        const lineCount = 100;
        const lineHeight = 0.3;

        for (let i = 0; i < lineCount; i++) {
            const startX = (Math.random() - 0.5) * 10;
            const startZ = (Math.random() - 0.5) * 5;
            const startY = Math.random() * 4 + 2;

            positions[i * 6] = startX;
            positions[i * 6 + 1] = startY;
            positions[i * 6 + 2] = startZ;
            positions[i * 6 + 3] = startX;
            positions[i * 6 + 4] = startY - lineHeight;
            positions[i * 6 + 5] = startZ;

            lines.push({ startX, startY, startZ, dropPosition: startY });
        }

        lineGeometry.attributes.position.needsUpdate = true;
        const line = new THREE.LineSegments(lineGeometry, lineMaterial);
        scene.add(line);

        const animate = () => {
            requestAnimationFrame(animate);

            const positions = lineGeometry.attributes.position.array;

            lines.forEach((lineData, i) => {
                const { startX, startZ } = lineData;
                lineData.dropPosition -= 0.05;

                if (lineData.dropPosition < -2) {
                    lineData.dropPosition = Math.random() * 4 + 2;
                }

                positions[i * 6 + 1] = lineData.dropPosition;
                positions[i * 6 + 4] = lineData.dropPosition - lineHeight;
            });

            lineGeometry.attributes.position.needsUpdate = true;
            renderer.render(scene, camera);
        };

        animate();

        const handleResize = () => {
            const { offsetWidth, offsetHeight } = containerRef.current;
            camera.aspect = offsetWidth / offsetHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(offsetWidth, offsetHeight);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);

            if (containerRef.current) {
                containerRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return (
        <div
            className="position-relative overflow-hidden waterfall-container"
            ref={containerRef}
        >
            <Container className="h-100">
                <Col md={8} className="mx-auto h-100 d-flex align-items-center">
                    <Image
                        src="/heroBgFeatures.png"
                        alt="Hero Image Features"
                        fluid
                    />
                </Col>
            </Container>
        </div>
    );
};

export default WaterfallWithBackground;
