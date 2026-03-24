"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { ElementType, ReactNode } from "react"

interface StaggerGridProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  className?: string
  staggerDelay?: number
  delayChildren?: number
  once?: boolean
  as?: ElementType
}

export function StaggerGrid({
  children,
  className = "",
  staggerDelay = 0.15,
  delayChildren = 0,
  once = true,
  as: Component = "div",
  ...props
}: StaggerGridProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayChildren,
      },
    },
  }

  // Use motion() to dynamically create a motion component
  const MotionComponent = motion(Component as any)

  return (
    <MotionComponent
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-10%" }}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}

interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode
  className?: string
  as?: ElementType
  distance?: number
  direction?: "up" | "down" | "left" | "right" | "none"
}

export function StaggerItem({
  children,
  className = "",
  as: Component = "div",
  distance = 30,
  direction = "up",
  ...props
}: StaggerItemProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance }
      case "down":
        return { y: -distance }
      case "left":
        return { x: distance }
      case "right":
        return { x: -distance }
      default:
        return {}
    }
  }

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      ...getInitialPosition() 
    },
    show: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      }
    },
  }

  const MotionComponent = motion(Component as any)

  return (
    <MotionComponent
      variants={itemVariants}
      className={className}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
