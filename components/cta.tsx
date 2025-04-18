"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Check, Loader2, Sparkles } from "lucide-react"

export default function Cta() {
  const [email, setEmail] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setError("Please enter your email")
      return
    }

    setLoading(true)
    setError("")

    try {
      // Use the API route instead of direct Supabase access
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong")
      }

      setSuccess(true)
      setEmail("")
    } catch (err) {
      console.error("Error submitting form:", err)
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="waitlist" className="py-20 relative overflow-hidden">
      {/* Light mode background - softer gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white dark:opacity-0 opacity-100 -z-10 transition-opacity duration-300"></div>

      {/* Dark mode background - keep the existing vibrant gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700 dark:from-blue-800 dark:to-purple-900 opacity-0 dark:opacity-100 -z-10 transition-opacity duration-300"></div>

      {/* Animated background elements - modify for light mode */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10 dark:opacity-20 pointer-events-none"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          duration: 20,
        }}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23667eea' fillOpacity='0.1' fillRule='evenodd'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Floating particles - lighter colors for light mode */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-blue-300 dark:bg-white opacity-20"
        animate={{
          y: [0, -30, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 5,
        }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 rounded-full bg-indigo-300 dark:bg-white opacity-20"
        animate={{
          y: [0, -40, 0],
          opacity: [0.2, 0.5, 0.2],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 7,
          delay: 1,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center mb-6 bg-blue-100 dark:bg-white/10 px-4 py-2 rounded-full"
          >
            <Sparkles className="w-5 h-5 mr-2 text-blue-500 dark:text-yellow-300" />
            <span className="text-blue-700 dark:text-white font-medium">Join the Revolution</span>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-800 dark:text-white font-serif">
            Ready to Transform Dementia Care?
          </h2>

          <p className="text-lg text-blue-700 dark:text-blue-100 mb-8 max-w-2xl mx-auto">
            Join our waitlist to be among the first to experience MemoTag's revolutionary approach to dementia care.
          </p>

          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <motion.div className="relative flex-grow" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/80 dark:bg-white/10 border-blue-200 dark:border-white/20 text-blue-800 dark:text-white placeholder:text-blue-400 dark:placeholder:text-blue-200 pr-10 h-12"
                    disabled={loading || success}
                  />
                  <motion.span
                    className="absolute inset-0 rounded-md opacity-0 pointer-events-none"
                    animate={{
                      boxShadow: [
                        "0 0 0px rgba(255, 255, 255, 0)",
                        "0 0 8px rgba(255, 255, 255, 0.3)",
                        "0 0 0px rgba(255, 255, 255, 0)",
                      ],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 2,
                    }}
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-700 text-white dark:bg-white dark:text-blue-600 dark:hover:bg-blue-50 h-12 px-6"
                    disabled={loading || success}
                  >
                    {loading ? (
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    ) : success ? (
                      <Check className="mr-2 h-4 w-4" />
                    ) : null}
                    {success ? "Joined" : "Join Waitlist"}
                  </Button>
                </motion.div>
              </div>

              {error && (
                <motion.p
                  className="text-red-600 dark:text-red-300 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {error}
                </motion.p>
              )}

              {success && (
                <motion.p
                  className="text-green-600 dark:text-green-300 text-sm"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  Thank you for joining our waitlist!
                </motion.p>
              )}
            </form>

            <p className="mt-4 text-sm text-blue-600 dark:text-blue-200">
              We respect your privacy and will never share your information.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
