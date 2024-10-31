"use client"
import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

const GlobeComponent = () => {
  const globeRef = useRef();

  useEffect(() => {
    const globe = Globe()(globeRef.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg') 
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png') 
      .backgroundColor('rgba(0,0,0,0)') 
      .atmosphereColor('#4a85dc') 
      .atmosphereAltitude(0) 
      .pointOfView({ altitude: 2 }, 1000);

    // Set up auto-rotation
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.8;
    const N = 10000; 
    const gData = [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180, 
      lng: (Math.random() - 0.5) * 360,
      color: ['#589bff', '#589bff', '#589bff'][Math.floor(Math.random() * 3)],
    }));
    globe.pointsData(gData)
      .pointAltitude(0)
      .pointColor('color')
      .pointRadius(0.1); 

    const handleResize = () => {
      globe.width(globeRef.current.clientWidth);
      globe.height(globeRef.current.clientHeight);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div ref={globeRef} style={{ width: '100%', height: '100%' }} />;
};

export default GlobeComponent;
