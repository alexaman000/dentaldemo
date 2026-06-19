import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Clock, Mail } from 'lucide-react';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {/* Brand Col */}
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className="text-gradient">Krishna</span> Dental Care
            </Link>
            <p className={styles.description}>
              Creating Healthy Smiles with Advanced Dental Care. Your trusted destination for comprehensive and painless dentistry in Surat.
            </p>
            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/762360440298911" target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label="Facebook">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><Link href="#home">Home</Link></li>
              <li><Link href="#about">About Us</Link></li>
              <li><Link href="#treatments">Treatments</Link></li>
              <li><Link href="#gallery">Gallery</Link></li>
              <li><Link href="#testimonials">Reviews</Link></li>
              <li><Link href="#faq">FAQs</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className={styles.contactCol}>
            <h4 className={styles.colTitle}>Contact Us</h4>
            
            <div className={styles.contactItem}>
              <MapPin className={styles.icon} size={18} />
              <div>
                <strong>Godadara Branch:</strong>
                <p>50/77, 2nd Floor, S.K. Nagar 3, Godadara Main Road, Surat</p>
                <a href="tel:+919724398474">+91 97243 98474</a>
              </div>
            </div>

            <div className={styles.contactItem}>
              <MapPin className={styles.icon} size={18} />
              <div>
                <strong>Dindoli Branch:</strong>
                <p>1st Floor, Lakshmi Narayan Nagar 2, Dindoli, Surat</p>
                <a href="tel:+919173298474">+91 91732 98474</a>
              </div>
            </div>
            
            <div className={styles.contactItem}>
              <Clock className={styles.icon} size={18} />
              <div>
                <strong>Timings:</strong>
                <p>Monday - Sunday: 9:30 AM – 8:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} Krishna Dental Care & Implant Center. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
