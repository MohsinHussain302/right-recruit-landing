import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import SectionTexture from '@/components/ui/SectionTexture';

const TESTIMONIALS = [
  {
    quote: "Right Recruit transformed our hiring process. Within two weeks, we had a branch manager who has since become one of our top performers. Their understanding of the property market is unmatched.",
    name: 'Sarah Mitchell',
    role: 'Director, London Residential',
    initials: 'SM',
  },
  {
    quote: "The Dubai-based support team they sourced for us handles our admin with incredible efficiency. We've cut overheads by 40% while actually improving our service quality to landlords.",
    name: 'James Thornton',
    role: 'Managing Director, Thornton & Co.',
    initials: 'JT',
  },
  {
    quote: "We were skeptical about virtual assistants for property management, but Right Recruit's VAs are trained specifically for the sector. They hit the ground running from day one.",
    name: 'Rebecca Foster',
    role: 'Operations Manager, CityLet Properties',
    initials: 'RF',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative py-24 lg:py-40 bg-surface overflow-hidden">
      <SectionTexture variant="diagonal" opacity={0.025} />
      {/* Soft glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-mint/6 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-mint" />
            <span className="font-inter text-sm font-medium tracking-widest uppercase text-forest/60">
              Testimonials
            </span>
            <div className="h-px w-12 bg-mint" />
          </div>
          <h2 className="font-montserrat font-bold text-3xl lg:text-5xl text-forest tracking-tight">
            Trusted by Leading{' '}
            <span className="text-mint-dark">UK Agencies</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={cardVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
              className="bg-white rounded-2xl p-8 lg:p-10 border border-border/50 hover:shadow-xl hover:shadow-forest/5 transition-all duration-300"
            >
              <Quote className="w-8 h-8 text-mint/40 mb-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-mint text-mint" />
                ))}
              </div>

              <p className="font-inter text-base text-forest/70 leading-relaxed mb-8">
                "{t.quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-forest flex items-center justify-center shrink-0">
                  <span className="font-montserrat font-semibold text-sm text-white">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="font-montserrat font-semibold text-sm text-forest">
                    {t.name}
                  </p>
                  <p className="font-inter text-xs text-forest/50 mt-0.5">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
