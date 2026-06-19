'use client';

import React from 'react';
import styles from './TrustBar.module.css';
import { CheckCircle2 } from 'lucide-react';

const trustItems = [
  "Advanced Technology",
  "Experienced Dentists",
  "Painless Treatments",
  "Sterilized Equipment",
  "Affordable Pricing",
  "Same Day Consultation"
];

export const TrustBar = () => {
  return (
    <section className={styles.trustBar}>
      <div className={styles.scroller}>
        <div className={styles.scrollerInner}>
          {[...trustItems, ...trustItems].map((item, index) => (
            <div key={index} className={styles.trustItem}>
              <CheckCircle2 size={18} className={styles.icon} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
