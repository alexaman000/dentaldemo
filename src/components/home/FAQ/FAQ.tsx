'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import styles from './FAQ.module.css';

const faqs = [
  {
    question: "Is dental implant painful?",
    answer: "No, the procedure is performed under local anesthesia. Most patients report less discomfort than a tooth extraction. Post-procedure soreness is easily managed with prescribed medication."
  },
  {
    question: "How long does a root canal take?",
    answer: "A standard root canal can usually be completed in one or two visits, depending on the tooth and level of infection. Each session typically lasts 45 to 90 minutes."
  },
  {
    question: "How often should teeth be cleaned?",
    answer: "We recommend professional teeth cleaning every 6 months to maintain optimal oral health and prevent tartar buildup that causes gum disease."
  },
  {
    question: "How long do implants last?",
    answer: "With proper care and good oral hygiene, dental implants can last a lifetime. They are a permanent and highly durable solution for missing teeth."
  },
  {
    question: "Do you provide emergency dental care?",
    answer: "Yes, we handle dental emergencies including severe toothaches, broken teeth, and knocked-out teeth. Please call our clinic immediately if you have an emergency."
  },
  {
    question: "Do you accept appointments on WhatsApp?",
    answer: "Yes! You can easily book or reschedule your appointment by sending us a message on WhatsApp at our Godadara (+91 97243 98474) or Dindoli (+91 91732 98474) branch numbers."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={`section-padding ${styles.faqSection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.header}>
          <span className={styles.badge}>Got Questions?</span>
          <h2 className={styles.title}>Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p className={styles.subtitle}>
            Find answers to common questions about our dental treatments, procedures, and clinic policies.
          </p>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.accordionItem} ${openIndex === index ? styles.active : ''}`}
            >
              <button 
                className={styles.accordionHeader} 
                onClick={() => toggleAccordion(index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.question}>{faq.question}</span>
                <ChevronDown 
                  className={`${styles.icon} ${openIndex === index ? styles.rotateIcon : ''}`} 
                  size={20} 
                />
              </button>
              <div 
                className={styles.accordionBody}
                style={{ maxHeight: openIndex === index ? '200px' : '0' }}
              >
                <div className={styles.answer}>
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
