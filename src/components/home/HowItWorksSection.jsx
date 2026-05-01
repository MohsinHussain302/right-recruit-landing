import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare, Search, UserCheck, Handshake,
  TrendingUp, Sliders, Globe, CheckCircle, ArrowRight
} from 'lucide-react';
import SectionTexture from '@/components/ui/SectionTexture';

const STEPS = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Discovery Call',
    headline: 'We Start by Listening',
    desc: 'No questionnaires, no forms. We begin with a focused strategy call to understand your agency, your culture, your growth plans, and the exact type of person who thrives in your environment. Whether you need a UK in-office hire, a Dubai-based team member, or a VA to free up your staff — we tailor everything from this conversation.',
    detail: 'This call shapes our entire search. We document your agency\'s values, leadership style, deal flow, and the specific challenges you\'re trying to solve. Every placement starts here.',
  },
  {
    num: '02',
    icon: Search,
    title: 'Targeted Search',
    headline: 'Precision Over Volume',
    desc: 'We don\'t post your job on job boards and wait. Our team uses proprietary networks, direct headhunting, and sector-specific channels to find passive candidates — the ones who aren\'t actively looking but are exactly what you need.',
    detail: 'Depending on your service type (UK, Dubai, or VA), we tap different talent pools — from London negotiators with 5+ years experience to Dubai-based bilingual property consultants and trained remote VAs.',
  },
  {
    num: '03',
    icon: UserCheck,
    title: 'Rigorous Vetting',
    headline: 'Only the Best Reach You',
    desc: 'Every candidate goes through a multi-stage vetting process: competency interviews, sector knowledge tests, reference checks, and cultural fit assessments. You only see shortlists we\'d hire ourselves.',
    detail: 'For UK hires, this includes in-depth sales and lettings competency reviews. For Dubai roles, we assess multi-market experience and communication styles. For VAs, we test property-specific admin skills and technical proficiency.',
  },
  {
    num: '04',
    icon: Handshake,
    title: 'Seamless Placement',
    headline: 'We Handle the Complexity',
    desc: 'From offer management to contract negotiation, we smooth every step of the process. We bridge communication between you and the candidate, manage expectations on both sides, and ensure a clean, professional close.',
    detail: 'Our team stays involved through the notice period and onboarding phase — so there are no last-minute surprises and your new hire arrives ready to perform from day one.',
  },
  {
    num: '05',
    icon: TrendingUp,
    title: 'Ongoing Partnership',
    headline: 'We Stay With You',
    desc: 'The placement isn\'t the end — it\'s the beginning. We conduct structured check-ins at 30, 60, and 90 days. Our retention guarantee means that if anything doesn\'t work out, we replace at no additional cost.',
    detail: 'Long-term clients benefit from priority access to our talent pipeline, dedicated account management, and proactive staffing reviews as their agency evolves.',
  },
];

const PILLARS = [
  { icon: Sliders, title: 'Fully Personalised', desc: 'Every search brief is bespoke — built around your specific agency, not a template.' },
  { icon: Globe, title: 'Multi-Market Reach', desc: 'UK, Dubai, and remote VA talent all through a single, trusted recruitment partner.' },
  { icon: CheckCircle, title: 'Retention Guaranteed', desc: 'We stand behind every placement with our structured aftercare and replacement promise.' },
];

export default function HowItWorksSection() {
  const [active, setActive] = useState(0);

  const activeStep = STEPS[active];
  const ActiveIcon = activeStep.icon;

  return (
    <section id="process" className="relative py-24 lg:py-40 bg-white overflow-hidden">
      <SectionTexture variant="grid" opacity={0.03} />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-64 bg-mint/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-mint" />
              <span className="font-inter text-sm font-medium tracking-widest uppercase text-forest/60">
                How It Works
              </span>
            </div>
            <h2 className="font-montserrat font-bold text-3xl lg:text-5xl text-forest tracking-tight leading-tight">
              Personalised Recruitment,{' '}
              <span className="text-mint-dark">Built Around You</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <p className="font-inter text-lg text-forest/60 leading-relaxed">
              We don't believe in one-size-fits-all. Every client gets a customised 
              recruitment strategy — whether you're hiring a UK estate agent, 
              a Dubai in-office consultant, or a property VA.
            </p>
          </motion.div>
        </div>

        {/* Interactive step selector */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Step tabs */}
          <div className="lg:col-span-4 space-y-2">
            {STEPS.map((step, i) => {
              const StepIcon = step.icon;
              const isActive = i === active;
              return (
                <motion.button
                  key={step.num}
                  onClick={() => setActive(i)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className={`w-full flex items-center gap-4 px-5 py-4 rounded-xl text-left transition-all duration-300 border ${
                    isActive
                      ? 'bg-forest text-white border-forest shadow-lg shadow-forest/15'
                      : 'bg-surface border-border/50 text-forest hover:bg-surface hover:border-border hover:shadow-sm'
                  }`}
                >
                  <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                    isActive ? 'bg-white/15' : 'bg-mint/15'
                  }`}>
                    <StepIcon className={`w-4 h-4 ${isActive ? 'text-mint' : 'text-forest'}`} />
                  </div>
                  <div>
                    <span className={`block font-inter text-xs tracking-wider uppercase ${isActive ? 'text-white/50' : 'text-forest/40'}`}>
                      Step {step.num}
                    </span>
                    <span className={`block font-montserrat font-semibold text-sm mt-0.5 ${isActive ? 'text-white' : 'text-forest'}`}>
                      {step.title}
                    </span>
                  </div>
                  {isActive && (
                    <ArrowRight className="w-4 h-4 text-mint ml-auto shrink-0" />
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Step detail panel */}
          <div className="lg:col-span-8">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="bg-forest rounded-2xl p-8 lg:p-12 h-full relative overflow-hidden"
            >
              {/* BG texture */}
              <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                  backgroundImage: `radial-gradient(circle, #8EE8B2 1px, transparent 1px)`,
                  backgroundSize: '28px 28px',
                }}
              />
              <div className="absolute top-0 right-0 w-72 h-72 bg-mint/5 rounded-full blur-3xl pointer-events-none" />

              <div className="relative">
                {/* Step tag */}
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-mint/20 flex items-center justify-center">
                    <ActiveIcon className="w-5 h-5 text-mint" />
                  </div>
                  <div>
                    <span className="font-inter text-xs text-white/40 uppercase tracking-wider block">
                      Step {activeStep.num}
                    </span>
                    <span className="font-montserrat font-semibold text-white text-sm">
                      {activeStep.title}
                    </span>
                  </div>
                </div>

                <h3 className="font-montserrat font-bold text-2xl lg:text-3xl text-white leading-tight mb-5">
                  {activeStep.headline}
                </h3>

                <p className="font-inter text-base text-white/70 leading-relaxed mb-6">
                  {activeStep.desc}
                </p>

                <div className="h-px bg-white/10 mb-6" />

                <p className="font-inter text-sm text-white/50 leading-relaxed">
                  {activeStep.detail}
                </p>

                {/* Step counter dots */}
                <div className="flex gap-2 mt-10">
                  {STEPS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActive(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === active ? 'bg-mint w-8' : 'bg-white/20 w-4 hover:bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom pillars */}
        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {PILLARS.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4 p-6 rounded-xl bg-surface border border-border/50 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-mint/15 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-forest" />
                </div>
                <div>
                  <p className="font-montserrat font-semibold text-sm text-forest mb-1">{pillar.title}</p>
                  <p className="font-inter text-sm text-forest/55 leading-relaxed">{pillar.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
