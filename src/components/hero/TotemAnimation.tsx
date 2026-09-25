'use client';

import React, { useState, useRef, useEffect } from 'react';

interface TotemAnimationProps {
  activeLayer?: string;
  onSelectLayer?: (layer: string) => void;
}

export default function TotemAnimation({ activeLayer, onSelectLayer }: TotemAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 16;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (containerRef.current) {
        containerRef.current.style.transform = `perspective(1200px) rotateY(${x.toFixed(2)}deg) rotateX(${(-y).toFixed(2)}deg)`;
      }
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    if (containerRef.current) {
      containerRef.current.style.transform = 'perspective(1200px) rotateY(0deg) rotateX(0deg)';
    }
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const layerKeys = ['layer-1', 'layer-2', 'layer-3', 'layer-4'];
  const handleCubeClick = (index: number) => {
    if (onSelectLayer) {
      const selected = layerKeys[index % layerKeys.length];
      onSelectLayer(selected);
    }
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[420px] h-[300px] sm:h-[400px] lg:h-[460px] flex items-center justify-center select-none transition-transform duration-300 ease-out will-change-transform"
      style={{
        transform: 'perspective(1200px) rotateY(0deg) rotateX(0deg)',
      }}
      aria-label="Interactive 3D Isometric Architecture Cube"
    >

      {/* Floating & Rotating Wrapper */}
      <div className="iso-wrapper">
        <div className="rotating-element">
          <div className="iso-container">
          {/* Cube Layer 1 (Center) */}
          <div className="cube">
            <div style={{ '--x': -1, '--y': 0 } as React.CSSProperties}>
              <span onClick={() => handleCubeClick(0)} style={{ '--i': 3 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(1)} style={{ '--i': 2 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(2)} style={{ '--i': 1 } as React.CSSProperties} />
            </div>
            <div style={{ '--x': 0, '--y': 0 } as React.CSSProperties}>
              <span onClick={() => handleCubeClick(3)} style={{ '--i': 3 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(4)} style={{ '--i': 2 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(5)} style={{ '--i': 1 } as React.CSSProperties} />
            </div>
            <div style={{ '--x': 1, '--y': 0 } as React.CSSProperties}>
              <span onClick={() => handleCubeClick(6)} style={{ '--i': 3 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(7)} style={{ '--i': 2 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(8)} style={{ '--i': 1 } as React.CSSProperties} />
            </div>
          </div>

          {/* Cube Layer 2 (Offset Top-Left) */}
          <div className="cube">
            <div style={{ '--x': -1, '--y': 0 } as React.CSSProperties}>
              <span onClick={() => handleCubeClick(9)} style={{ '--i': 3 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(10)} style={{ '--i': 2 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(11)} style={{ '--i': 1 } as React.CSSProperties} />
            </div>
            <div style={{ '--x': 0, '--y': 0 } as React.CSSProperties}>
              <span onClick={() => handleCubeClick(12)} style={{ '--i': 3 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(13)} style={{ '--i': 2 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(14)} style={{ '--i': 1 } as React.CSSProperties} />
            </div>
            <div style={{ '--x': 1, '--y': 0 } as React.CSSProperties}>
              <span onClick={() => handleCubeClick(15)} style={{ '--i': 3 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(16)} style={{ '--i': 2 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(17)} style={{ '--i': 1 } as React.CSSProperties} />
            </div>
          </div>

          {/* Cube Layer 3 (Offset Bottom-Right) */}
          <div className="cube">
            <div style={{ '--x': -1, '--y': 0 } as React.CSSProperties}>
              <span onClick={() => handleCubeClick(18)} style={{ '--i': 3 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(19)} style={{ '--i': 2 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(20)} style={{ '--i': 1 } as React.CSSProperties} />
            </div>
            <div style={{ '--x': 0, '--y': 0 } as React.CSSProperties}>
              <span onClick={() => handleCubeClick(21)} style={{ '--i': 3 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(22)} style={{ '--i': 2 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(23)} style={{ '--i': 1 } as React.CSSProperties} />
            </div>
            <div style={{ '--x': 1, '--y': 0 } as React.CSSProperties}>
              <span onClick={() => handleCubeClick(24)} style={{ '--i': 3 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(25)} style={{ '--i': 2 } as React.CSSProperties} />
              <span onClick={() => handleCubeClick(26)} style={{ '--i': 1 } as React.CSSProperties} />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
