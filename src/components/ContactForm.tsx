"use client";
import React, { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const eventType = formData.get("event-type") as string;
    const message = formData.get("message") as string;
    
    // Construct the WhatsApp message
    const whatsappMessage = `*New Event Inquiry!* 🎉
    
*Name:* ${name}
*Email:* ${email}
*Event Type:* ${eventType.toUpperCase()}

*Message:* 
${message}
    
_Sent from NS Events Website_`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // The WhatsApp number (including country code, no + or spaces)
    const phoneNumber = "916203846782"; 
    
    // Create the WhatsApp link
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappUrl, '_blank');
    
    // Reset form after sending
    setStatus("idle");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <form className="contact-form" data-aos="fade-up" data-aos-delay="300" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Your Full Name" required disabled={status === "submitting"} />
      <input type="email" name="email" placeholder="Your Email Address" required disabled={status === "submitting"} />
      
      <select name="event-type" defaultValue="" required disabled={status === "submitting"}>
        <option value="" disabled>Select Event Type</option>
        <option value="wedding">Luxury Wedding</option>
        <option value="corporate">Corporate Gala</option>
        <option value="party">Private Party</option>
        <option value="other">Other Event</option>
      </select>
      
      <textarea name="message" placeholder="Tell us about your dream event..." required disabled={status === "submitting"}></textarea>
      
      <button type="submit" className="btn-primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Opening WhatsApp..." : "Send via WhatsApp"}
      </button>
    </form>
  );
}

