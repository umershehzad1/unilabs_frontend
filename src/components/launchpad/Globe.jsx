"use client";
import React, { useEffect, useRef } from 'react';

const GlobeComponent = () => {
  const globeRef = useRef();

  useEffect(() => {
    const loadGlobe = async () => {
      if (typeof window !== 'undefined' && globeRef.current) {
        const Globe = (await import('globe.gl')).default;

        // Create the globe instance
        const globeInstance = Globe(globeRef.current)
          .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg') 
          .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png') 
          .backgroundColor('rgba(0,0,0,0)') 
          .atmosphereColor('#4a85dc') 
          .atmosphereAltitude(0) 
          .pointOfView({ altitude: 2 }, 1000);

        console.log('Globe Instance:', globeInstance); // Debugging line

        // Check if controls are defined
        const controls = globeInstance.controls();
        if (controls) {
          controls.autoRotate = true;
          controls.autoRotateSpeed = 0.8;
        } else {
          console.error('Controls are undefined. Please check the globe instance initialization.');
        }

        const N = 10000; 
        const gData = [...Array(N).keys()].map(() => ({
          lat: (Math.random() - 0.5) * 180, 
          lng: (Math.random() - 0.5) * 360,
          color: ['#589bff', '#589bff', '#589bff'][Math.floor(Math.random() * 3)],
        }));

        globeInstance.pointsData(gData)
          .pointAltitude(0)
          .pointColor('color')
          .pointRadius(0.1); 

        const handleResize = () => {
          if (globeRef.current) {
            globeInstance.width(globeRef.current.clientWidth);
            globeInstance.height(globeRef.current.clientHeight);
          }
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
      }
    };
    loadGlobe();
  }, []);

  return <div ref={globeRef} style={{ width: '100%', height: '100%' }} />;
};

export default GlobeComponent;
