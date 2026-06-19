'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import styles from './Gallery.module.css';

const galleryImages = [
  '/gallery/1.jpeg',
  '/gallery/2.jpeg',
  '/gallery/3.jpeg',
  '/gallery/4.jpeg',
];

export const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className={`section-padding ${styles.gallerySection}`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Clinic Tour</span>
          <h2 className={styles.title}>Our <span className="text-gradient">Gallery</span></h2>
          <p className={styles.subtitle}>
            Take a look at our state-of-the-art facilities and modern equipment designed for your comfort and safety.
          </p>
        </div>

        <div className={styles.grid}>
          {galleryImages.map((src, idx) => (
            <motion.div
              key={idx}
              className={styles.imageCard}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedImage(src)}
            >
              <div className={styles.imageWrapper}>
                <Image
                  src={src}
                  alt={`Clinic Gallery Image ${idx + 1}`}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className={styles.overlay}>
                  <ZoomIn size={32} className={styles.zoomIcon} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
            <X size={32} />
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Gallery Preview"
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      )}
    </section>
  );
};
