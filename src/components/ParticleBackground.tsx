
import { useCallback, useEffect, useState } from "react";

const ParticleBackground = () => {
  const [particles, setParticles] = useState<JSX.Element[]>([]);

  const generateParticles = useCallback(() => {
    const totalParticles = Math.min(window.innerWidth / 20, 40); // Responsive number of particles
    const newParticles: JSX.Element[] = [];

    for (let i = 0; i < totalParticles; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 50 + 30;
      const delay = Math.random() * 5;
      const opacity = Math.random() * 0.5 + 0.1;

      newParticles.push(
        <div
          key={i}
          className="absolute bg-primary/30 dark:bg-primary/50 rounded-full"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            left: `${x}%`,
            top: `${y}%`,
            opacity: opacity,
            animation: `float ${duration}s infinite alternate ${delay}s ease-in-out`,
            boxShadow: size > 2 ? "0 0 5px currentColor" : "none",
          }}
        />
      );
    }
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    generateParticles();
    window.addEventListener("resize", generateParticles);
    return () => window.removeEventListener("resize", generateParticles);
  }, [generateParticles]);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles}
    </div>
  );
};

export default ParticleBackground;
