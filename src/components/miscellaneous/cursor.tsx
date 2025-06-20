'use client'

import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import { useEffect, useRef, useState } from 'react'

const SmoothCursor = () => {
  const pointRef = useRef<HTMLDivElement | null>(null)
  const circleRef = useRef<HTMLDivElement | null>(null)
  const [showPointer, setShowPointer] = useState(true)

  const lerp = (start: number, end: number, amount: number) => {
    return (1 - amount) * start + amount * end
  }
  useEffect(() => {
    document.addEventListener('mouseleave', () => {
      setShowPointer(false)
    })
    document.addEventListener('mouseenter', () => {
      setShowPointer(true)
    })
  }, [])
  useGSAP(() => {
    if (!pointRef.current || !circleRef.current) return
    if ('ontouchstart' in window) return
    document.body.style.cursor = 'none'
    const cursorInner = pointRef.current
    const cursorOuter = circleRef.current
    let cursorX = 0
    let cursorY = 0
    let pageX = 0
    let pageY = 0
    const size = 9
    const size2 = 40
    const trailSpeed = 0.16

    cursorInner.style.setProperty('--size', size + 'px')
    cursorOuter.style.setProperty('--size', size2 + 'px')

    const getMousePos = (e: MouseEvent) => {
      pageX = e.clientX
      pageY = e.clientY
      cursorInner.style.left = pageX - size / 2 + 'px'
      cursorInner.style.top = pageY - size / 2 + 'px'
    }
    const mousedown = () => {
      gsap.to(cursorInner, {
        scale: 10,
        duration: 0.2,
        ease: 'power1.inOut',
      })
      gsap.to(cursorOuter, {
        scale: 0.1,
        duration: 0.2,
        ease: 'power1.inOut',
      })
    }
    // Mouse up stuff
    const mouseup = () => {
      gsap.to(cursorInner, {
        scale: 1,
        duration: 0.4,
        ease: 'Elastic.easeOut',
      })
      gsap.to(cursorOuter, {
        scale: 1,
        duration: 0.7,
        ease: 'Elastic.easeOut',
      })
    }
    const loop = () => {
      cursorX = lerp(cursorX, pageX, trailSpeed)
      cursorY = lerp(cursorY, pageY, trailSpeed)
      cursorOuter.style.top = cursorY - size2 / 2 + 'px'
      cursorOuter.style.left = cursorX - size2 / 2 + 'px'
      requestAnimationFrame(loop)
    }
    loop()

    window.addEventListener('mousedown', mousedown)
    window.addEventListener('mouseup', mouseup)
    window.addEventListener('mousemove', getMousePos)
    return () => {
      window.removeEventListener('mousemove', getMousePos)
      window.removeEventListener('mousedown', mousedown)
      window.removeEventListener('mouseup', mouseup)
      document.body.style.cursor = 'auto'
    }
  }, [])
  return (
    <>
      <div
        ref={pointRef}
        style={{
          width: 'var(--size)',
          height: 'var(--size)',
          opacity: showPointer ? 1 : 0,
        }}
        className="pointer-events-none fixed z-[999999] rounded-full bg-white [mix-blend-mode:difference] transition-opacity duration-500 active:scale-150 active:duration-300"
      />
      <div
        ref={circleRef}
        style={{
          opacity: showPointer ? 1 : 0,
          width: 'var(--size)',
          height: 'var(--size)',
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='47' height='47' viewBox='0 0 50 50' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='23.5' cy='23.5' r='22.5' fill='none' stroke='white' strokeWidth='2' /%3E%3C/svg%3E%0A")`,
        }}
        className="pointer-events-none fixed top-0 left-0 z-[999999] bg-cover opacity-50 [mix-blend-mode:difference] transition-opacity duration-500"
      />
    </>
  )
}

export default SmoothCursor
