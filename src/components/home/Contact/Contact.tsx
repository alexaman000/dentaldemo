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
  branch: string;
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
    const text = `Hi, I'd like to book an appointment at the ${data.branch} branch for ${data.treatment} on ${data.date} at ${data.time}. My name is ${data.name}.`;
    const phone = data.branch === 'Godadara' ? '919724398474' : '919173298474';
    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className={`section-padding ${styles.contactSection}`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.badge}>Get In Touch</span>
          <h2 className={styles.title}>Book Your <span className="text-gradient">Appointment</span></h2>
          <p className={styles.subtitle}>
            Schedule your visit at either of our two convenient locations in Surat.
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.infoCol}>
            <Card variant="premium" className={styles.infoCard}>
              <h3 className={styles.cardTitle}>Godadara Branch</h3>
              <div className={styles.infoItem}>
                <MapPin className={styles.icon} size={24} />
                <div>
                  <strong>Address</strong>
                  <p>50/77, 2nd Floor, S.K. Nagar 3, Jogani Mata Char Rasta, BJP Karyalaya, Godadara Main Road, Surat 395012</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Phone className={styles.icon} size={24} />
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <p><a href="tel:+919724398474">+91 97243 98474</a></p>
                </div>
              </div>

              <div className={styles.divider}></div>

              <h3 className={styles.cardTitle}>Dindoli Branch</h3>
              <div className={styles.infoItem}>
                <MapPin className={styles.icon} size={24} />
                <div>
                  <strong>Address</strong>
                  <p>First Floor, Lakshmi Narayan Nagar 2, Sai Baba Mandir, Dindoli, Surat</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Phone className={styles.icon} size={24} />
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <p><a href="tel:+919173298474">+91 91732 98474</a></p>
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.579178550742!2d72.8596637!3d21.169123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04e38e895c1cb%3A0xc68eaefaf701045a!2sKRISHNA%20DENTAL%20CARE%20%26%20IMPLANT%20CENTER!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Godadara Branch Location"
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
                  <div className={styles.formGroup}>
                    <label>Select Branch *</label>
                    <select {...register('branch', { required: true })} className={styles.input}>
                      <option value="Godadara">Godadara Branch</option>
                      <option value="Dindoli">Dindoli Branch</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
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
