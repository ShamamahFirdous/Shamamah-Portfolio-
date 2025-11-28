import React, { useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
  age: number;
}

const CursorTrail: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<Point[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;

    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize size
    updateSize();
    window.addEventListener('resize', updateSize);

    const handleMouseMove = (e: MouseEvent) => {
      // Add a new point at the mouse position with full age (1.0)
      pointsRef.current.push({
        x: e.clientX,
        y: e.clientY,
        age: 1.0 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const points = pointsRef.current;
      
      if (points.length > 1) {
        ctx.lineJoin = 'round';
        ctx.lineCap = 'round';

        // Draw segments
        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];
          
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          
          // Light Brown Color: #bf9f86 (matches coffee-400)
          const colorString = `rgba(191, 159, 134, ${p1.age})`;
          
          // Add Glow Effect
          ctx.shadowBlur = 15;
          ctx.shadowColor = colorString;
          
          ctx.strokeStyle = colorString;
          
          // Age controls width (tapering effect)
          ctx.lineWidth = p1.age * 8; 
          
          ctx.stroke();
        }
      }

      // Reset shadow for performance or subsequent draws (though we clear rect anyway)
      ctx.shadowBlur = 0;

      // Decay points
      for (let i = 0; i < points.length; i++) {
        points[i].age -= 0.02; // Speed of fade
      }

      // Remove invisible points
      pointsRef.current = points.filter(p => p.age > 0);

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed inset-0 pointer-events-none z-[100]" 
      style={{ touchAction: 'none' }}
    />
  );
};

export default CursorTrail;