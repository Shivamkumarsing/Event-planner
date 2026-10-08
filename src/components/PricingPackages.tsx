import React from "react";

export default function PricingPackages() {
  const packages = [
    {
      name: "Silver Tier",
      price: "Essential Elegance",
      features: ["Standard Venue Decor", "Basic Floral Arrangements", "Day-of Coordination", "Standard Lighting"],
      delay: 200
    },
    {
      name: "Gold Tier",
      price: "Premium Magic",
      features: ["Premium Venue Decor", "Exotic Floral Design", "Full Event Management", "Custom Stage & Lighting", "Vendor Coordination"],
      delay: 400,
      highlight: true
    },
    {
      name: "Platinum Tier",
      price: "Ultimate Luxury",
      features: ["Bespoke Theme Design", "Imported Floral Decor", "End-to-End Management", "Celebrity Artist Booking", "Premium Hospitality & Logistics"],
      delay: 600
    }
  ];

  return (
    <section className="pricing-section" data-aos="fade-up">
      <h2 className="section-title">Curated Packages</h2>
      <p className="section-subtitle">Choose the perfect tier for your special day</p>

      <div className="pricing-grid">
        {packages.map((pkg, idx) => (
          <div key={idx} className={`pricing-card ${pkg.highlight ? 'highlight' : ''}`} data-aos="zoom-in" data-aos-delay={pkg.delay}>
            {pkg.highlight && <div className="popular-badge">Most Popular</div>}
            <h3>{pkg.name}</h3>
            <h4>{pkg.price}</h4>
            <ul>
              {pkg.features.map((feat, i) => (
                <li key={i}><span>✓</span> {feat}</li>
              ))}
            </ul>
            <a href="#contact" className="btn-primary">Inquire Now</a>
          </div>
        ))}
      </div>
    </section>
  );
}
