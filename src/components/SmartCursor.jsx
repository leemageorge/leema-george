"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const SmartCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [variant, setVariant] = useState("default");

  // 🖱 Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // 🎯 Hover detection
  useEffect(() => {
    const elements = document.querySelectorAll(
      "button, a, .hover-target"
    );

    const handleMouseEnter = () => setVariant("hover");
    const handleMouseLeave = () => setVariant("default");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // ✅ cleanup
    return () => {
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
      width: 10,
      height: 10,
      backgroundColor: "rgba(255,255,255,0.8)",
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      width: 100,
      height: 100,
      backgroundColor: "rgba(255,255,255,0.1)",
      border: "1px solid rgba(255,255,255,0.6)",
      scale: 1.2,
      boxShadow: "0 0 25px rgba(255,255,255,0.5)",
    },
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] mix-blend-difference"
      variants={variants}
      animate={variant}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 20,
      }}
    />
  );
};

export default SmartCursor;