"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface TextScrubProps {
  children: React.ReactNode
  className?: string
  offset?: ["start end" | "start center" | "start bottom" | string, "start end" | "start center" | "start bottom" | string]
}

export function TextScrub({ 
  children, 
  className = "", 
  offset = ["top 95%", "top 60%"] 
}: TextScrubProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: offset as any
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0.35, 1])
  const filter = useTransform(scrollYProgress, [0, 1], ["blur(1px)", "blur(0px)"])

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        filter,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
