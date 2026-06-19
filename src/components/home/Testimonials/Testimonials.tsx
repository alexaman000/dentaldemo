'use client';

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import styles from './Testimonials.module.css';

const reviews = [
  {
    id: 1,
    name: "Ramesh Patel",
    text: "Excellent service! I had my root canal done by Dr. Prakash Siyan. It was completely painless and the clinic is very hygienic.",
    rating: 5,
    date: "2 weeks ago"
  },
  {
    id: 2,
    name: "Sneha Desai",
    text: "Dr. Jaydeep Sakariya is the best cosmetic dentist in Surat. I got veneers done and my smile looks completely natural now.",
    rating: 5,
    date: "1 month ago"
  },
  {
    id: 3,
    name: "Amit Sharma",
    text: "Very affordable and high-quality treatment. Took my daughter to Dr. Nidhi Jaani, she was very comfortable and not scared at all.",
    rating: 5,
    date: "2 months ago"
  },
  {
    id: 4,
    name: "Pooja Singh",
    text: "State-of-the-art clinic with advanced equipment. Got my implants done here, highly recommended for everyone in Godadara.",
    rating: 5,
    date: "3 months ago"
  }
];

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className={`section-padding ${styles.testimonialSection}`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Patient Stories</span>
          <h2 className={styles.title}>What Our <span className="text-gradient">Patients Say</span></h2>
        </div>

        <div className={styles.carouselWrapper}>
          <button className={styles.navBtn} onClick={prevSlide} aria-label="Previous Review">
            <ChevronLeft size={24} />
          </button>
          
          <div className={styles.slider}>
            <div 
              className={styles.slideTrack} 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {reviews.map((review) => (
                <div key={review.id} className={styles.slide}>
                  <div className={styles.reviewCard}>
                    <Quote className={styles.quoteIcon} size={40} />
                    <div className={styles.stars}>
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} size={20} fill="#FFC107" color="#FFC107" />
                      ))}
                    </div>
                    <p className={styles.reviewText}>"{review.text}"</p>
                    <div className={styles.reviewerInfo}>
                      <div className={styles.avatar}>
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className={styles.reviewerName}>{review.name}</h4>
                        <span className={styles.reviewDate}>{review.date} via Google</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button className={styles.navBtn} onClick={nextSlide} aria-label="Next Review">
            <ChevronRight size={24} />
          </button>
        </div>
        
        <div className={styles.dots}>
          {reviews.map((_, idx) => (
            <button
              key={idx}
              className={`${styles.dot} ${currentIndex === idx ? styles.activeDot : ''}`}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
