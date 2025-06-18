import React from 'react'
import { Testimonial4 } from '~/components/testimonial4'
import GallerySection from '~/section/gallery'
import HeroSection from '~/section/hero-section'
import WhyAttendSection from '~/section/why-attend-section'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyAttendSection />
      <GallerySection />
      <Testimonial4 />
    </>
  )
}

export default HomePage
