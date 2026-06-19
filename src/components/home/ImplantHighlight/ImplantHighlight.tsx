'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import styles from './ImplantHighlight.module.css';

const benefits = [
  'Removes Stubborn Stains',
  'Instantly Brighter Smile',
  'Painless Procedure',
  'Safe for Enamel',
  'Boosts Confidence',
  'Long Lasting Results',
];

export const ImplantHighlight = () => {
  return (
    <section className={`section-padding ${styles.implantSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.imageWrapper}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.imageContainer}
          >
            <div className={styles.imageBox}>
              <Image 
                src="/teeth_before_after.png" 
                alt="Teeth Polishing Before and After" 
                fill 
                className={styles.beforeAfterImg} 
              />
            </div>
            
            <div className={styles.floatingBadge}>
              <Sparkles size={24} className={styles.badgeIcon} />
              <div>
                <strong>Instant</strong>
                <span>Results</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className={styles.content}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className={styles.badge}>Cosmetic Dentistry</span>
          <h2 className={styles.title}>
            Transform Your Smile with <span className="text-gradient">Teeth Polishing</span>
          </h2>
          
          <p className={styles.description}>
            A bright smile is your best accessory. Our advanced teeth whitening and polishing treatments safely remove stains and discoloration, giving you a brilliantly white smile in just one visit.
          </p>

          <ul className={styles.benefitsList}>
            {benefits.map((benefit, index) => (
              <li key={index} className={styles.benefitItem}>
                <div className={styles.checkIcon}>
                  <Check size={16} />
                </div>
                {benefit}
              </li>
            ))}
          </ul>

          <div className={styles.actionGroup}>
            <Button 
              size="lg"
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Book Polishing Session
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
