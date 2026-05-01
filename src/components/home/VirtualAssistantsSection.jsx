import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle, ChevronDown, Laptop, Phone, FileText, BarChart2, Calendar, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionTexture from '@/components/ui/SectionTexture';

const VA_ROLES = [
  {
    icon: FileText,
    title: 'Tenancy Administrators',
    desc: 'Full tenancy lifecycle management — from application processing and referencing to move-in coordination and deposit registration. Your agency runs like clockwork.',
    tags: ['Referencing', 'Deposit Registration', 'Move-In Packs', 'Compliance Checks'],
  },
  {
    icon: Phone,
    title: 'Property Management VAs',
    desc: 'Proactive maintenance coordination, contractor management, and landlord communication. Your managed portfolio handled with care and precision.',
    tags: ['Maintenance Chasing', 'Contractor Liaison', 'Landlord Reporting', 'Portal Updates'],
  },
  {
    icon: BarChart2,
    title: 'CRM & Marketing Assistants',
    desc: 'Keep your CRM clean, your portals fresh, and your leads nurtured. Dedicated support for Rightmove, Zoopla, and OnTheMarket listings management.',
    tags: ['Rightmove / Zoopla', 'Lead Nurturing', 'CRM Management', 'Social Scheduling'],
  },
  {
    icon: Calendar,
    title: 'Lettings Support VAs',
    desc: 'Diary management, viewing coordination, and tenant communications handled promptly — so your negotiators stay focused on the deal.',
    tags: ['Diary Management', 'Viewing Bookings', 'Tenant Comms', 'Renewal Chasing'],
  },
  {
    icon: Mail,
    title: 'Sales Support Assistants',
    desc: 'From memo of sales to AML compliance and chase-up calls, our VAs keep your sales pipeline moving without the overhead of an extra in-office hire.',
    tags: ['MOS Preparation', 'AML Compliance', 'Solicitor Liaison', 'Pipeline Tracking'],
  },
];

function VACard({ role, index }) {
  const [open, setOpen] = useState(false);
  const Icon = role.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="bg-white rounded-2xl border border-border/60 overflow-hidden hover:shadow-lg hover:shadow-forest/5 transition-all duration-300"
      style={{ boxShadow: '0 4px 24px -8px rgba(0,77,61,0.08)' }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 rounded-xl bg-mint/15 flex items-center justify-center shrink-0">
            <Icon className="w-5 h-5 text-forest" />
          </div>
          <span className="font-montserrat font-semibold text-lg text-forest">{role.title}</span>
        </div>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 ml-4"
        >
          <ChevronDown className="w-5 h-5 text-forest/40" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <div className="h-px bg-border/50 mb-5" />
              <p className="font-inter text-base text-forest/60 leading-relaxed mb-4">
                {role.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {role.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 bg-surface border border-border/60 rounded-full px-3 py-1 font-inter text-xs text-forest/60"
                  >
                    <CheckCircle className="w-3 h-3 text-mint-dark shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function VirtualAssistantsSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="virtual-assistants" className="relative py-24 lg:py-40 bg-surface overflow-hidden">
      <SectionTexture variant="noise" opacity={0.04} />
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-mint/6 rounded-full blur-3xl pointer-events-none" />

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
            Service 03
          </span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* LEFT — Header + VA cards */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Laptop className="w-4 h-4 text-mint-dark" />
                <span className="font-inter text-sm text-forest/50 font-medium">
                  Remote · Global Talent
                </span>
              </div>

              <h2 className="font-montserrat font-bold text-3xl lg:text-5xl text-forest tracking-tight leading-tight">
                Virtual Assistants Trained{' '}
                <span className="text-mint-dark">for Property</span>
              </h2>

              <p className="mt-6 font-inter text-lg text-forest/65 leading-relaxed">
                Our VAs are not generic admin support. Every VA we place is trained 
                specifically for estate agency workflows — from tenancy admin to portal 
                management and compliance chasing.
              </p>

              <p className="mt-4 font-inter text-base text-forest/55 leading-relaxed">
                Agencies using our VA service typically save 35–60% on back-office 
                staffing costs while actually improving response times and landlord 
                satisfaction scores. Your front-line team stays focused on what matters: 
                listings and deals.
              </p>

              <Button
                onClick={() => scrollTo('#contact')}
                className="mt-8 bg-forest text-white font-inter text-sm font-medium tracking-wider uppercase px-8 py-6 hover:bg-forest-light transition-all group"
              >
                Get a VA
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="mt-10 rounded-2xl overflow-hidden shadow-xl shadow-forest/8"
            >
              <img
                src="https://media.base44.com/images/public/69e9f279d5bd86e2aeb71a22/f11e84771_generated_f7490585.png"
                alt="Remote workspace"
                className="w-full h-56 object-cover"
              />
            </motion.div>
          </div>

          {/* RIGHT — Accordion roles */}
          <div className="space-y-3 lg:pt-2">
            <p className="font-inter text-xs font-medium tracking-widest uppercase text-forest/40 mb-5">
              VA Roles We Place — Click to Explore
            </p>
            {VA_ROLES.map((role, i) => (
              <VACard key={role.title} role={role} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
