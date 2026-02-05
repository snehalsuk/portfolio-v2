import React, { useEffect, useRef } from 'react';

export const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars: { x: number; y: number; size: number; speed: number; opacity: number }[] = [];
    const starCount = 100;

    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 0.5,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random(),
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      stars.forEach((star) => {
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();

        // Move star
        star.y += star.speed; // Move down like space travel or up? User said "moving". 
        // Let's move them slowly sideways or towards camera? 
        // Simple "stars moving" usually means scrolling. 
        // Let's make them float slowly up to match the "rising" feel or just drift.
        // Let's drift right slightly and down?
        // User said "little star moving". Let's just do slow drift.
        
        // Let's do a slow forward movement simulation (stars coming at you)? No, 2D drift is safer.
        // Drifting right:
        star.x += star.speed * 0.5;
        
        // Wrap around
        if (star.x > width) star.x = 0;
        if (star.y > height) star.y = 0;
      });

      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 z-0 pointer-events-none opacity-50"
    />
  );
};
