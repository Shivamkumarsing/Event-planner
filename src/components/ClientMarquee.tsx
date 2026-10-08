import React from "react";

export default function ClientMarquee() {
  const clients = ["TATA", "Reliance", "HDFC Bank", "Marriott", "Adani", "Mahindra", "ITC Hotels", "BMW"];
  
  // Duplicate for infinite scrolling effect
  const marqueeClients = [...clients, ...clients, ...clients];

  return (
    <section className="client-marquee-section" data-aos="fade-up">
      <h2 className="section-title">Trusted By The Best</h2>
      <p className="section-subtitle">Corporate giants who loved our magic</p>
      
      <div className="client-marquee-container">
        <div className="client-marquee-track">
          {marqueeClients.map((client, idx) => (
            <div key={idx} className="client-logo">
              {client}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
