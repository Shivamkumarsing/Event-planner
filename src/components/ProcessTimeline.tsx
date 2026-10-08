import React from "react";

export default function ProcessTimeline() {
  const steps = [
    { title: "Initial Consultation", desc: "We sit down to understand your vision, theme, and requirements for the big day.", icon: "☕" },
    { title: "Design & Conceptualization", desc: "Our team creates 3D mockups, mood boards, and selects the perfect color palettes.", icon: "🎨" },
    { title: "Logistics & Planning", desc: "We handle vendor negotiations, venue booking, and timeline management.", icon: "📋" },
    { title: "The Magical Execution", desc: "On the day of the event, our team ensures everything is flawlessly executed.", icon: "✨" },
  ];

  return (
    <section className="process-section" data-aos="fade-up">
      <h2 className="section-title">Our Magic Process</h2>
      <p className="section-subtitle">How we turn your dreams into reality</p>
      
      <div className="timeline-container">
        {steps.map((step, index) => (
          <div key={index} className="timeline-step" data-aos="fade-up" data-aos-delay={(index + 1) * 200}>
            <div className="timeline-icon">{step.icon}</div>
            <div className="timeline-content">
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
            {index !== steps.length - 1 && <div className="timeline-line"></div>}
          </div>
        ))}
      </div>
    </section>
  );
}
