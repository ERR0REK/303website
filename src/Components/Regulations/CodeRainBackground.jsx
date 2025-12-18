// src/Components/Regulations/CodeRainBackground.jsx

import React, { useEffect, useRef } from 'react';

export default function CodeRainBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d', { alpha: true, willReadFrequently: false });
    let animationId;
    let lastFrameTime = 0;
    const frameInterval = 100; // Ultra light - 10 FPS dla starych urządzeń
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    
    // Sprawdź czy to mobile - mniejsze canvas dla oszczędzania baterii
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const chars = isMobile ? '01アイ' : 'アイウエオ0123456789ABC<>';
    const charArray = chars.split('');
    const fontSize = isMobile ? 12 : 14;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = new Uint16Array(columns);
    drops.fill(1);

    const draw = (currentTime) => {
      if (currentTime - lastFrameTime < frameInterval) {
        animationId = requestAnimationFrame(draw);
        return;
      }
      lastFrameTime = currentTime;

      ctx.fillStyle = isMobile ? 'rgba(10, 10, 15, 0.15)' : 'rgba(10, 10, 15, 0.08)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = isMobile ? 'rgba(0, 240, 255, 0.08)' : 'rgba(0, 240, 255, 0.12)';
      ctx.font = `${fontSize}px monospace`;

      // Skip co 3 zamiast co 2 dla oszczędzania
      for (let i = 0; i < drops.length; i += isMobile ? 3 : 2) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.97) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      
      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);
    
    // Resize listener z debounce
    let resizeTimeout;
    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 250);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.4, willChange: 'auto' }}
    />
  );
}