"use client";

import { TypeAnimation } from "react-type-animation";

export function HeroTypeAnimation() {
  return (
    <TypeAnimation
      sequence={[
        "Python Developer | Django Developer",
        1500,
        "Python & Django Developer",
        1500,
        "Full Stack Web Developer",
        1500,
        "RESTful API & Backend Engineer",
        1500,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-primary font-medium"
    />
  );
}
