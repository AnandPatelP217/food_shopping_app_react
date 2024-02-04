import React from 'react';
import './FAQ.css'; // Import your CSS file

const FAQ = () => {
  const faqData = [
    {
      question: "How do I place an order?",
      answer: "To place an order, simply browse the menu, select the items you want, and click on the 'Add to Cart' button. Follow the checkout process to complete your order."
    },
    {
      question: "Can I customize my order?",
      answer: "Yes, you can customize your order. When adding items to your cart, you'll have options to customize toppings, quantity, and other preferences."
    },
    {
      question: "Is there a minimum order amount?",
      answer: "The minimum order amount may vary. It is displayed during the checkout process and is specific to your location."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is confirmed, you can track its status in real-time. Navigate to the 'Order History' section in your account to view updates on your delivery."
    },
    // Add more FAQ items as needed
  ];

  return (
<div className="faq-container">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-list">
        {faqData.map((faq, index) => (
          <div key={index} className="faq-item">
            <div className="question-mark">?</div>
            <div className="faq-content">
              <div className="question">{faq.question}</div>
              <div className="answer">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
