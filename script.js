const metricElements = document.querySelectorAll('.metric__value');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        animateCount(entry.target);
        entry.target.dataset.animated = 'true';
      }
    });
  },
  { threshold: 0.6 }
);

metricElements.forEach(metric => observer.observe(metric));

function animateCount(element) {
  const target = parseFloat(element.dataset.count);
  const isFloat = !Number.isInteger(target);
  const duration = 1600;
  const start = performance.now();

  function update(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = easeOutQuad(progress);
    const value = target * eased;
    element.textContent = isFloat ? value.toFixed(1) : Math.round(value);
    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function easeOutQuad(t) {
  return t * (2 - t);
}

const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let resizeTimeout;

function createParticles() {
  const count = Math.floor((canvas.width * canvas.height) / 18000);
  particles = Array.from({ length: count }, () => createParticle());
}

function createParticle() {
  const palette = ['#6c5ce7', '#00f5ff', '#ff5f9e'];
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.8 + 0.4,
    speed: Math.random() * 0.6 + 0.1,
    drift: Math.random() * 0.5 - 0.25,
    color: palette[Math.floor(Math.random() * palette.length)]
  };
}

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  createParticles();
}

function draw() {
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

  requestAnimationFrame(draw);
}

resizeCanvas();
draw();

window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(resizeCanvas, 150);
});

const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
