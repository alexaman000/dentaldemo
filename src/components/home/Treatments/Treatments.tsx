'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/Card/Card';
import { Activity, Shield, Sparkles, HeartPulse, Smile, Zap, Syringe, Baby, ArrowRight } from 'lucide-react';
import styles from './Treatments.module.css';

const treatments = [
  { id: 1, title: 'Dental Implants', desc: 'Permanent solution for missing teeth.', icon: <Shield size={32} /> },
  { id: 2, title: 'Root Canal', desc: 'Painless treatment to save infected teeth.', icon: <Activity size={32} /> },
  { id: 3, title: 'Teeth Whitening', desc: 'Brighten your smile in a single visit.', icon: <Sparkles size={32} /> },
  { id: 4, title: 'Cosmetic Dentistry', desc: 'Smile makeovers and veneers.', icon: <Smile size={32} /> },
  { id: 5, title: 'Braces & Aligners', desc: 'Straighten teeth with clear aligners.', icon: <Zap size={32} /> },
  { id: 6, title: 'Kids Dentistry', desc: 'Gentle dental care for children.', icon: <Baby size={32} /> },
  { id: 7, title: 'Tooth Extraction', desc: 'Safe and painless wisdom tooth removal.', icon: <Syringe size={32} /> },
  { id: 8, title: 'Emergency Care', desc: 'Immediate relief for dental pain.', icon: <HeartPulse size={32} /> },
];

export const Treatments = () => {
  return (
    <section id="treatments" className={`section-padding ${styles.treatmentsSection}`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Our Services</span>
          <h2 className={styles.title}>Advanced Dental <span className="text-gradient">Treatments</span></h2>
          <p className={styles.subtitle}>
            We offer a comprehensive range of dental services using the latest technology to ensure the best care for you and your family.
          </p>
        </div>

        <div className={styles.grid}>
          {treatments.map((treatment, idx) => (
            <motion.div
              key={treatment.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card variant="default" className={styles.treatmentCard}>
                <div className={styles.iconWrapper}>
                  {treatment.icon}
                </div>
                <h3 className={styles.cardTitle}>{treatment.title}</h3>
                <p className={styles.cardDesc}>{treatment.desc}</p>
                <button className={styles.learnMore}>
                  Learn More <ArrowRight size={16} />
                </button>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <div className={styles.action}>
          <button className={styles.viewAllBtn}>View All Treatments</button>
        </div>
      </div>
    </section>
  );
};
