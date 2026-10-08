"use client";
import { useState } from "react";

export default function CostEstimator() {
  const [eventType, setEventType] = useState("wedding");
  const [guests, setGuests] = useState(100);
  const [tier, setTier] = useState("gold");

  // Rough estimation logic
  const calculateEstimate = () => {
    let base = eventType === "wedding" ? 50000 : eventType === "corporate" ? 30000 : 20000;
    let guestCost = guests * (tier === "platinum" ? 2500 : tier === "gold" ? 1500 : 800);
    return (base + guestCost).toLocaleString('en-IN');
  };

  return (
    <section className="estimator-section" data-aos="fade-up">
      <h2 className="section-title">Quick Cost Estimator</h2>
      <p className="section-subtitle">Get a rough idea of your investment</p>

      <div className="estimator-card">
        <div className="estimator-form">
          <div className="form-group">
            <label>Event Type</label>
            <select value={eventType} onChange={(e) => setEventType(e.target.value)}>
              <option value="wedding">Luxury Wedding</option>
              <option value="corporate">Corporate Gala</option>
              <option value="party">Private Party</option>
            </select>
          </div>

          <div className="form-group">
            <label>Number of Guests: {guests}</label>
            <input 
              type="range" 
              min="50" 
              max="2000" 
              step="50" 
              value={guests} 
              onChange={(e) => setGuests(Number(e.target.value))} 
            />
          </div>

          <div className="form-group">
            <label>Experience Tier</label>
            <div className="tier-selector">
              <button className={tier === "silver" ? "active" : ""} onClick={() => setTier("silver")}>Silver</button>
              <button className={tier === "gold" ? "active" : ""} onClick={() => setTier("gold")}>Gold</button>
              <button className={tier === "platinum" ? "active" : ""} onClick={() => setTier("platinum")}>Platinum</button>
            </div>
          </div>
        </div>

        <div className="estimator-result">
          <h3>Estimated Starting Cost</h3>
          <div className="price">₹ {calculateEstimate()}*</div>
          <p className="disclaimer">*This is a rough estimate excluding venue charges. Contact us for a precise quote.</p>
          <a href="#contact" className="btn-primary" style={{ marginTop: '20px', display: 'inline-block' }}>Get Detailed Quote</a>
        </div>
      </div>
    </section>
  );
}
