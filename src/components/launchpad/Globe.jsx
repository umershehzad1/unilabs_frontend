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
      const globe = Globe()(globeRef.current)
        .globeImageUrl('//unpkg.com/three-globe/example/img/earth-blue-marble.jpg')
        .bumpImageUrl('//unpkg.com/three-globe/example/img/earth-topology.png')
        .backgroundColor('rgba(0,0,0,0)')
        .atmosphereColor('#4a85dc')
        .atmosphereAltitude(0)
        .pointOfView({ altitude: 2 }, 1000);

      globe.controls().enableZoom = false;
      globe.controls().autoRotate = true;
      globe.controls().autoRotateSpeed = 0.8;

      const N = 0;
      const gData = [...Array(N).keys()].map(() => ({
        lat: (Math.random() - 0.5) * 180,
        lng: (Math.random() - 0.5) * 360,
        color: ['#f3f3f3', '#589bff', '#589bff'][Math.floor(Math.random() * 3)],
      }));
      globe.pointsData(gData)
        .pointAltitude(0)
        .pointColor('color')
        .pointRadius(0.1);

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
