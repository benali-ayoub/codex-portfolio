import { useEffect, useRef, useState } from 'react';

const easeOutQuad = t => t * (2 - t);

function MetricCounter({ value }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef(null);
  const decimals = Number.isInteger(value) ? 0 : 1;

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    let animationFrame;
    const duration = 1600;
    const startAnimation = () => {
      const start = performance.now();

      const update = now => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = easeOutQuad(progress);
        setDisplayValue(value * eased);
        if (progress < 1) {
          animationFrame = requestAnimationFrame(update);
        }
      };

      animationFrame = requestAnimationFrame(update);
    };

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startAnimation();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.6 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [value]);

  const formattedValue = decimals
    ? displayValue.toFixed(decimals)
    : Math.round(displayValue).toLocaleString();

  return (
    <span ref={ref} className="metric__value">
      {formattedValue}
    </span>
  );
}

export default MetricCounter;
