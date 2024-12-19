import { useEffect, useRef } from "react";
import * as THREE from "three";

const ParticlesWave = ({ height = "100vh", backgroundColor = "#010B18", particleColor = "#68AC6A" }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        let camera, scene, renderer, particles;
        let count = 0;

        const SEPARATION = 100,
            AMOUNTX = 50,
            AMOUNTY = 50;

        const init = () => {
            const container = containerRef.current;

            // Set up camera with fixed angles
            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 25, 10000);
            camera.position.set(
                2000 * Math.sin(THREE.MathUtils.degToRad(-15.36)), // X based on angle
                2000 * Math.sin(THREE.MathUtils.degToRad(10.19)),  // Y based on angle
                2000 * Math.cos(THREE.MathUtils.degToRad(-15.36))  // Z based on angle
            );
            camera.lookAt(0, 0, 0);

            scene = new THREE.Scene();

            // Particles
            const numParticles = AMOUNTX * AMOUNTY;
            const positions = new Float32Array(numParticles * 3);
            const scales = new Float32Array(numParticles);

            let i = 0,
                j = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    positions[i] = ix * SEPARATION - (AMOUNTX * SEPARATION) / 2; // x
                    positions[i + 1] = 0; // y
                    positions[i + 2] = iy * SEPARATION - (AMOUNTY * SEPARATION) / 2; // z
                    scales[j] = 1;
                    i += 3;
                    j++;
                }
            }

            const geometry = new THREE.BufferGeometry();
            geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
            geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));

            const material = new THREE.ShaderMaterial({
                uniforms: {
                    color: { value: new THREE.Color(particleColor) },
                },
                vertexShader: `
                    attribute float scale;
                    void main() {
                        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                        gl_PointSize = scale * (300.0 / -mvPosition.z);
                        gl_Position = projectionMatrix * mvPosition;
                    }
                `,
                fragmentShader: `
                    uniform vec3 color;
                    void main() {
                        if (length(gl_PointCoord - vec2(0.5, 0.5)) > 0.475) discard;
                        gl_FragColor = vec4(color, 1.0);
                    }
                `,
            });

            particles = new THREE.Points(geometry, material);
            scene.add(particles);

            renderer = new THREE.WebGLRenderer({ antialias: true });
            renderer.setPixelRatio(window.devicePixelRatio);
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setClearColor(new THREE.Color(backgroundColor));
            container.appendChild(renderer.domElement);

            window.addEventListener("resize", onWindowResize);
        };

        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        const animate = () => {
            const positions = particles.geometry.attributes.position.array;
            const scales = particles.geometry.attributes.scale.array;

            let i = 0,
                j = 0;
            for (let ix = 0; ix < AMOUNTX; ix++) {
                for (let iy = 0; iy < AMOUNTY; iy++) {
                    positions[i + 1] = Math.sin((ix + count) * 0.3) * 50 + Math.sin((iy + count) * 0.5) * 50;
                    scales[j] = (Math.sin((ix + count) * 0.3) + 1) * 20 + (Math.sin((iy + count) * 0.5) + 1) * 20;
                    i += 3;
                    j++;
                }
            }

            particles.geometry.attributes.position.needsUpdate = true;
            particles.geometry.attributes.scale.needsUpdate = true;

            renderer.render(scene, camera);
            count += 0.1;

            requestAnimationFrame(animate);
        };

        init();
        animate();

        return () => {
            containerRef.current.innerHTML = "";
            window.removeEventListener("resize", onWindowResize);
        };
    }, [particleColor, backgroundColor]);

    return <div ref={containerRef} style={{ height }} />;
};

export default ParticlesWave;
