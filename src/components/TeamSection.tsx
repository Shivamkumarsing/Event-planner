import React from "react";
import Image from "next/image";

export default function TeamSection() {
  const team = [
    { name: "Suman Kumar", role: "Chief Event Designer", img: "/gallery-1.jpg" },
    { name: "Neha Sharma", role: "Wedding Planner", img: "/gallery-2.jpg" },
    { name: "Rajat Singh", role: "Logistics Head", img: "/gallery-3.jpg" },
  ];

  return (
    <section className="team-section" data-aos="fade-up">
      <h2 className="section-title">Meet The Magicians</h2>
      <p className="section-subtitle">The creative minds behind NS Events</p>

      <div className="team-grid">
        {team.map((member, idx) => (
          <div key={idx} className="team-card" data-aos="flip-left" data-aos-delay={(idx + 1) * 200}>
            <div className="team-img-wrapper">
              <Image src={member.img} alt={member.name} fill style={{ objectFit: 'cover' }} />
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
