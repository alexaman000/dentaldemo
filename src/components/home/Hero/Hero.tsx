'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button/Button';
import { Phone, Calendar, ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.blob1}></div>
        <div className={styles.blob2}></div>
      </div>
      
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.badge}>Premium Dental Care in Surat</span>
            <h1 className={styles.title}>
              Your Smile Deserves <br />
              <span className="text-gradient">Expert Care</span>
            </h1>
            <p className={styles.subtitle}>
              Advanced Dental Treatments, Dental Implants, Cosmetic Dentistry, Root Canal Treatment & Complete Oral Care across two branches in Godadara and Dindoli.
            </p>
            
            <div className={styles.ctaGroup}>
              <Button 
                size="lg" 
                icon={<Calendar size={20} />} 
                onClick={() => {
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Book Appointment
              </Button>
              <a href="tel:+919724398474" style={{ textDecoration: 'none' }}>
                <Button variant="outline" size="lg" icon={<Phone size={20} />}>
                  Call Us Now
                </Button>
              </a>
            </div>
            
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
                <div className={styles.statText}>
                  <strong>4.9/5</strong> (470+ Reviews)
                </div>
              </div>
              <div className={styles.statDivider}></div>
              <div className={styles.statItem}>
                <div className={styles.statText}>
                  <strong>2</strong> Branches in Surat
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className={styles.imageWrapper}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className={styles.imageContainer}
          >
            <div className={styles.imageBox}>
              <Image 
                src="/gallery/2.jpeg" 
                alt="Dr. Jaydeep Sakariya" 
                fill 
                className={styles.doctorImage} 
                priority 
                sizes="(max-width: 768px) 100vw, 500px"
              />
            </div>
            
            <div className={styles.doctorInfoCard}>
              <div className={styles.doctorName}>Dr. Jaydeep Sakariya</div>
              <div className={styles.doctorTitle}>Ortho & Cosmetic Dentist</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
