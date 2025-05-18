import React from "react";
import { motion } from "motion/react";

const MotionDiv = ({
  children,
  direction = "fade-in",
  transitionType = "tween",
  transitionEase = "easeInOut",
  duration = 0.5,
  className,
  delay = 0,
  ...props
}) => {
  const getMotionProps = () => {
    const baseProps = {
      transition: {
        duration,
        ease: transitionEase,
        type: transitionType,
        delay,
      },
      viewport: { once: true },
    };

    switch (direction) {
      case "left-to-right":
        return {
          ...baseProps,
          initial: { opacity: 0, x: -50 },
          whileInView: { opacity: 1, x: 0 },
        };
      case "right-to-left":
        return {
          ...baseProps,
          initial: { opacity: 0, x: 50 },
          whileInView: { opacity: 1, x: 0 },
        };
      case "top-to-bottom":
        return {
          ...baseProps,
          initial: { opacity: 0, y: -50 },
          whileInView: { opacity: 1, y: 0 },
        };
      case "bottom-to-top":
        return {
          ...baseProps,
          initial: { opacity: 0, y: 50 },
          whileInView: { opacity: 1, y: 0 },
        };
      case "fade-in":
      default:
        return {
          ...baseProps,
          initial: { opacity: 0 },
          whileInView: { opacity: 1 },
        };
    }
  };

  const motionProps = getMotionProps();

  return (
    <motion.div {...motionProps} {...props} className={className}>
      {children}
    </motion.div>
  );
};

export default MotionDiv;
