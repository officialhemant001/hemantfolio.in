"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function RabbitCursor() {
  const controls = useAnimation();
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const [rabbitState, setRabbitState] = useState<"hopping" | "sitting" | "scratching">("hopping");

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (windowSize.width === 0) return;

    let isMounted = true;
    let currentX = Math.random() * windowSize.width;
    let currentY = Math.random() * windowSize.height;
    let currentScaleX = 1;

    controls.set({ x: currentX, y: currentY, opacity: 1, scaleX: currentScaleX });

    const wander = async () => {
      while (isMounted) {
        // Decide next target
        const targetX = Math.random() * (windowSize.width - 150) + 75;
        const targetY = Math.random() * (windowSize.height - 150) + 75;
        
        // Face the direction of movement
        currentScaleX = targetX > currentX ? 1 : -1;
        
        setRabbitState("hopping");

        // Move to target
        await controls.start({
          x: targetX,
          y: targetY,
          scaleX: currentScaleX,
          transition: {
            duration: Math.random() * 3 + 3, // 3 to 6 seconds to move
            ease: "easeInOut"
          }
        });

        currentX = targetX;
        currentY = targetY;

        // Random action when stopped
        const rand = Math.random();
        if (rand < 0.4) {
          setRabbitState("sitting");
          await new Promise((resolve) => setTimeout(resolve, Math.random() * 3000 + 2000));
        } else if (rand < 0.8) {
          setRabbitState("scratching");
          await new Promise((resolve) => setTimeout(resolve, Math.random() * 2000 + 2000));
        } else {
          // Just pause briefly
          await new Promise((resolve) => setTimeout(resolve, 500));
        }
      }
    };

    wander();

    return () => {
      isMounted = false;
    };
  }, [windowSize, controls]);

  if (windowSize.width === 0) return null;

  return (
    <motion.div
      animate={controls}
      className="pointer-events-none fixed top-0 left-0 z-50 flex items-center justify-center drop-shadow-md"
      style={{ 
        width: 80, 
        height: 80,
        marginLeft: -40,
        marginTop: -40 
      }}
    >
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        {/* Shadow */}
        <ellipse cx="50" cy="90" rx="30" ry="5" fill="rgba(0,0,0,0.15)" />
        
        {/* Back Ear */}
        <motion.path 
          d="M 60 38 Q 65 10 75 10 Q 80 15 70 40" 
          fill="#FFFFFF" stroke="#111" strokeWidth="3"
          animate={rabbitState === "scratching" ? { rotate: [0, -15, 0] } : rabbitState === "hopping" ? { rotate: [0, -5, 0] } : {}}
          transition={{ repeat: Infinity, duration: rabbitState === "scratching" ? 0.3 : 0.5 }}
          style={{ transformOrigin: "60px 38px" }}
        />

        {/* Tail */}
        <circle cx="20" cy="75" r="8" fill="#FFFFFF" stroke="#111" strokeWidth="3" />

        {/* Body */}
        <motion.ellipse 
          cx="50" cy="70" rx="25" ry="18" fill="#FFFFFF" stroke="#111" strokeWidth="3"
          animate={rabbitState === "hopping" ? { y: [-3, 0, -3] } : {}}
          transition={{ repeat: Infinity, duration: 0.5 }}
        />

        {/* Head */}
        <motion.circle 
          cx="68" cy="52" r="16" fill="#FFFFFF" stroke="#111" strokeWidth="3"
          animate={rabbitState === "hopping" ? { y: [-2, 0, -2] } : {}}
          transition={{ repeat: Infinity, duration: 0.5 }}
        />

        {/* Front Ear */}
        <motion.path 
          d="M 58 45 Q 50 10 65 10 Q 75 15 68 40" 
          fill="#FFFFFF" stroke="#111" strokeWidth="3"
          animate={rabbitState === "scratching" ? { rotate: [0, -20, 0] } : rabbitState === "hopping" ? { rotate: [0, -10, 0] } : {}}
          transition={{ repeat: Infinity, duration: rabbitState === "scratching" ? 0.3 : 0.5 }}
          style={{ transformOrigin: "58px 45px" }}
        />
        <motion.path 
          d="M 60 40 Q 55 18 63 15 Q 68 18 65 38" 
          fill="#FF99CC"
          animate={rabbitState === "scratching" ? { rotate: [0, -20, 0] } : rabbitState === "hopping" ? { rotate: [0, -10, 0] } : {}}
          transition={{ repeat: Infinity, duration: rabbitState === "scratching" ? 0.3 : 0.5 }}
          style={{ transformOrigin: "58px 45px" }}
        />

        {/* Eye */}
        <circle cx="72" cy="48" r="2.5" fill="#111" />
        
        {/* Nose */}
        <circle cx="83" cy="55" r="2" fill="#FF99CC" />

        {/* Arm (scratching/hopping) */}
        <motion.path
          d="M 65 70 Q 75 80 80 90" 
          fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round"
          animate={rabbitState === "scratching" ? { rotate: [0, -50, 0], y: [-5, -20, -5] } : rabbitState === "hopping" ? { rotate: [0, 10, 0] } : {}}
          transition={{ repeat: Infinity, duration: rabbitState === "scratching" ? 0.3 : 0.5 }}
          style={{ transformOrigin: "65px 70px" }}
        />
        
        {/* Back Leg */}
        <path d="M 35 75 Q 30 90 40 90" fill="none" stroke="#111" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}
