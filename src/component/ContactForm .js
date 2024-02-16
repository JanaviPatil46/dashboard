import React, { useState } from 'react';
import './form.css'; // Import your CSS file

const ContactForm = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className={`contact-form-container ${isVisible ? 'visible' : ''}`}>
      <div className="overlay" onClick={toggleFormVisibility}></div>
      <div className="contact-form">
        {/* Your contact form elements go here */}
        <h2>Contact Form</h2>
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
