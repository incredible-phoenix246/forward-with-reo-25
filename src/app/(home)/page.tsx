import React from 'react'
import GallerySection from '~/section/gallery'
import HeroSection from '~/section/hero-section'
import WhyAttendSection from '~/section/why-attend-section'

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhyAttendSection />
      <GallerySection />
    </>
  )
}

export default HomePage
