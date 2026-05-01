import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const PROOF_POINTS = [
  '200+ Placements Across the UK',
  'Specialist Property Sector Focus',
  '97% Retention Rate',
];

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-forest">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/69e9f279d5bd86e2aeb71a22/afa24af04_generated_578fd71b.png"
          alt="Modern real estate office"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest via-forest/95 to-forest/70" />
      </div>

      {/* Decorative precision lines */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-mint/10" />
      <div className="absolute top-0 left-2/3 w-px h-full bg-mint/5" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-32 pb-20 lg:pt-40 lg:pb-32 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-8">
                <div className="h-px w-12 bg-mint" />
                <span className="font-inter text-sm font-medium tracking-widest uppercase text-mint">
                  UK Real Estate Recruitment
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-montserrat font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-white leading-tight tracking-tight">
                Architecting the Future of{' '}
                <span className="text-mint">Your Property Team</span>
              </h1>

              {/* Subheadline */}
              <p className="mt-8 font-inter text-lg lg:text-xl text-white/75 leading-relaxed max-w-xl">
                We source, vet, and place exceptional talent for UK estate agencies 
                and property managers — from London offices to global support teams.
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => scrollTo('#contact')}
                  aria-label="Schedule a recruitment strategy session"
                  className="bg-mint text-forest font-inter text-sm font-medium tracking-wider uppercase px-8 py-6 hover:bg-mint-dark transition-all hover:shadow-lg hover:shadow-mint/20 group"
                >
                  Book a Consultation
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  variant="ghost"
                  onClick={() => scrollTo('#contact')}
                  aria-label="Start hiring property talent now"
                  className="border border-white/30 text-white font-inter text-sm font-medium tracking-wider uppercase px-8 py-6 hover:bg-white/10 transition-all"
                >
                  Hire Staff Now
                </Button>
              </div>

              {/* Proof Points */}
              <div className="mt-12 flex flex-wrap gap-6">
                {PROOF_POINTS.map((point) => (
                  <div key={point} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-mint shrink-0" />
                    <span className="font-inter text-sm text-white/70">{point}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="hidden lg:block lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src="https://media.base44.com/images/public/69e9f279d5bd86e2aeb71a22/dfb3204c3_generated_dfeb4af8.png"
                  alt="Property recruitment professional"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating stat card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-xl"
              >
                <p className="font-montserrat font-bold text-3xl text-forest">200+</p>
                <p className="font-inter text-sm text-forest/60 mt-1">Successful Placements</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white via-white/60 to-transparent" />
    </section>
  );
}
