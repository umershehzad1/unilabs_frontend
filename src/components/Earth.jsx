import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three';

const GlobeVisualization = ({
    globeRadius = 5,
    rotationSpeed = 0.002,
    particleSize = 0.04,
    style = { width: '500px', height: '500px' },
}) => {
    const mountRef = useRef(null);

    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();

        // Camera setup
        const camera = new THREE.PerspectiveCamera(
            75,
            mountRef.current.offsetWidth / mountRef.current.offsetHeight,
            0.1,
            1000
        );
        camera.position.z = globeRadius * 2;

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(mountRef.current.offsetWidth, mountRef.current.offsetHeight);
        mountRef.current.appendChild(renderer.domElement);

        // Load Earth texture (land and water map)
        const textureLoader = new TextureLoader();
        const earthTexture = textureLoader.load('https://raw.githubusercontent.com/planetaryjs/planetaryjs/master/examples/img/earth.jpg');

        // Globe geometry and material
        const globeGeometry = new THREE.SphereGeometry(globeRadius, 64, 64);
        const globeMaterial = new THREE.MeshBasicMaterial({ map: earthTexture });
        const globeMesh = new THREE.Mesh(globeGeometry, globeMaterial);
        scene.add(globeMesh);

        // Particle system for water effect
        const particleGeometry = new THREE.BufferGeometry();
        const particleCount = 10000;
        const positions = [];

        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            const x = globeRadius * Math.sin(phi) * Math.cos(theta);
            const y = globeRadius * Math.sin(phi) * Math.sin(theta);
            const z = globeRadius * Math.cos(phi);

            positions.push(x, y, z);
        }

        particleGeometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(positions, 3)
        );

        const particleMaterial = new THREE.PointsMaterial({
            color: 0x0077ff, // Water color
            size: particleSize,
            transparent: true,
            opacity: 0.7,
        });

        const particles = new THREE.Points(particleGeometry, particleMaterial);
        scene.add(particles);

        // Light source
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(10, 10, 10);
        scene.add(pointLight);

        // Animation loop
        const animate = () => {
            requestAnimationFrame(animate);

            // Rotate the globe and particles
            globeMesh.rotation.y += rotationSpeed;
            particles.rotation.y += rotationSpeed * 1.2;

            renderer.render(scene, camera);
        };

        animate();

        // Handle window resizing
        const handleResize = () => {
            const width = mountRef.current.offsetWidth;
            const height = mountRef.current.offsetHeight;
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height);
        };

        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => {
            window.removeEventListener('resize', handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, [globeRadius, rotationSpeed, particleSize]);

    return <div ref={mountRef} style={style} />;
};


export default GlobeVisualization;
