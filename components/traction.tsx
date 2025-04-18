"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Users, Building, ShoppingBag, Award } from "lucide-react"
import BackgroundBubbles from "./background-bubbles"

export default function Traction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

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
    <section id="traction" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Light mode background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white dark:opacity-0 -z-10 transition-opacity duration-300"></div>

      {/* Dark mode background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-gray-900 opacity-0 dark:opacity-100 -z-10 transition-opacity duration-300"></div>

      {/* Animated background bubbles */}
      <BackgroundBubbles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
            Our Impact
          </motion.span>

          <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-blue-600">Trusted</span> by Leading Eldercare Providers Worldwide
          </motion.h2>

          <motion.p variants={itemVariants} className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            MemoTag partners with top eldercare facilities, hospitals & neurologists to deliver the best care possible.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="text-center bg-white dark:bg-gray-800 p-6 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
          >
            <motion.div
              className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4 relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Users className="w-8 h-8 text-blue-600 dark:text-blue-300" />
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
              className="text-3xl font-bold mb-2 text-gray-900 dark:text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              <motion.span
                animate={{
                  color: ["#3B82F6", "#60A5FA", "#3B82F6"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
                className="text-blue-600 dark:text-blue-400"
              >
                5,000+
              </motion.span>
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300">Patients Monitored</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="text-center bg-white dark:bg-gray-800 p-6 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
          >
            <motion.div
              className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4 relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Building className="w-8 h-8 text-blue-600 dark:text-blue-300" />
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
              className="text-3xl font-bold mb-2 text-gray-900 dark:text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <motion.span
                animate={{
                  color: ["#3B82F6", "#60A5FA", "#3B82F6"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="text-blue-600 dark:text-blue-400"
              >
                25+
              </motion.span>
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300">Partner Facilities</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="text-center bg-white dark:bg-gray-800 p-6 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
          >
            <motion.div
              className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4 relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <ShoppingBag className="w-8 h-8 text-blue-600 dark:text-blue-300" />
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
              className="text-3xl font-bold mb-2 text-gray-900 dark:text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <motion.span
                animate={{
                  color: ["#3B82F6", "#60A5FA", "#3B82F6"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="text-blue-600 dark:text-blue-400"
              >
                2,500+
              </motion.span>
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300">Pre-orders</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-center bg-white dark:bg-gray-800 p-6 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-300"
            whileHover={{
              y: -10,
              scale: 1.05,
            }}
          >
            <motion.div
              className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4 relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Award className="w-8 h-8 text-blue-600 dark:text-blue-300" />
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
                  delay: 1.5,
                }}
              />
            </motion.div>
            <motion.h3
              className="text-3xl font-bold mb-2 text-gray-900 dark:text-white"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <motion.span
                animate={{
                  color: ["#3B82F6", "#60A5FA", "#3B82F6"],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="text-blue-600 dark:text-blue-400"
              >
                3
              </motion.span>
            </motion.h3>
            <p className="text-gray-600 dark:text-gray-300">Innovation Awards</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
