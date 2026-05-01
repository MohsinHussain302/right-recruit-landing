import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MapPin, Clock, Globe, DollarSign } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTexture from '@/components/ui/SectionTexture';

const ROLES = [
  'Sales Consultants',
  'Property Advisors',
  'Listings Coordinators',
  'CRM Administrators',
  'Transaction Managers',
  'Marketing Executives',
  'Client Relations',
  'Compliance Officers',
];

const BENEFITS = [
  {
    icon: Clock,
    title: 'UK Business Hours',
    desc: 'Dubai-based staff fully aligned to GMT/BST schedules — no time-zone disruption.',
  },
  {
    icon: DollarSign,
    title: 'Up to 60% Cost Reduction',
    desc: 'Premium talent at a fraction of the UK market rate, without sacrificing quality.',
  },
  {
    icon: Globe,
    title: 'International Expertise',
    desc: 'Dubai professionals with deep international property market knowledge.',
  },
];

export default function DubaiRecruitmentSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="dubai-recruitment" className="relative py-24 lg:py-40 bg-forest overflow-hidden">
      {/* Texture on dark bg */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, #8EE8B2 1px, transparent 1px)`,
          backgroundSize: '32px 32px',
        }}
      />
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-mint/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-mint/4 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-mint/50" />
          <span className="font-inter text-sm font-medium tracking-widest uppercase text-mint/70">
            Service 02
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT — Image stack */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <img
                  src="https://media.base44.com/images/public/69e9f279d5bd86e2aeb71a22/1f013825e_generated_image.png"
                  alt="Dubai estate agency office"
                  className="w-full h-80 lg:h-[440px] object-cover"
                />
              </div>

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute -bottom-8 -right-4 lg:-right-8 bg-mint rounded-2xl p-5 shadow-xl max-w-[180px]"
              >
                <p className="font-montserrat font-bold text-3xl text-forest">60%</p>
                <p className="font-inter text-xs text-forest/70 mt-1 leading-snug">Average Cost Reduction vs UK Hire</p>
              </motion.div>
            </motion.div>

            {/* Roles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mt-14"
            >
              <p className="font-inter text-xs font-medium tracking-widest uppercase text-white/40 mb-3">
                Dubai Roles We Source
              </p>
              <div className="flex flex-wrap gap-2">
                {ROLES.map((role, i) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="inline-flex items-center gap-1.5 border border-white/15 rounded-full px-3.5 py-1.5 font-inter text-sm text-white/60"
                  >
                    <CheckCircle className="w-3 h-3 text-mint/70 shrink-0" />
                    {role}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Content */}
          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-mint" />
                <span className="font-inter text-sm text-white/50 font-medium">
                  Dubai · UAE
                </span>
              </div>

              <h2 className="font-montserrat font-bold text-3xl lg:text-5xl text-white tracking-tight leading-tight">
                In-Office Recruitment for{' '}
                <span className="text-mint">Dubai Estate Agencies</span>
              </h2>

              <p className="mt-6 font-inter text-lg text-white/65 leading-relaxed">
                Dubai's property market is one of the most dynamic in the world. 
                We specialise in finding in-office talent for Dubai-based agencies — 
                professionals who understand the fast-paced, international nature 
                of UAE real estate.
              </p>

              <p className="mt-4 font-inter text-base text-white/50 leading-relaxed">
                Our Dubai network spans sales consultants, listings coordinators, 
                and transaction managers with proven track records in DIFC, JBR, 
                Downtown Dubai, and beyond. Whether you're establishing a new team 
                or scaling an existing one, we move fast and deliver quality.
              </p>

              {/* Benefits */}
              <div className="mt-10 space-y-4">
                {BENEFITS.map((benefit, i) => {
                  const Icon = benefit.icon;
                  return (
                    <motion.div
                      key={benefit.title}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="w-10 h-10 rounded-lg bg-mint/15 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4 text-mint" />
                      </div>
                      <div>
                        <p className="font-montserrat font-semibold text-sm text-white">{benefit.title}</p>
                        <p className="font-inter text-sm text-white/50 mt-0.5">{benefit.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              <Button
                onClick={() => scrollTo('#contact')}
                className="mt-10 bg-mint text-forest font-inter text-sm font-medium tracking-wider uppercase px-8 py-6 hover:bg-mint-light transition-all group"
              >
                Hire Dubai Talent
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
