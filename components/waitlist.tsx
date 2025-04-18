"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"
import { Send, CheckCircle, AlertCircle } from "lucide-react"

export default function Waitlist() {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null)
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

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

      setSubmitStatus("success")
      setEmail("")
    } catch (error) {
      console.error("Error submitting form:", error)
      setSubmitStatus("error")
      setErrorMessage("There was an error joining the waitlist. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="w-full">
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-100 rounded-md text-sm flex items-center"
        >
          <CheckCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          <span>Thank you for joining our waitlist! We'll keep you updated.</span>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-100 rounded-md text-sm flex items-center"
        >
          <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
          <span>{errorMessage}</span>
        </motion.div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <div className="relative flex-grow group">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-700 pr-10 transition-all duration-300 focus:border-blue-400 dark:focus:border-blue-500 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-800"
          />
          <motion.span
            className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none"
            animate={{
              boxShadow: [
                "0 0 0px rgba(59, 130, 246, 0)",
                "0 0 8px rgba(59, 130, 246, 0.3)",
                "0 0 0px rgba(59, 130, 246, 0)",
              ],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
            }}
          />
        </div>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-blue-600 hover:bg-blue-700 text-white sm:flex-shrink-0 group relative overflow-hidden"
        >
          <span className="relative z-10 flex items-center">
            {isSubmitting ? "Joining..." : "Join Waitlist"}
            {!isSubmitting && <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          </span>
          <motion.span
            className="absolute inset-0 bg-blue-500"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
        </Button>
      </form>
    </div>
  )
}
