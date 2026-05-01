import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/home/HeroSection';
import UKRecruitmentSection from '@/components/home/UKRecruitmentSection';
import DubaiRecruitmentSection from '@/components/home/DubaiRecruitmentSection';
import VirtualAssistantsSection from '@/components/home/VirtualAssistantsSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import BenefitsSection from '@/components/home/BenefitsSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import ClosingCTA from '@/components/home/ClosingCTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <UKRecruitmentSection />
        <DubaiRecruitmentSection />
        <VirtualAssistantsSection />
        <HowItWorksSection />
        <BenefitsSection />
        <TestimonialsSection />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
