"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { MapPin, Brain, Bell, Activity } from "lucide-react"
import BackgroundBubbles from "./background-bubbles"

export default function Solution() {
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
    <section id="solution" className="py-20 relative overflow-hidden" ref={ref}>
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
            Our Solution
          </motion.span>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6 font-serif">
            How MemoTag Works
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            MemoTag combines wearable technology with AI to provide comprehensive care for dementia patients, giving
            caregivers peace of mind and patients greater independence.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="max-w-3xl mx-auto space-y-8"
        >
          <motion.div
            variants={itemVariants}
            className="flex gap-4 group p-3 rounded-lg hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300 relative"
              whileHover={{ scale: 1.1 }}
            >
              <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 0 8px rgba(59, 130, 246, 0.1)",
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                }}
              />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold mb-2 font-serif text-gray-900 dark:text-white">
                Real-time Location Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                GPS-enabled wearable provides precise location data, safe zones, and wandering alerts to prevent
                dangerous situations.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 group p-3 rounded-lg hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300 relative"
              whileHover={{ scale: 1.1 }}
            >
              <Brain className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 0 8px rgba(59, 130, 246, 0.1)",
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
            <div>
              <h3 className="text-xl font-bold mb-2 font-serif text-gray-900 dark:text-white">
                Cognitive Health Monitoring
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                AI algorithms analyze patterns to detect early signs of cognitive decline, enabling proactive
                intervention.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 group p-3 rounded-lg hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300 relative"
              whileHover={{ scale: 1.1 }}
            >
              <Bell className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 0 8px rgba(59, 130, 246, 0.1)",
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
            <div>
              <h3 className="text-xl font-bold mb-2 font-serif text-gray-900 dark:text-white">
                Smart Alerts & Notifications
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Customizable alerts for medication, appointments, and daily activities to maintain routine and
                independence.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex gap-4 group p-3 rounded-lg hover:bg-white/80 dark:hover:bg-gray-700/80 transition-all duration-300"
            whileHover={{ x: 5 }}
          >
            <motion.div
              className="flex-shrink-0 w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-300 relative"
              whileHover={{ scale: 1.1 }}
            >
              <Activity className="w-6 h-6 text-blue-600 dark:text-blue-300" />
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                    "0 0 0 8px rgba(59, 130, 246, 0.1)",
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 2,
                  delay: 1.5,
                }}
              />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold mb-2 font-serif text-gray-900 dark:text-white">
                Health Vitals Tracking
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Monitors heart rate, sleep patterns, and activity levels to provide a holistic view of physical
                wellbeing.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
