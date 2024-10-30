"use client"
import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

const GlobeComponent = () => {
  const globeRef = useRef();

  useEffect(() => {
    // Initialize the Globe
    const globe = Globe()(globeRef.current)
      .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg') // Blue earth texture
      .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png') // Elevation data for relief effect
      .backgroundColor('rgba(0,0,0,0)') // Transparent background
      .atmosphereColor('#4a85dc') // Atmosphere color (blue tint)
      .atmosphereAltitude(0) // Atmosphere thickness
      .pointOfView({ altitude: 2 }, 1000); // Starting view of the globe

    // Set up auto-rotation
    globe.controls().autoRotate = true;
    globe.controls().autoRotateSpeed = 0.3;

    // Increase Number of Data Points for More Dots
    const N = 10000; // Increase to 10,000 or more for a large number of dots
    const gData = [...Array(N).keys()].map(() => ({
      lat: (Math.random() - 0.5) * 180, // Random latitude
      lng: (Math.random() - 0.5) * 360, // Random longitude
      color: ['#589bff', '#589bff', '#589bff'][Math.floor(Math.random() * 3)], // Randomly pick one of the colors
    }));

    // Load the points onto the globe
    globe.pointsData(gData)
      .pointAltitude(0) // Flat dots on the globe surface
      .pointColor('color') // Use the color property for each point
      .pointRadius(0.1); // Smaller point size for more dots

    // Handle window resize for responsiveness
    const handleResize = () => {
      globe.width(globeRef.current.clientWidth);
      globe.height(globeRef.current.clientHeight);
    };

    // Set initial size
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <div ref={globeRef} style={{ width: '100%', height: '100%' }} />;
};

export default GlobeComponent;
