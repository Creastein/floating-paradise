"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ReactNode, useRef } from "react"

interface TimelineItem {
  title: string
  description: string
  side: "left" | "right"
}

interface AnimatedTimelineProps {
  items: TimelineItem[]
  bgColor?: string
}

export function AnimatedTimeline({ items, bgColor = "#F5EFE4" }: AnimatedTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 60%"],
  })

  // Line grows from 0% to 100% as user scrolls
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div ref={containerRef} className="relative">
      {/* Desktop: Center line that draws itself */}
      <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-px">
        {/* Background ghost line */}
        <div className="absolute inset-0 w-px bg-foreground/8" />
        {/* Animated drawing line */}
        <motion.div
          className="absolute top-0 left-0 w-px bg-primary/40"
          style={{ height: lineHeight }}
        />
      </div>

      {/* Mobile: Left line that draws itself */}
      <div className="md:hidden absolute left-[9px] top-0 bottom-0">
        <div className="absolute inset-0 w-px bg-foreground/8" />
        <motion.div
          className="absolute top-0 left-0 w-px bg-primary/40"
          style={{ height: lineHeight }}
        />
      </div>

      {/* Timeline items */}
      <div className="space-y-12 md:space-y-0">
        {items.map((item, index) => (
          <TimelineEntry
            key={item.title}
            item={item}
            index={index}
            bgColor={bgColor}
          />
        ))}
      </div>
    </div>
  )
}

function TimelineEntry({
  item,
  index,
  bgColor,
}: {
  item: TimelineItem
  index: number
  bgColor: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center 60%"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1])
  const y = useTransform(scrollYProgress, [0, 1], [40, 0])
  const dotScale = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.5, 1])
  const dotOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 1])

  // Alternating slide direction for desktop
  const xLeft = useTransform(scrollYProgress, [0, 1], [item.side === "left" ? -30 : 30, 0])

  return (
    <div
      ref={ref}
      className={`relative flex items-start md:items-center md:justify-between gap-6 md:gap-0 ${index > 0 ? "md:mt-16" : ""}`}
    >
      {/* Left content (desktop) */}
      {item.side === "left" ? (
        <motion.div
          className="hidden md:block md:w-[calc(50%-2rem)] text-right pr-8"
          style={{ opacity, y, x: xLeft }}
        >
          <h3 className="text-2xl font-serif text-foreground mb-2">{item.title}</h3>
          <p className="text-lg text-foreground/70 font-light">{item.description}</p>
        </motion.div>
      ) : (
        <div className="hidden md:block md:w-[calc(50%-2rem)] pr-8" />
      )}

      {/* Dot with pulse animation */}
      <motion.div
        className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10"
        style={{ scale: dotScale, opacity: dotOpacity }}
      >
        <div className="relative w-5 h-5">
          <div
            className="absolute inset-0 rounded-full bg-primary"
            style={{ boxShadow: `0 0 0 4px ${bgColor}` }}
          />
          <motion.div
            className="absolute inset-[-4px] rounded-full border-2 border-primary/30"
            initial={{ scale: 1, opacity: 0 }}
            whileInView={{
              scale: [1, 1.8, 1.8],
              opacity: [0, 0.5, 0],
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1.5,
              delay: 0.3,
              ease: "easeOut",
            }}
          />
        </div>
      </motion.div>

      {/* Right content (desktop) */}
      {item.side === "right" ? (
        <motion.div
          className="hidden md:block md:w-[calc(50%-2rem)] md:ml-auto"
          style={{ opacity, y, x: xLeft }}
        >
          <div className="md:pl-8">
            <h3 className="text-2xl font-serif text-foreground mb-2">{item.title}</h3>
            <p className="text-lg text-foreground/70 font-light">{item.description}</p>
          </div>
        </motion.div>
      ) : (
        <div className="hidden md:block md:w-[calc(50%-2rem)] pl-8" />
      )}

      {/* Mobile content */}
      <motion.div
        className="pl-10 md:hidden"
        style={{ opacity, y }}
      >
        <h3 className="text-2xl font-serif text-foreground mb-2">{item.title}</h3>
        <p className="text-lg text-foreground/70 font-light">{item.description}</p>
      </motion.div>
    </div>
  )
}
