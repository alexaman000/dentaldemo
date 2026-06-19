'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Stethoscope, Clock, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/Card/Card';
import styles from './About.module.css';

const doctors = [
  { name: 'Dr. Jaydeep Sakariya', role: 'Ortho & Cosmetic Dentist' },
  { name: 'Dr. Prakash Siyan', role: 'Consulting Dental Surgeon' },
  { name: 'Dr. Nidhi Jaani', role: 'BDS, Certified Pediatrics Dentist' },
  { name: 'Dr. Suman Patel', role: 'BDS, Certi Endodontist, Root Canal Specialist' },
  { name: 'Dr. Akanksha Yadav', role: 'BDS, Certi Laser Dentist' },
];

const features = [
  { icon: <ShieldCheck size={32} />, title: 'High Sterilization Standards', desc: '100% safe & hygienic environment' },
  { icon: <Stethoscope size={32} />, title: 'Advanced Technology', desc: 'Modern digital dentistry' },
  { icon: <Clock size={32} />, title: 'Painless Treatment', desc: 'Comfortable patient experience' },
];

export const About = () => {
  return (
    <section id="about" className={`section-padding ${styles.aboutSection}`}>
      <div className="container">
        <div className={styles.grid}>
          
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.badge}>About Our Clinic</span>
            <h2 className={styles.title}>Creating Healthy Smiles with <span className="text-gradient">Advanced Care</span></h2>
            
            <p className={styles.description}>
              At Krishna Dental Care & Implant Center, we believe every smile deserves the highest quality treatment. Our clinic combines advanced dental technology with compassionate care to deliver comfortable and effective treatments for patients of all ages.
            </p>
            <p className={styles.description}>
              Our mission is to provide painless, ethical and affordable dental solutions while maintaining the highest standards of hygiene and patient safety.
            </p>
            
            <div className={styles.features}>
              {features.map((feature, idx) => (
                <div key={idx} className={styles.featureItem}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <div>
                    <h4 className={styles.featureTitle}>{feature.title}</h4>
                    <p className={styles.featureDesc}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.sidebar}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card variant="premium" className={styles.doctorsCard}>
              <h3 className={styles.cardTitle}>Our Expert Team</h3>
              <ul className={styles.doctorList}>
                {doctors.map((doc, idx) => (
                  <li key={idx} className={styles.doctorItem}>
                    <div className={styles.doctorAvatar}>👨‍⚕️</div>
                    <div className={styles.doctorInfo}>
                      <h4 className={styles.doctorName}>{doc.name}</h4>
                      <span className={styles.doctorRole}>{doc.role}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
            
            <Card className={styles.branchCard}>
              <h3 className={styles.cardTitle}>Two Locations to Serve You</h3>
              <div className={styles.branchItem}>
                <MapPin className={styles.branchIcon} size={20} />
                <div>
                  <strong>Godadara Branch</strong>
                  <p>50/77, 2nd Floor, S.K. Nagar 3, Jogani Mata Char Rasta, Surat</p>
                </div>
              </div>
              <div className={styles.branchItem}>
                <MapPin className={styles.branchIcon} size={20} />
                <div>
                  <strong>Dindoli Branch</strong>
                  <p>First Floor, Lakshmi Narayan Nagar 2, Sai Baba Mandir, Surat</p>
                </div>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
