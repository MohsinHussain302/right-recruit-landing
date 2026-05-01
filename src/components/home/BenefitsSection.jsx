import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Clock, Target, Banknote, Award, HeartHandshake } from 'lucide-react';
import SectionTexture from '@/components/ui/SectionTexture';

const BENEFITS = [
  {
    icon: Target,
    title: 'Niche Expertise',
    desc: 'We exclusively recruit for the UK property sector — no generalist guesswork.',
  },
  {
    icon: Clock,
    title: 'Speed to Hire',
    desc: 'Average time-to-placement of 14 days, not months. Your desk stays filled.',
  },
  {
    icon: ShieldCheck,
    title: 'Retention Guarantee',
    desc: 'Every placement is backed by our retention promise. If they leave, we replace — free.',
  },
  {
    icon: Banknote,
    title: 'Cost-Efficient Scaling',
    desc: 'Dubai-based and VA options let you scale operations at a fraction of the cost.',
  },
  {
    icon: Award,
    title: 'Pre-Vetted Talent',
    desc: 'Rigorous screening including skills tests, reference checks, and culture fit assessments.',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership Approach',
    desc: 'We act as an extension of your team, not a transactional vendor.',
  },
];

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function BenefitsSection() {
  return (
    <section id="benefits" className="relative py-24 lg:py-40 bg-white overflow-hidden">
      <SectionTexture variant="noise" opacity={0.04} />
      {/* Soft radial green glow top-right */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-mint/5 rounded-full blur-3xl pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 bg-mint" />
            <span className="font-inter text-sm font-medium tracking-widest uppercase text-forest/60">
              Why Right Recruit
            </span>
            <div className="h-px w-12 bg-mint" />
          </div>
          <h2 className="font-montserrat font-bold text-3xl lg:text-5xl text-forest tracking-tight">
            Built for the{' '}
            <span className="text-mint-dark">Property Sector</span>
          </h2>
          <p className="mt-6 font-inter text-lg text-forest/60 leading-relaxed">
            Six reasons agencies across the UK trust us with their most critical hires.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                custom={i}
                variants={cardVariant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-50px' }}
                className="group p-8 rounded-2xl border border-border/50 bg-white hover:bg-surface transition-all duration-300 hover:shadow-lg hover:shadow-forest/5 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl bg-mint/15 flex items-center justify-center mb-6 group-hover:bg-mint/25 transition-colors">
                  <Icon className="w-5 h-5 text-forest" />
                </div>
                <h3 className="font-montserrat font-semibold text-lg text-forest mb-2">
                  {benefit.title}
                </h3>
                <p className="font-inter text-sm text-forest/60 leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
