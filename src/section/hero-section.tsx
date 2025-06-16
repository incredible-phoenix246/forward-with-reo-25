'use client'

import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { Button } from 'ui/button'

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  }

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
    tap: {
      scale: 0.95,
    },
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-black" id="hero">
      {/* Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-[1500px] px-6 py-12 sm:px-8 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 xl:px-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* @ts-expect-error next-line */}
        <motion.div className="mb-12 sm:mb-16 md:mb-20" variants={itemVariants}>
          <p className="text-sm font-light tracking-wider text-white/80 sm:text-base md:text-lg">
            TO BE DECIDED
          </p>
        </motion.div>

        {/* Main Title */}
        <motion.div
          className="font-plus_jaka mb-8 sm:mb-12 md:mb-16"
          // @ts-expect-error next-line
          variants={titleVariants}
        >
          <div className="mb-4 flex flex-col sm:mb-6 sm:flex-row sm:items-end sm:gap-4">
            <motion.h1
              className="text-4xl leading-none font-black tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              FORWARD
            </motion.h1>
            <motion.div
              className="mb-2 self-start bg-gray-600 px-3 py-2 text-xl font-bold text-white sm:mb-4 sm:self-end sm:px-4 sm:py-3 sm:text-2xl md:text-3xl lg:text-4xl"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              20
              <br />
              25
            </motion.div>
          </div>
          <motion.h2
            className="text-6xl leading-none font-black tracking-tight text-white sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            CONFERENCE
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.div
          className="mb-12 max-w-2xl sm:mb-16 md:mb-20"
          // @ts-expect-error next-line
          variants={itemVariants}
        >
          <p className="text-base leading-relaxed font-light text-gray-400 sm:text-lg md:text-xl lg:text-2xl">
            We bring together exceptional leaders and visionaries to share their
            most powerful lessons and breakthroughs.
          </p>
          <p className="mt-2 text-base leading-relaxed font-light text-gray-400 sm:text-lg md:text-xl lg:text-2xl">
            Join us at FORWARD 2025 and take bold steps toward your leadership
            transformation.
          </p>
        </motion.div>

        {/* Call to Action Buttons */}
        <motion.div
          className="flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:gap-8 md:gap-12"
          variants={containerVariants}
        >
          <motion.div
            // @ts-expect-error next-line
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <Button
              className="rounded-none bg-cyan-400 px-8 py-4 text-sm font-bold text-black transition-colors duration-300 hover:bg-cyan-300 sm:px-10 sm:py-5 sm:text-base md:px-12 md:py-6 md:text-lg"
              size="lg"
            >
              PARTICIPATE
            </Button>
          </motion.div>

          <motion.button
            className="group flex items-center gap-3 text-white transition-colors duration-300 hover:text-cyan-400 sm:gap-4"
            // @ts-expect-error next-line
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <motion.div
              className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white transition-colors duration-300 group-hover:border-cyan-400 sm:h-10 sm:w-10 md:h-12 md:w-12"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <Play className="ml-0.5 h-3 w-3 fill-current sm:h-4 sm:w-4 md:h-5 md:w-5" />
            </motion.div>
            <span className="text-sm font-medium sm:text-base md:text-lg lg:text-xl">
              Watch The Teaser
            </span>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  )
}
