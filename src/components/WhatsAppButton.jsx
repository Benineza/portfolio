import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '250780539886';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a 
      href={whatsappUrl}
      className="whatsapp-float"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
};

export default WhatsAppButton;