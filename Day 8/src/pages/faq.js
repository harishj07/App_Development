import React, { useState } from 'react';
import '../assets/css/faq.css';
import Footer from "../components/footer";

function Faq() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqData = [
    {
      question: 'What is the logistics management system (LMS)?',
      answer:
        'The Logistics Management System (LMS) is a comprehensive platform designed to streamline logistics and supply chain operations, including order management, inventory control, transportation management, and more.',
    },
    {
      question: 'How can I sign up for the LMS?',
      answer:
        'To sign up for the LMS, visit our registration page and provide the required information. Once registered, you can log in and start using the system.',
    },
    {
      question: 'Is there a mobile app for the LMS?',
      answer:
        'Yes, we offer a mobile app for the LMS that allows you to access and manage your logistics operations on the go. You can download it from the app store.',
    },
    // Add more Q&A pairs as needed
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div className="faq-container">
      <h1>FAQ - Frequently Asked Questions</h1>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div
            className={`faq-item ${index === activeIndex ? 'active' : ''}`}
            key={index}
          >
            <div
              className="faq-question"
              onClick={() => toggleAccordion(index)}
            >
              {faq.question}
            </div>
            <div className={`faq-answer ${index === activeIndex ? 'active' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
