'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, Star, Microscope, Award } from 'lucide-react';
import styles from './Statistics.module.css';

const AnimatedCounter = ({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) => {
  const [count, setCount] = useState(from);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let startTimestamp: number;
      const step = (timestamp: number) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
        setCount(Math.floor(progress * (to - from) + from));
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}</span>;
};

const stats = [
  { icon: <Star size={32} />, value: 470, suffix: '+', label: 'Google Reviews' },
  { icon: <Users size={32} />, value: 5000, suffix: '+', label: 'Happy Patients' },
  { icon: <Microscope size={32} />, value: 100, suffix: '%', label: 'Modern Equipment' },
  { icon: <Award size={32} />, value: 5, suffix: '+', label: 'Expert Dentists' },
];

export const Statistics = () => {
  return (
    <section className={`section-padding ${styles.statsSection}`}>
      <div className="container">
        <div className={styles.grid}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className={styles.statCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className={styles.iconBox}>{stat.icon}</div>
              <div className={styles.statValue}>
                <AnimatedCounter from={0} to={stat.value} />
                {stat.suffix}
              </div>
              <p className={styles.statLabel}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
