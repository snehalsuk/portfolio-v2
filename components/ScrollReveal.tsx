"use client";

import React from "react";
import { motion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  viewportAmount?: number;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.5,
  viewportAmount = 0.2,
}) => {
  const getVariants = () => {
    const distance = 50;

    const initial: any = { opacity: 0 };
    const animate: any = { opacity: 1 };

    switch (direction) {
      case "up":
        initial.y = distance;
        animate.y = 0;
        break;
      case "down":
        initial.y = -distance;
        animate.y = 0;
        break;
      case "left":
        initial.x = distance;
        animate.x = 0;
        break;
      case "right":
        initial.x = -distance;
        animate.x = 0;
        break;
      case "none":
        break;
    }

    return {
      hidden: initial,
      visible: animate,
    };
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: viewportAmount }}
      transition={{ duration, delay, ease: "easeOut" }}
      variants={getVariants()}
      className={className}
    >
      {children}
    </motion.div>
  );
};
