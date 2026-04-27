"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function GravityParticles() {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    // Генерируем 50 случайных точек при загрузке
    const generated = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: Math.random() * 4 + 1,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 2,
    }));
    setParticles(generated);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black pointer-events-none">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-white opacity-60"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            top: -10,
          }}
          animate={{
            y: ["0vh", "110vh"],
            opacity: [0.2, 0.6, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
