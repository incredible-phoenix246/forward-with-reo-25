'use client'

import Link from 'next/link'
import type React from 'react'
import { cn } from '~/lib/utils'
import { Button } from 'ui/button'
import { X, Menu } from 'lucide-react'
import { useState, useEffect } from 'react'
import BlurImage from '../miscellaneous/blur-image'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isPastHero, setIsPastHero] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isInWhyAttendSection, setIsInWhyAttendSection] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      setIsScrolled(scrollY > 50)

      const elementsToCheck = ['hero']

      let isAnyElementVisible = false

      for (const elementId of elementsToCheck) {
        const element = document.getElementById(elementId)
        if (element) {
          const rect = element.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height
          if (scrollY < elementBottom - 100) {
            isAnyElementVisible = true
            break
          }
        }
      }

      setIsPastHero(!isAnyElementVisible)

      const whyAttendSection = document.getElementById(
        'why-attend-section-card'
      )
      if (whyAttendSection) {
        const rect = whyAttendSection.getBoundingClientRect()
        const sectionTop = rect.top + window.scrollY
        const sectionBottom = sectionTop + rect.height

        const isInView =
          scrollY >= sectionTop - 200 && scrollY <= sectionBottom + 200
        setIsInWhyAttendSection(isInView)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault()

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      const headerOffset = 100
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      })
    }

    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#speakers', label: 'Speakers' },
    { href: '#tickets', label: 'Tickets' },
    { href: '#venue', label: 'Venue' },
    { href: '#sponsors', label: 'Sponsors' },
  ]

  return (
    <>
      <div className="fixed top-0 right-0 left-0 z-50 flex justify-center px-4">
        <motion.header
          className={cn(
            'flex w-full max-w-[1500px] items-center justify-between py-2 transition-all duration-1000 sm:px-[80px]',
            isScrolled &&
              isPastHero &&
              !isInWhyAttendSection &&
              'mx-auto mt-6 max-w-3xl rounded-full bg-transparent px-8 py-6 shadow-2xl backdrop-blur-sm max-md:mt-4 sm:px-8',
            isScrolled &&
              !isPastHero &&
              'mx-auto mt-6 max-w-3xl rounded-full bg-white/10 px-8 py-6 backdrop-blur-md max-md:mt-4 sm:px-8',
            isScrolled &&
              isInWhyAttendSection &&
              'mx-auto mt-6 max-w-3xl rounded-full bg-blue-900/20 px-8 py-6 shadow-2xl backdrop-blur-md max-md:mt-4 sm:px-8'
          )}
          initial={{ opacity: 1 }}
          animate={{
            opacity: 1,
            height: isScrolled ? '60px' : '80px',
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="flex items-center space-x-2">
            <BlurImage
              src={
                isPastHero && !isInWhyAttendSection
                  ? '/logo.png'
                  : '/logo-white.png'
              }
              alt="NeuroCX"
              width={120}
              height={40}
              className="rounded-lg"
            />
          </div>

          <nav className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className={cn(
                  'cursor-pointer text-lg font-medium transition-colors duration-500',
                  isScrolled && isPastHero && !isInWhyAttendSection
                    ? 'text-gray-900'
                    : 'text-white'
                )}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            <motion.button
              className={cn(
                'flex items-center justify-center transition-colors duration-500',
                isScrolled && isPastHero && !isInWhyAttendSection
                  ? 'text-gray-900 hover:text-blue-600'
                  : 'text-white hover:text-blue-400'
              )}
              onClick={() => setIsMobileMenuOpen(true)}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Menu className="h-6 w-6" />
            </motion.button>
          </div>
        </motion.header>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-50 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            <motion.div
              className="fixed top-0 right-0 bottom-0 z-50 flex w-[80%] max-w-sm flex-col bg-white text-gray-900 shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{
                type: 'spring',
                damping: 25,
                stiffness: 200,
                duration: 0.5,
              }}
            >
              <div className="flex items-center justify-between border-b border-gray-100 p-4">
                <div className="flex items-center space-x-2">
                  <BlurImage
                    src="/logo.png"
                    alt="NeuroCX"
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                </div>
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ rotate: 90 }}
                  transition={{ duration: 0.2 }}
                  className="rounded-full p-2 hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </motion.button>
              </div>

              <nav className="flex flex-1 flex-col space-y-2 overflow-y-auto p-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleSmoothScroll(e, item.href)}
                    className="flex cursor-pointer items-center justify-between border-b border-gray-200 py-4 transition-colors hover:text-blue-600"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </nav>

              <motion.div
                className="border-t border-gray-100 p-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <Button
                  asChild
                  className="w-full rounded-full bg-black text-white hover:bg-gray-800"
                >
                  <Link href="#">Get Tickets</Link>
                </Button>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
