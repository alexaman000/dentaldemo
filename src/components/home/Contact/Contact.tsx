'use client';

import React from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button/Button';
import { Card } from '@/components/ui/Card/Card';
import styles from './Contact.module.css';

type FormData = {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  date: string;
  time: string;
  message: string;
};

export const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // Ideally this would connect to an API route. 
    // For now, we simulate a WhatsApp redirect or console log.
    console.log(data);
    const text = `Hi, I'd like to book an appointment for ${data.treatment} on ${data.date} at ${data.time}. My name is ${data.name}.`;
    const phone = '919429784024';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className={`section-padding ${styles.contactSection}`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Get In Touch</span>
          <h2 className={styles.title}>Book Your <span className="text-gradient">Appointment</span></h2>
          <p className={styles.subtitle}>
            Schedule your visit at our state-of-the-art clinic in Surat.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <Card variant="premium" className={styles.infoCard}>
              <h3 className={styles.cardTitle}>32 Beats Dental Clinic</h3>
              <div className={styles.infoItem}>
                <MapPin className={styles.icon} size={24} />
                <div>
                  <strong>Address</strong>
                  <p>SHREE ROAD, VADOD BAMROLI, UDHANA, SURAT, GUJARAT 394210</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Phone className={styles.icon} size={24} />
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <p><a href="tel:+919429784024">+91 94297 84024</a></p>
                </div>
              </div>

              <div className={styles.divider}></div>

              <div className={styles.infoItem}>
                <Clock className={styles.icon} size={24} />
                <div>
                  <strong>Clinic Timings</strong>
                  <p>Monday - Sunday: 9:30 AM – 8:30 PM</p>
                </div>
              </div>
            </Card>

            <div className={styles.mapContainer}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.439165383186!2d72.82563361543026!3d21.134884289895316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be051e70e3ebbd5%3A0x6b107b36f1c79a4f!2sUdhana%2C%20Surat%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location"
              ></iframe>
            </div>
          </div>

          <div className={styles.formCol}>
            <Card className={styles.formCard}>
              <h3 className={styles.formTitle}>Request an Appointment</h3>
              <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                
                <div className={styles.formGroup}>
                  <label>Full Name *</label>
                  <input {...register('name', { required: true })} placeholder="John Doe" className={styles.input} />
                  {errors.name && <span className={styles.error}>Name is required</span>}
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Phone Number *</label>
                    <input type="tel" {...register('phone', { required: true })} placeholder="+91 98765 43210" className={styles.input} />
                    {errors.phone && <span className={styles.error}>Phone is required</span>}
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email Address</label>
                    <input type="email" {...register('email')} placeholder="john@example.com" className={styles.input} />
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup} style={{ width: '100%' }}>
                    <label>Treatment Type</label>
                    <select {...register('treatment')} className={styles.input}>
                      <option value="General Checkup">General Checkup</option>
                      <option value="Dental Implants">Dental Implants</option>
                      <option value="Root Canal">Root Canal Treatment</option>
                      <option value="Cosmetic">Cosmetic Dentistry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label>Preferred Date</label>
                    <input type="date" {...register('date')} className={styles.input} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Preferred Time</label>
                    <input type="time" {...register('time')} className={styles.input} />
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Message / Symptoms</label>
                  <textarea {...register('message')} rows={4} placeholder="Describe any pain or specific requirements..." className={styles.input}></textarea>
                </div>

                <Button type="submit" variant="primary" fullWidth size="lg">
                  Confirm Booking via WhatsApp
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
