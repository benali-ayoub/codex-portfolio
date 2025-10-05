import { useEffect, useRef } from 'react';

const palette = ['#6c5ce7', '#00f5ff', '#ff5f9e'];

function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationFrame;
    let resizeTimeout;

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8 + 0.4,
      speed: Math.random() * 0.6 + 0.1,
      drift: Math.random() * 0.5 - 0.25,
      color: palette[Math.floor(Math.random() * palette.length)],
    });

    const createParticles = () => {
      const count = Math.floor((canvas.width * canvas.height) / 18000);
      particles = Array.from({ length: count }, createParticle);
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        ctx.beginPath();
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.8;
        ctx.shadowColor = particle.color;
        ctx.shadowBlur = 18;
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        particle.y -= particle.speed;
        particle.x += particle.drift;

        if (particle.y < -10) {
          particle.y = canvas.height + 10;
          particle.x = Math.random() * canvas.width;
        }

        if (particle.x < -10) {
          particle.x = canvas.width + 10;
        } else if (particle.x > canvas.width + 10) {
          particle.x = -10;
        }
      });

      animationFrame = requestAnimationFrame(draw);
    };

    resizeCanvas();
    draw();

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 150);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle-canvas" aria-hidden="true" />;
}

export default ParticleCanvas;
