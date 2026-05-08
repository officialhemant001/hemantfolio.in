"use client";

import { TypeAnimation } from "react-type-animation";

export function HeroTypeAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Full Stack Web Developer",
        1000,
        "AI Engineer",
        1000,
        "Open Source Contributor",
        1000,
        "Problem Solver",
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-primary font-medium"
    />
  );
}
