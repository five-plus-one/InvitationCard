import React, { useRef, useEffect } from 'react';

// A single firework particle
class Particle {
  x: number;
  y: number;
  sx: number;
  sy: number;
  size: number;
  color: string;
  alpha: number;
  decay: number;
  gravity: number;
  isRocket: boolean;

  constructor(x: number, y: number, color: string, isRocket: boolean = false) {
    this.x = x;
    this.y = y;
    this.isRocket = isRocket;

    // Rocket properties
    if (this.isRocket) {
      this.sx = Math.random() * 4 - 2; // horizontal speed
      this.sy = -(Math.random() * 2 + 10); // vertical speed
      this.size = Math.random() * 2 + 2;
    } else { // Explosion particle properties
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 8 + 1;
      this.sx = Math.cos(angle) * speed;
      this.sy = Math.sin(angle) * speed;
      this.size = Math.random() * 2 + 1;
    }

    this.color = color;
    this.alpha = 1;
    this.decay = this.isRocket ? 1 : Math.random() * 0.02 + 0.015;
    this.gravity = 0.08;
  }

  update() {
    this.x += this.sx;
    this.y += this.sy;
    this.sy += this.gravity;
    this.alpha -= this.decay;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const Fireworks: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fireworks: Particle[] = [];
    let lastLaunchTime = 0;
    const launchInterval = 1000; // Launch a firework every second
    const HUES = [0, 30, 60, 210, 300, 330]; // Festive colors (reds, golds, blues)

    const launchFirework = () => {
      const x = Math.random() * canvas.width;
      const y = canvas.height;
      const color = `hsl(${HUES[Math.floor(Math.random() * HUES.length)]}, 100%, 60%)`;
      fireworks.push(new Particle(x, y, color, true));
    };

    const explode = (x: number, y: number, color: string) => {
      const particleCount = 100;
      for (let i = 0; i < particleCount; i++) {
        fireworks.push(new Particle(x, y, color));
      }
    };

    const animate = (timestamp: number) => {
      if (!ctx) return;
      
      if (timestamp - lastLaunchTime > launchInterval) {
        launchFirework();
        lastLaunchTime = timestamp;
      }
      
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'; // Trail effect
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.globalCompositeOperation = 'lighter';

      for (let i = fireworks.length - 1; i >= 0; i--) {
        const p = fireworks[i];
        p.update();
        p.draw(ctx);

        if (p.isRocket && p.sy >= 0) {
          explode(p.x, p.y, p.color);
          fireworks.splice(i, 1);
        } else if (p.alpha <= 0) {
          fireworks.splice(i, 1);
        }
      }
      animationFrameId.current = requestAnimationFrame(animate);
    };

    animationFrameId.current = requestAnimationFrame(animate);

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10" />;
};

export default Fireworks;