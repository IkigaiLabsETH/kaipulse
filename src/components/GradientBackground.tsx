'use client';
import { useEffect, useRef, useState } from 'react';

export const GradientBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    console.log('GradientBackground mounted');
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Gradient colors
    const colors = [
      '#1a1a2e', // Dark blue
      '#16213e', // Navy
      '#0f3460', // Deep blue
      '#533483', // Purple
    ];

    // Animation variables
    let time = 0;
    const speed = 0.0002;
    const amplitude = 0.5;
    let animationFrameId: number;

    const animate = () => {
      time += speed;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      colors.forEach((color, i) => {
        const offset = i / (colors.length - 1);
        const animatedOffset = offset + Math.sin(time + i) * amplitude * 0.1;
        gradient.addColorStop(Math.max(0, Math.min(1, animatedOffset)), color);
      });
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [dimensions]);

  return (
    <canvas
      ref={canvasRef}
      width={dimensions.width}
      height={dimensions.height}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ opacity: 1, background: 'red', border: '4px solid red' }}
    />
  );
}; 