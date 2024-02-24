import Beginner from '@/sections/Beginner'
import Expert from '@/sections/Expert'
import FAQ from '@/sections/FAQ'
import Feature from '@/sections/Feature'
import Footer from '@/sections/Footer'
import Hero from '@/sections/Hero'
import How from '@/sections/How'
import Intermediate from '@/sections/Intermediate'
import Testimonials from '@/sections/Testimonials'
import Navbar from '@/sections/component/Navbar'
import React from 'react'


function index() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Beginner />
      <Intermediate />
      <Expert />
      <How />
      <Feature />
      <Testimonials />
      <FAQ />
      <Footer />

    </div>
  )
}

export default index