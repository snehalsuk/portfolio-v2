
import React, { useEffect, useRef } from 'react';

interface ElectricBackgroundProps {
  theme?: 'dark' | 'light';
}

export const ElectricBackground: React.FC<ElectricBackgroundProps> = ({ theme = 'dark' }) => {
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

    const particles: Particle[] = [];
    const particleCount = 60;

    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      color: string;
      size: number;
      history: {x: number, y: number}[];

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 1.5;
        this.vy = (Math.random() - 0.5) * 1.5;
        this.size = Math.random() * 2 + 1;
        this.history = [];
        const colors = theme === 'dark' 
          ? ['#3b82f6', '#8b5cf6', '#d946ef'] 
          : ['#2563eb', '#7c3aed', '#db2777'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        this.history.push({x: this.x, y: this.y});
        if (this.history.length > 15) this.history.shift();
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.size;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.globalAlpha = theme === 'dark' ? 0.3 : 0.15;
        
        for (let i = 0; i < this.history.length - 1; i++) {
          const p1 = this.history[i];
          const p2 = this.history[i+1];
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
        }
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.2, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = theme === 'dark' ? 0.6 : 0.3;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.strokeStyle = particles[i].color;
            ctx.globalAlpha = (1 - dist / 150) * (theme === 'dark' ? 0.15 : 0.08);
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [theme]);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none -z-10 transition-opacity duration-1000"
      style={{ opacity: theme === 'dark' ? 0.6 : 0.4 }}
    />
  );
};
