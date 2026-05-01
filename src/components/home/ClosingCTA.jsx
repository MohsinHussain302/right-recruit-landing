import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ClosingCTA() {
  return (
    <section id="contact" className="relative py-24 lg:py-40 bg-forest overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-mint/10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-mint/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-mint/3 rounded-full blur-3xl" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="font-montserrat font-bold text-3xl sm:text-4xl lg:text-6xl text-white tracking-tight leading-tight">
            Your Next Top Performer is{' '}
            <span className="text-mint">Already in Our Network</span>
          </h2>
          <p className="mt-8 font-inter text-lg text-white/60 leading-relaxed max-w-2xl mx-auto">
            Whether you're scaling your agency or looking for your next career move 
            in property, we're ready to help.
          </p>
        </motion.div>

        {/* Two cards */}
        <div className="mt-16 grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Link
              to="/hire-staff"
              className="block group bg-white rounded-2xl p-8 lg:p-10 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-mint/10 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-mint/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-mint/25 transition-colors">
                <Briefcase className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-forest mb-2">
                I'm Hiring
              </h3>
              <p className="font-inter text-sm text-forest/60 mb-6">
                Find the perfect property talent for your agency
              </p>
              <div className="inline-flex items-center gap-2 text-forest font-inter text-sm font-medium group-hover:gap-3 transition-all">
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <Link
              to="/candidates"
              className="block group bg-white rounded-2xl p-8 lg:p-10 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-mint/10 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-mint/15 flex items-center justify-center mx-auto mb-5 group-hover:bg-mint/25 transition-colors">
                <Users className="w-6 h-6 text-forest" />
              </div>
              <h3 className="font-montserrat font-bold text-xl text-forest mb-2">
                I'm a Candidate
              </h3>
              <p className="font-inter text-sm text-forest/60 mb-6">
                Explore top property roles across the UK
              </p>
              <div className="inline-flex items-center gap-2 text-forest font-inter text-sm font-medium group-hover:gap-3 transition-all">
                <span>View Opportunities</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
