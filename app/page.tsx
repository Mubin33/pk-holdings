import AboutSections from '@/components/_ui/AboutSections'
import CommunityAndPartners from '@/components/_ui/CommunityAndPartners'
import Contact from '@/components/_ui/Contact'
import CSRSection from '@/components/_ui/Csrsection'
import Footer from '@/components/_ui/Footer'
import HeroSection from '@/components/_ui/Hero'
import PKHoldingsAbout from '@/components/_ui/Pkholdingsabout'
import PKHoldingsVoiceAssistant from '@/components/_ui/Pkholdingsvoiceassistant'
import React from 'react'

export default function page() {
  return (
    <div>
      <HeroSection/>
      <PKHoldingsVoiceAssistant />
      <CSRSection />
      <PKHoldingsAbout />
      <AboutSections />
      <CommunityAndPartners />
      <Contact />
      <Footer />
    </div>
  )
}
