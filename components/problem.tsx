"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Brain, AlertTriangle, Heart } from "lucide-react"
import BackgroundBubbles from "./background-bubbles"

export default function Problem() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="problem" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Light mode background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white dark:opacity-0 -z-10 transition-opacity duration-300"></div>

      {/* Dark mode background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-gray-900 opacity-0 dark:opacity-100 -z-10 transition-opacity duration-300"></div>

      {/* Animated background bubbles */}
      <BackgroundBubbles />

      <motion.div className="container mx-auto px-4 sm:px-6 lg:px-8" style={{ opacity, y }}>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 rounded-full mb-4"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
            }}
          >
            The Challenge
          </motion.span>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            Dementia Care Needs a Revolution
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Dementia affects millions worldwide, creating immense challenges for both patients and caregivers. Current
            solutions are reactive, not proactive, leading to preventable incidents and caregiver burnout.
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
            }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/40"
          >
            <motion.div
              className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group relative"
              whileHover={{ scale: 1.1 }}
            >
              <Brain className="w-8 h-8 text-blue-600 dark:text-blue-300 group-hover:scale-110 transition-transform duration-300" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 0 10px rgba(59, 130, 246, 0.1)",
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                }}
              />
            </motion.div>
            <motion.h3
              className="text-xl font-bold mb-4 font-serif text-gray-900 dark:text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              55 Million
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300">
              People worldwide living with dementia, with numbers doubling every 20 years
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
            }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/40"
          >
            <motion.div
              className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group relative"
              whileHover={{ scale: 1.1 }}
            >
              <AlertTriangle className="w-8 h-8 text-blue-600 dark:text-blue-300 group-hover:scale-110 transition-transform duration-300" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 0 10px rgba(59, 130, 246, 0.1)",
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  delay: 0.5,
                }}
              />
            </motion.div>
            <motion.h3
              className="text-xl font-bold mb-4 font-serif text-gray-900 dark:text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              60%
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300">
              Of dementia patients wander at least once, with many doing so repeatedly
            </p>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{
              y: -10,
              boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.1)",
            }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 text-center transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/40"
          >
            <motion.div
              className="w-16 h-16 bg-blue-100 dark:bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-6 group relative"
              whileHover={{ scale: 1.1 }}
            >
              <Heart className="w-8 h-8 text-blue-600 dark:text-blue-300 group-hover:scale-110 transition-transform duration-300" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 0 10px rgba(59, 130, 246, 0.1)",
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  delay: 1,
                }}
              />
            </motion.div>
            <motion.h3
              className="text-xl font-bold mb-4 font-serif text-gray-900 dark:text-white"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              11+ Hours
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300">
              Average daily care time provided by family caregivers, leading to burnout
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
