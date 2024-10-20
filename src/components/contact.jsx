import React from 'react';
import '../style/styles.css';

const Contact = () => {
    return (
      <section className="contact-section" id='contact'>
        <h2 className="contact-title">Contact Us</h2>
        <div className="contact-container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.785667122686!2d106.77121810000001!3d-6.2918761999999875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1d2c82f85ff%3A0x63676d6008f99272!2sKampus%20Ptiq%20Jakarta!5e0!3m2!1sen!2sid!4v1729389069290!5m2!1sen!2sid"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PTIQ Jakarta Location"
            ></iframe>
          </div>
          <div className="form-container">
            <form className="contact-form">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="6" required></textarea>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    );
  };
  
  export default Contact;