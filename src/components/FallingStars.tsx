import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  length: number;
  speed: number;
  opacity: number;
  size: number;
  angle: number;
  delay: number;
  currentDelay: number;
}

interface AmbientStar {
  x: number;
  y: number;
  radius: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinklePhase: number;
}

export const FallingStars: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Generate falling meteor shooting stars
    const meteorCount = 6;
    const meteors: Star[] = Array.from({ length: meteorCount }, () => ({
      x: Math.random() * width * 1.2,
      y: -50 - Math.random() * 200,
      length: 80 + Math.random() * 120,
      speed: 4 + Math.random() * 6,
      opacity: 0.4 + Math.random() * 0.5,
      size: 1.2 + Math.random() * 1.5,
      angle: (Math.PI / 4) + (Math.random() * 0.15 - 0.075), // ~45 degrees diagonal
      delay: Math.random() * 180,
      currentDelay: Math.random() * 120,
    }));

    // Ambient twinkling background stars
    const ambientCount = 35;
    const ambientStars: AmbientStar[] = Array.from({ length: ambientCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: 0.6 + Math.random() * 1.2,
      baseAlpha: 0.15 + Math.random() * 0.4,
      twinkleSpeed: 0.02 + Math.random() * 0.03,
      twinklePhase: Math.random() * Math.PI * 2,
    }));

    let frame = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      frame++;

      // 1. Draw Twinkling Ambient Stars
      ambientStars.forEach((star) => {
        const alpha = star.baseAlpha + Math.sin(frame * star.twinkleSpeed + star.twinklePhase) * 0.25;
        const boundedAlpha = Math.max(0.05, Math.min(1, alpha));
        
        ctx.save();
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(180, 230, 255, ${boundedAlpha})`;
        ctx.shadowBlur = 4;
        ctx.shadowColor = '#00B8E6';
        ctx.fill();
        ctx.restore();
      });

      // 2. Draw Falling Shooting Stars
      meteors.forEach((meteor) => {
        if (meteor.currentDelay > 0) {
          meteor.currentDelay--;
          return;
        }

        const dx = Math.cos(meteor.angle) * meteor.speed;
        const dy = Math.sin(meteor.angle) * meteor.speed;

        meteor.x += dx;
        meteor.y += dy;

        // Tail coordinate
        const tailX = meteor.x - Math.cos(meteor.angle) * meteor.length;
        const tailY = meteor.y - Math.sin(meteor.angle) * meteor.length;

        // Draw meteor trail gradient
        const gradient = ctx.createLinearGradient(tailX, tailY, meteor.x, meteor.y);
        gradient.addColorStop(0, 'rgba(0, 184, 230, 0)');
        gradient.addColorStop(0.6, `rgba(8, 120, 255, ${meteor.opacity * 0.4})`);
        gradient.addColorStop(0.9, `rgba(0, 184, 230, ${meteor.opacity * 0.8})`);
        gradient.addColorStop(1, `rgba(255, 255, 255, ${meteor.opacity})`);

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(meteor.x, meteor.y);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = meteor.size;
        ctx.lineCap = 'round';
        ctx.shadowBlur = 8;
        ctx.shadowColor = '#00B8E6';
        ctx.stroke();

        // Glowing head particle
        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, meteor.size * 1.4, 0, Math.PI * 2);
        ctx.fillStyle = '#FFFFFF';
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#FFFFFF';
        ctx.fill();
        ctx.restore();

        // Reset when meteor leaves screen
        if (meteor.x > width + 100 || meteor.y > height + 100) {
          meteor.x = Math.random() * width * 1.1 - 100;
          meteor.y = -60 - Math.random() * 150;
          meteor.currentDelay = 80 + Math.random() * 200;
          meteor.speed = 4 + Math.random() * 6;
          meteor.length = 80 + Math.random() * 120;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
    />
  );
};
