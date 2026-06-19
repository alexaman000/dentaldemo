'use client';

import React, { useEffect, useState } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import styles from './FloatingActions.module.css';

export const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles.floatingContainer}>
      <a 
        href="https://wa.me/919724398474" 
        target="_blank" 
        rel="noopener noreferrer" 
        className={`${styles.actionBtn} ${styles.whatsappBtn}`}
        aria-label="WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
      
      <a 
        href="tel:+919724398474" 
        className={`${styles.actionBtn} ${styles.callBtn}`}
        aria-label="Call"
      >
        <Phone size={24} />
      </a>

      <button 
        onClick={scrollToTop} 
        className={`${styles.actionBtn} ${styles.topBtn} ${isVisible ? styles.visible : ''}`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={24} />
      </button>
    </div>
  );
};
