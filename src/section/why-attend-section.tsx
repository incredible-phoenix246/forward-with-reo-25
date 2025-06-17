'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function WhyAttentSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

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
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  }

  const headerVariants = {
    hidden: {
      opacity: 0,
      x: -100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        duration: 0.8,
      },
    },
  }

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      x: 100,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        duration: 0.8,
        delay: 0.2,
      },
    },
  }

  const features = [
    {
      number: '01',
      title: 'TRANSFORMATIONAL INSIGHTS',
      description:
        'Hear real-world stories and proven leadership frameworks from global voices shaping the future of influence.',
    },
    {
      number: '02',
      title: 'HANDS-ON LEARNING',
      description:
        'Participate in interactive workshops, live demos, and deep-dive sessions to sharpen your skills.',
    },
    {
      number: '03',
      title: 'MEANINGFUL CONNECTIONS',
      description:
        'Build authentic relationships with trailblazers, mentors, and fellow visionaries walking similar paths.',
    },
    {
      number: '04',
      title: 'PURPOSE-DRIVEN MOMENTS',
      description:
        'Immerse yourself in an atmosphere charged with clarity, courage, and the audacity to lead forward.',
    },
  ]

  return (
    <div className="min-h-screen bg-white py-12 md:py-20 lg:py-24">
      <div className="font-plus_jaka container mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-12 md:space-y-16 lg:space-y-20"
        >
          {/* Header Section */}
          <div className="font-syne grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
            {/* @ts-expect-error next line */}
            <motion.div variants={headerVariants}>
              <h1 className="text-4xl leading-none font-bold tracking-tight text-black sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                WHY ATTEND?
              </h1>
            </motion.div>

            <motion.div
              // @ts-expect-error next line
              variants={descriptionVariants}
              className="flex items-center lg:items-start lg:pt-4"
            >
              <motion.p className="max-w-lg text-lg leading-relaxed text-gray-600 sm:text-xl md:text-2xl">
                Discover why FORWARD 2025 is the ultimate experience for
                emerging leaders, creatives, and visionaries ready to shift into
                purpose and impact.
              </motion.p>
            </motion.div>
          </div>

          {/* Features Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:gap-10"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.number}
                // @ts-expect-error next line
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  transition: { type: 'spring', stiffness: 300, damping: 20 },
                }}
                className="group relative flex h-[289px] cursor-pointer items-center justify-between overflow-hidden rounded-lg bg-[#1C1A1A] p-8 md:rounded-[50px] md:p-10 lg:p-12"
                // style={{
                //   width: '610px',
                //   height: '289px',
                //   borderRadius: '',
                //   flexShrink: 0,
                // }}
                id="why-attend-section-card"
              >
                {/* Large number */}
                <motion.div className="relative flex-shrink-0">
                  <span
                    className="absolute -bottom-[150px] block leading-none font-normal"
                    style={{
                      background:
                        'linear-gradient(185deg, #0147FF 35.34%, rgba(1, 71, 255, 0.00) 79.91%)',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      fontFamily: 'Syne, sans-serif',
                      fontSize: '300px',
                      fontStyle: 'normal',
                      fontWeight: 400,
                      lineHeight: 'normal',
                    }}
                  >
                    {feature.number}
                  </span>
                </motion.div>

                <div className="relative ml-8 flex-1 space-y-4 md:space-y-6">
                  <motion.h3
                    className="text-lg leading-tight font-bold tracking-wide text-white sm:text-xl md:text-2xl"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {feature.title}
                  </motion.h3>

                  <motion.p
                    className="text-base leading-relaxed text-gray-300 md:text-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Decorative elements */}
                <motion.div
                  className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-blue-500/10 blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.5,
                  }}
                />

                <motion.div
                  className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-purple-500/10 blur-xl"
                  animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: index * 0.3,
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
