"use client";
import { useState } from "react";

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    { question: "How far in advance should we book your services?", answer: "We recommend booking at least 3-6 months in advance for luxury weddings and large corporate events to ensure venue availability and proper planning time." },
    { question: "Do you provide catering as part of the event package?", answer: "Yes! We partner with Patna's finest caterers and can provide bespoke menus tailored to your exact taste, including premium global cuisines." },
    { question: "Can you plan an event outside of Patna?", answer: "Absolutely. While we are based in Patna, we handle destination weddings and premium events across India. Travel and logistics will be included in the planning process." },
    { question: "Do we have to use your recommended vendors?", answer: "Not at all. We have a trusted network of premium vendors, but we are more than happy to collaborate with any vendor you prefer to bring your vision to life." },
  ];

  return (
    <section className="faq-section" data-aos="fade-up">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <p className="section-subtitle">Everything you need to know about our services</p>
      
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
          >
            <div className="faq-question">
              <h3>{faq.question}</h3>
              <span className="faq-icon">{activeIndex === index ? '−' : '+'}</span>
            </div>
            <div className="faq-answer">
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
