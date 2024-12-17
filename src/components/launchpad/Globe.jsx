"use client";
import dynamic from 'next/dynamic';
import React, { useEffect, useRef } from 'react';
import Globe from 'globe.gl';

const GlobeComponent = dynamic(() => Promise.resolve(GlobeInnerComponent), {
  ssr: false,
});

const GlobeInnerComponent = () => {
  const globeRef = useRef();
  const containerRef = useRef();

  useEffect(() => {
    if (typeof window !== 'undefined' && globeRef.current) {
      // Initialize the globe object
      const globe = Globe()(globeRef.current)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg') // Use the Earth texture
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png') // Bump map for texture detail
        .backgroundColor('rgba(0,0,0,0)') // Transparent background
        .showGraticules(false) // No grid lines
        .arcColor('green') // Set arc color to green for radiation
        .arcDashLength(0.3) // Adjust arc dash length for animation
        .arcDashGap(0.5) // Adjust arc dash gap for smooth transitions
        .arcDashAnimateTime(4000) // Animation speed for arcs
        .arcAltitude(0.1); // Low altitude for arcs to float above the surface

      // Create random arcs (connections) between points, simulating radiation lines
      const N = 20; // Number of arcs to animate
      const gData = [...Array(N).keys()].map(() => ({
        startLat: (Math.random() - 0.5) * 180, // Random start latitude
        startLng: (Math.random() - 0.5) * 360, // Random start longitude
        endLat: (Math.random() - 0.5) * 180, // Random end latitude
        endLng: (Math.random() - 0.5) * 360, // Random end longitude
        color: '#00FF00', // Green color for radiation
      }));

      globe.arcsData(gData)
        .arcColor('color')
        .arcAltitude(0.2) // Set altitude of arcs above the surface
        .arcDashLength(0.5); // Control the dash animation for smoothness

      // Create "dot" style points for Earth surface
      const dotData = [...Array(200).keys()].map(() => ({
        lat: (Math.random() - 0.5) * 180, // Random latitude
        lng: (Math.random() - 0.5) * 360, // Random longitude
        color: '#00FF00', // Green dots (points)
      }));

      globe.pointsData(dotData)
        .pointAltitude(0.05) // Set altitude to make the dots float above the surface
        .pointColor('color') // Set the color of points
        .pointRadius(0.5); // Size of the dots

      // Resize the globe to fit container size
      const resizeGlobe = () => {
        if (containerRef.current) {
          globe.width(containerRef.current.clientWidth);
          globe.height(containerRef.current.clientHeight);
        }
      };

      resizeGlobe();
      const resizeObserver = new ResizeObserver(resizeGlobe);
      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <div ref={containerRef} style={{
      width: '100%',
      height: '100%',
      overflow: 'hidden',
      position: 'relative',
      aspectRatio: '1',
    }}>
      <div ref={globeRef} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
    </div>
  );
};

export default GlobeComponent;
