'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Stethoscope, FileSearch, ClipboardList, PenTool, HeartHandshake } from 'lucide-react';
import styles from './Journey.module.css';

const steps = [
  { id: 1, title: 'Consultation', icon: <Stethoscope size={24} /> },
  { id: 2, title: 'Diagnosis', icon: <FileSearch size={24} /> },
  { id: 3, title: 'Treatment Plan', icon: <ClipboardList size={24} /> },
  { id: 4, title: 'Procedure', icon: <PenTool size={24} /> },
  { id: 5, title: 'Follow-up Care', icon: <HeartHandshake size={24} /> },
];

export const Journey = () => {
  return (
    <section className={`section-padding ${styles.journeySection}`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Simple Process</span>
          <h2 className={styles.title}>Your Patient <span className="text-gradient">Journey</span></h2>
        </div>

        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className={styles.stepWrapper}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className={styles.step}>
                <div className={styles.iconBox}>
                  {step.icon}
                  <span className={styles.stepNumber}>{step.id}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
              </div>
              
              {index < steps.length - 1 && (
                <div className={styles.connector}>
                  <div className={styles.line}></div>
                  <div className={styles.arrow}></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
