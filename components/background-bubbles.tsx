"use client"

import { motion } from "framer-motion"

export default function BackgroundBubbles() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
      {/* Larger blurred gradient bubbles */}
      <motion.div
        className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-blue-200/20 dark:bg-blue-400/10 blur-3xl"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 8,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-72 h-72 rounded-full bg-purple-200/20 dark:bg-purple-400/10 blur-3xl"
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 10,
          ease: "easeInOut",
        }}
      />

      {/* Small floating bubbles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-blue-400 dark:bg-blue-300 opacity-20 dark:opacity-30"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-purple-400 dark:bg-purple-300 opacity-20 dark:opacity-30"
        animate={{
          y: [0, -40, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 7,
          delay: 1,
        }}
      />
      <motion.div
        className="absolute top-2/3 right-1/3 w-5 h-5 rounded-full bg-green-400 dark:bg-green-300 opacity-20 dark:opacity-30"
        animate={{
          y: [0, -25, 0],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 6,
          delay: 2,
        }}
      />
    </div>
  )
}
