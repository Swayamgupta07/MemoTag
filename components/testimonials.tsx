"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import BackgroundBubbles from "./background-bubbles";

const testimonials = [
  {
    id: 1,
    content:
      "MemoTag has completely transformed how I care for my mother. The peace of mind knowing I'll be alerted if she wanders is invaluable.",
    author: "Sarah Johnson",
    role: "Family Caregiver",
    avatar: "/placeholder.svg?height=64&width=64",
    rating: 4,
  },
  {
    id: 2,
    content:
      "As a neurologist, I recommend MemoTag to my patients' families. The cognitive tracking provides insights we couldn't get before.",
    author: "Dr. Michael Chen",
    role: "Neurologist",
    avatar: "/placeholder.svg?height=64&width=64",
    rating: 5,
  },
  {
    id: 3,
    content:
      "Our care facility has seen a 40% reduction in wandering incidents since implementing MemoTag across our dementia unit.",
    author: "Rebecca Torres",
    role: "Care Facility Director",
    avatar: "/placeholder.svg?height=64&width=64",
    rating: 4,
  },
];

// Logos for the badge section
const partnerLogos = [
  { name: "Prochat", logo: "/prochat.svg?height=40&width=120" },
  { name: "Emoha", logo: "/emoha.svg?height=40&width=120" },
  { name: "Infivent", logo: "/infivent.svg?height=40&width=120" },
  { name: "Master's Union", logo: "/masters-union.svg?height=40&width=120" },
  { name: "Ensocure", logo: "/ensocure.svg?height=40&width=120" },
];

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate testimonials
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prevCurrent) => (prevCurrent + 1) % testimonials.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-20 relative overflow-hidden"
      ref={ref}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Light mode background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-white dark:opacity-0 -z-10 transition-opacity duration-300"></div>

      {/* Dark mode background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-indigo-950 to-gray-900 opacity-0 dark:opacity-100 -z-10 transition-opacity duration-300"></div>

      {/* Animated background bubbles */}
      <BackgroundBubbles />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-12"
        >
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 dark:bg-blue-900/30 dark:text-blue-300 rounded-full mb-4">
            Testimonials
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-serif text-gray-900 dark:text-white">
            What Our Users Say
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hear from caregivers, healthcare professionals, and care facilities
            about how MemoTag is transforming dementia care.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center relative overflow-hidden group">
                    <Quote className="w-8 h-8 text-blue-600 dark:text-blue-300 relative z-10" />
                    <motion.div
                      className="absolute inset-0 bg-blue-400/20 dark:bg-blue-500/30 rounded-full blur-xl"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 0.8, 0.5],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 3,
                      }}
                    />
                  </div>
                </div>

                <blockquote className="text-xl md:text-2xl text-center mb-8 italic font-serif text-gray-800 dark:text-gray-200">
                  "{testimonials[current].content}"
                </blockquote>

                <div className="flex flex-col items-center justify-center">
                  <motion.div
                    className="flex mb-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                  >
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: 0.1 * i }}
                      >
                        <Star
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-yellow-400"
                        />
                      </motion.div>
                    ))}
                  </motion.div>

                  <div className="flex items-center">
                    <div className="text-left">
                      <p className="font-bold text-gray-900 dark:text-white">
                        {testimonials[current].author}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {testimonials[current].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center focus:outline-none hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300 group"
            aria-label="Previous testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 text-blue-600 dark:text-blue-300 group-hover:scale-110 transition-transform duration-300" />
          </motion.button>

          <motion.button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 md:translate-x-6 w-12 h-12 bg-white dark:bg-gray-700 rounded-full shadow-lg flex items-center justify-center focus:outline-none hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300 group"
            aria-label="Next testimonial"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 text-blue-600 dark:text-blue-300 group-hover:scale-110 transition-transform duration-300" />
          </motion.button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
                current === index
                  ? "bg-blue-600 dark:bg-blue-400 w-6"
                  : "bg-gray-300 dark:bg-gray-600 hover:bg-blue-400 dark:hover:bg-blue-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Partner Logos Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-center text-lg font-medium mb-8 text-gray-600 dark:text-gray-300">
            Trusted by leading healthcare institutions
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partnerLogos.map((partner, index) => (
              <motion.div
                key={index}
                className="grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                whileHover={{
                  scale: 1.05,
                  filter: "drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <img
                  src={partner.logo || "/placeholder.svg"}
                  alt={partner.name}
                  className="h-8 md:h-10 w-auto object-contain grayscale hover:grayscale-0 dark:invert transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
