"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Shield, Brain } from "lucide-react"
import BackgroundBubbles from "./background-bubbles"

export default function Hero() {
  // Function to scroll to waitlist section
  const scrollToWaitlist = () => {
    const element = document.getElementById("waitlist")
    if (element) {
      const navbarHeight = 80
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - navbarHeight
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="hero" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-white dark:from-blue-950 dark:via-purple-950 dark:to-gray-900 -z-10" />

      {/* Animated bubbles */}
      <BackgroundBubbles />

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-block px-4 py-1 mb-4 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 15px rgba(59, 130, 246, 0.5)",
              backgroundColor: "rgba(219, 234, 254, 1)",
            }}
          >
            <motion.span
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 2,
              }}
              className="inline-flex items-center"
            >
              <Sparkles className="w-4 h-4 mr-2 text-yellow-500" />
              The Future of Dementia Care
            </motion.span>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600 dark:text-blue-400">AI Driven</span>
              <motion.span
                className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30 -z-10 rounded-lg"
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    "0 0 0px rgba(59, 130, 246, 0)",
                    "0 0 15px rgba(59, 130, 246, 0.3)",
                    "0 0 0px rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{
                  repeat: Number.POSITIVE_INFINITY,
                  duration: 3,
                  ease: "easeInOut",
                }}
              />
            </span>{" "}
            Wearables for Proactive Caregiving
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Empowering caregivers with real-time insights, safety alerts, and cognitive health tracking for loved ones.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white group relative overflow-hidden"
                onClick={scrollToWaitlist}
              >
                <span className="relative z-10 flex items-center">
                  Pre-Order Now
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <motion.span
                  className="absolute inset-0 bg-blue-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 group relative overflow-hidden"
              >
                <span className="relative z-10">Learn More</span>
                <motion.span
                  className="absolute inset-0 bg-blue-100 dark:bg-blue-900/30"
                  initial={{ y: "-100%" }}
                  whileHover={{ y: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>
            </motion.div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Fixed feature cards for both light and dark mode */}
            <motion.div
              className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl p-6 shadow-sm transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(59, 130, 246, 0.1), 0 10px 10px -5px rgba(59, 130, 246, 0.04)",
              }}
            >
              <motion.div
                className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4 relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Shield className="w-6 h-6 text-blue-600 dark:text-blue-300" />
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
              <h3 className="text-lg font-semibold mb-2 text-center text-gray-900 dark:text-white">
                Safety Monitoring
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                Real-time location tracking and wandering alerts for peace of mind.
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl p-6 shadow-sm transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.1), 0 10px 10px -5px rgba(139, 92, 246, 0.04)",
              }}
            >
              <motion.div
                className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4 relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Brain className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(139, 92, 246, 0)",
                      "0 0 0 10px rgba(139, 92, 246, 0.1)",
                      "0 0 0 0 rgba(139, 92, 246, 0)",
                    ],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    delay: 0.5,
                  }}
                />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-center text-gray-900 dark:text-white">
                Cognitive Insights
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                AI-powered analysis of cognitive patterns for early intervention.
              </p>
            </motion.div>

            <motion.div
              className="bg-white dark:bg-gray-800 backdrop-blur-sm rounded-xl p-6 shadow-sm transition-all duration-300 group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              whileHover={{
                y: -10,
                boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.1), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
              }}
            >
              <motion.div
                className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mx-auto mb-4 relative"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-300" />
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 0 0 rgba(16, 185, 129, 0)",
                      "0 0 0 10px rgba(16, 185, 129, 0.1)",
                      "0 0 0 0 rgba(16, 185, 129, 0)",
                    ],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 2,
                    delay: 1,
                  }}
                />
              </motion.div>
              <h3 className="text-lg font-semibold mb-2 text-center text-gray-900 dark:text-white">
                Caregiver Support
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 text-center">
                Comprehensive tools and insights to reduce caregiver burden.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
