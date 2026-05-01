import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MapPin, Users, TrendingUp, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTexture from '@/components/ui/SectionTexture';

const ROLES = [
  'Sales Negotiators',
  'Branch Managers',
  'Lettings Negotiators',
  'Property Valuers',
  'Block Managers',
  'Property Managers',
  'Senior Associates',
  'Office Administrators',
];

const STATS = [
  { value: '150+', label: 'UK Placements', icon: Users },
  { value: '14 days', label: 'Avg. Time to Hire', icon: TrendingUp },
  { value: '97%', label: 'Retention Rate', icon: Award },
];

export default function UKRecruitmentSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="uk-recruitment" className="relative py-24 lg:py-40 bg-white overflow-hidden">
      <SectionTexture variant="dots" opacity={0.03} />

      {/* Decorative green arc */}
      <div className="absolute -left-32 top-1/2 -translate-y-1/2 w-96 h-96 bg-mint/8 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-mint" />
          <span className="font-inter text-sm font-medium tracking-widest uppercase text-forest/60">
            Service 01
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* LEFT — Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-mint-dark" />
                <span className="font-inter text-sm text-forest/50 font-medium">
                  England · Scotland · Wales
                </span>
              </div>

              <h2 className="font-montserrat font-bold text-3xl lg:text-5xl text-forest tracking-tight leading-tight">
                In-Office Recruitment for{' '}
                <span className="text-mint-dark">UK Estate Agencies</span>
              </h2>

              <p className="mt-6 font-inter text-lg text-forest/65 leading-relaxed">
                We are the UK's dedicated property recruitment specialists. Every consultant 
                on our team has hands-on estate agency experience — meaning we don't just 
                fill roles, we understand the nuances of each position and what makes 
                a great hire in your specific market.
              </p>

              <p className="mt-4 font-inter text-base text-forest/55 leading-relaxed">
                From independent boutique agencies to large multi-branch networks, 
                we build long-term staffing partnerships that scale with your business. 
                Whether you need a single negotiator or an entire branch team, 
                our process is tailored to your culture and ambitions.
              </p>

              {/* Stats */}
              <div className="mt-10 grid grid-cols-3 gap-4">
                {STATS.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="bg-surface rounded-xl p-4 border border-border/40"
                    >
                      <Icon className="w-4 h-4 text-mint-dark mb-2" />
                      <p className="font-montserrat font-bold text-xl text-forest">{stat.value}</p>
                      <p className="font-inter text-xs text-forest/50 mt-0.5">{stat.label}</p>
                    </motion.div>
                  );
                })}
              </div>

              <Button
                onClick={() => scrollTo('#contact')}
                className="mt-10 bg-forest text-white font-inter text-sm font-medium tracking-wider uppercase px-8 py-6 hover:bg-forest-light transition-all group"
              >
                Find UK Talent
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* RIGHT — Image + roles */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative rounded-2xl overflow-hidden shadow-2xl shadow-forest/10"
              style={{ boxShadow: '0 20px 50px -15px rgba(0,77,61,0.15)' }}
            >
              <img
                src="https://media.base44.com/images/public/69e9f279d5bd86e2aeb71a22/19a48925f_generated_8c27ba2a.png"
                alt="UK estate agency office"
                className="w-full h-72 lg:h-96 object-cover"
              />
              {/* Overlay badge */}
              <div className="absolute top-5 left-5 bg-white/95 backdrop-blur rounded-xl px-4 py-2.5 shadow-lg">
                <p className="font-inter text-xs text-forest/50 uppercase tracking-wider">Core Service</p>
                <p className="font-montserrat font-bold text-sm text-forest">UK In-Office</p>
              </div>
            </motion.div>

            {/* Roles grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p className="font-inter text-xs font-medium tracking-widest uppercase text-forest/40 mb-3">
                Roles We Place
              </p>
              <div className="flex flex-wrap gap-2">
                {ROLES.map((role, i) => (
                  <motion.span
                    key={role}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05, duration: 0.3 }}
                    className="inline-flex items-center gap-1.5 bg-surface border border-border/60 rounded-full px-3.5 py-1.5 font-inter text-sm text-forest/70"
                  >
                    <CheckCircle className="w-3 h-3 text-mint-dark shrink-0" />
                    {role}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
