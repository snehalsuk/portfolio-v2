
import React, { useEffect, useRef } from 'react';

interface Point3D {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  vz: number;
  originalX: number;
  originalY: number;
  originalZ: number;
}

interface Pulse {
  fromIdx: number;
  toIdx: number;
  progress: number;
  speed: number;
  color: string;
}

export const NeuralNetwork3D: React.FC<{ 
  theme?: 'dark' | 'light'; 
  density?: number;
  speed?: number;
  interactionRadius?: number;
}> = ({ 
  theme = 'dark', 
  density = 50,
  speed = 1.0,
  interactionRadius = 200
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = canvas.clientWidth;
    let height = canvas.clientHeight;
    
    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * window.devicePixelRatio;
      canvas.height = height * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    window.addEventListener('resize', resize);
    resize();

    const nodeCount = density;
    const connectionDistance = 220;
    const nodes: Point3D[] = [];
    const pulses: Pulse[] = [];
    const perspective = 600;

    for (let i = 0; i < nodeCount; i++) {
      const x = (Math.random() - 0.5) * 900;
      const y = (Math.random() - 0.5) * 900;
      const z = (Math.random() - 0.5) * 900;
      nodes.push({
        x, y, z,
        originalX: x,
        originalY: y,
        originalZ: z,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.3,
      });
    }

    let rotationX = 0;
    let rotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / width - 0.5) * 2;
      const my = ((e.clientY - rect.top) / height - 0.5) * 2;
      mouseRef.current = { x: mx * 300, y: my * 300, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    const project = (p: Point3D) => {
      const cosX = Math.cos(rotationX);
      const sinX = Math.sin(rotationX);
      const cosY = Math.cos(rotationY);
      const sinY = Math.sin(rotationY);

      // Rotate around Y
      let y1 = p.y * cosX - p.z * sinX;
      let z1 = p.z * cosX + p.y * sinX;

      // Rotate around X
      let x1 = p.x * cosY + z1 * sinY;
      let z2 = z1 * cosY - p.x * sinY;

      const scale = perspective / Math.max(10, perspective + z2);
      
      return {
        x: x1 * scale + width / 2,
        y: y1 * scale + height / 2,
        scale,
        z: z2,
        rx: x1,
        ry: y1
      };
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      // Auto-rotation
      rotationX += 0.0015 * speed;
      rotationY += 0.001 * speed;

      // Update positions with physics
      nodes.forEach(n => {
        // Drift
        n.x += n.vx * speed;
        n.y += n.vy * speed;
        n.z += n.vz * speed;

        // Boundaries
        if (Math.abs(n.x) > 450) n.vx *= -1;
        if (Math.abs(n.y) > 450) n.vy *= -1;
        if (Math.abs(n.z) > 450) n.vz *= -1;

        // Mouse interaction (Repulsion in 3D projected space)
        if (mouseRef.current.active) {
          const dx = n.x - mouseRef.current.x;
          const dy = n.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < interactionRadius) {
            const force = (interactionRadius - dist) / interactionRadius;
            n.x += dx * force * 0.05;
            n.y += dy * force * 0.05;
          }
        }

        // Return to original (slight spring back)
        n.x += (n.originalX - n.x) * 0.001;
        n.y += (n.originalY - n.y) * 0.001;
        n.z += (n.originalZ - n.z) * 0.001;
      });

      const projectedNodes = nodes.map(project);

      // Draw connections with gradient/alpha based on depth and distance
      ctx.lineCap = 'round';
      for (let i = 0; i < projectedNodes.length; i++) {
        for (let j = i + 1; j < projectedNodes.length; j++) {
          const p1 = projectedNodes[i];
          const p2 = projectedNodes[j];
          
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dz = nodes[i].z - nodes[j].z;
          const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

          if (dist < connectionDistance) {
            const alpha = (1 - dist / connectionDistance) * 0.25 * Math.min(p1.scale, p2.scale);
            ctx.beginPath();
            ctx.lineWidth = 0.8 * Math.min(p1.scale, p2.scale);
            ctx.strokeStyle = theme === 'dark' 
              ? `rgba(96, 165, 250, ${alpha})` 
              : `rgba(37, 99, 235, ${alpha})`;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();

            // Spawn pulses
            if (pulses.length < 25 && Math.random() < 0.0005) {
              pulses.push({
                fromIdx: i,
                toIdx: j,
                progress: 0,
                speed: 0.008 + Math.random() * 0.015,
                color: theme === 'dark' ? '#60a5fa' : '#2563eb'
              });
            }
          }
        }
      }

      // Draw Pulses
      pulses.forEach((pulse, idx) => {
        pulse.progress += pulse.speed;
        if (pulse.progress >= 1) {
          pulses.splice(idx, 1);
          return;
        }

        const p1 = projectedNodes[pulse.fromIdx];
        const p2 = projectedNodes[pulse.toIdx];

        const px = p1.x + (p2.x - p1.x) * pulse.progress;
        const py = p1.y + (p2.y - p1.y) * pulse.progress;
        const pScale = p1.scale + (p2.scale - p1.scale) * pulse.progress;

        ctx.beginPath();
        const r = Math.max(0.2, 2.5 * pScale);
        ctx.arc(px, py, r, 0, Math.PI * 2);
        ctx.fillStyle = pulse.color;
        ctx.shadowBlur = 12 * pScale;
        ctx.shadowColor = pulse.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      // Draw Nodes
      projectedNodes.forEach((p, idx) => {
        const size = Math.max(0.1, 2.2 * p.scale);
        
        // Node Glow
        ctx.beginPath();
        const glowSize = Math.max(0.1, size * (2.5 + Math.sin(Date.now() / 400 + idx) * 0.8));
        const gradient = ctx.createRadialGradient(p.x, p.y, 0.1, p.x, p.y, glowSize);
        
        if (theme === 'dark') {
          gradient.addColorStop(0, 'rgba(96, 165, 250, 0.5)');
          gradient.addColorStop(1, 'rgba(139, 92, 246, 0)');
        } else {
          gradient.addColorStop(0, 'rgba(37, 99, 235, 0.4)');
          gradient.addColorStop(1, 'rgba(124, 58, 237, 0)');
        }
        
        ctx.fillStyle = gradient;
        ctx.arc(p.x, p.y, glowSize, 0, Math.PI * 2);
        ctx.fill();

        // Node Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fillStyle = theme === 'dark' ? '#fff' : '#1e3a8a';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    const animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animId);
    };
  }, [theme, density]);

  return (
    <canvas 
      ref={canvasRef} 
      className="w-full h-full block absolute inset-0 pointer-events-auto opacity-90 transition-opacity duration-1000"
      style={{ cursor: 'crosshair' }}
    />
  );
};
