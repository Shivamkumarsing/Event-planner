import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Navbar */}
      <header data-aos="fade-down">
        <Link href="/" className="logo">NS EVENTS</Link>
        <nav className="nav-links">
          <Link href="#services">Services</Link>
          <Link href="#gallery">Gallery</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <Image 
          src="/hero-bg.jpg" 
          alt="Elegant wedding reception background"
          fill
          priority
          className="hero-bg"
        />
        <div className="hero-overlay"></div>
        <h1 data-aos="fade-up" data-aos-delay="100">Crafting Unforgettable Moments</h1>
        <p data-aos="fade-up" data-aos-delay="300">
          Patna's premier event planning service specializing in luxury weddings, 
          corporate galas, and bespoke private parties. We turn your vision into 
          an extraordinary reality.
        </p>
        <div data-aos="fade-up" data-aos-delay="500">
          <Link href="#contact" className="btn-primary">
            Plan Your Event
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section">
        <h2 className="section-title" data-aos="fade-up">Our Expertise</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">Meticulously curated experiences for every occasion</p>
        
        <div className="services-grid">
          <div className="service-card" data-aos="fade-up" data-aos-delay="200">
            <div className="service-icon">💍</div>
            <h3>Luxury Weddings</h3>
            <p>From breathtaking floral arrangements to seamless execution, we design the wedding of your dreams. Enjoy your special day while we handle every immaculate detail.</p>
          </div>
          
          <div className="service-card" data-aos="fade-up" data-aos-delay="400">
            <div className="service-icon">🥂</div>
            <h3>Corporate Galas</h3>
            <p>Elevate your brand with professional, sophisticated, and memorable corporate events. We provide complete end-to-end management for product launches and retreats.</p>
          </div>
          
          <div className="service-card" data-aos="fade-up" data-aos-delay="600">
            <div className="service-icon">✨</div>
            <h3>Private Parties</h3>
            <p>Celebrate life's milestones with bespoke private parties. Whether it's a grand birthday celebration or an intimate anniversary, we make it spectacular.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-text" data-aos="fade-right">
          <h2>About NS Event Patna</h2>
          <p>
            With years of experience in the event planning industry, we pride ourselves 
            on our unwavering attention to detail and our ability to transform ordinary 
            spaces into magical environments. We believe that every event should tell 
            a unique story—your story.
          </p>
          <div className="about-stats">
            <div className="stat" data-aos="zoom-in" data-aos-delay="200">
              <h4>500+</h4>
              <p>Events Planned</p>
            </div>
            <div className="stat" data-aos="zoom-in" data-aos-delay="400">
              <h4>100%</h4>
              <p>Client Satisfaction</p>
            </div>
            <div className="stat" data-aos="zoom-in" data-aos-delay="600">
              <h4>50+</h4>
              <p>Premium Venues</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="gallery-section">
        <h2 className="section-title" data-aos="fade-up">Our Portfolio</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">A glimpse into our magical creations</p>
        
        <div className="gallery-grid">
          <div className="gallery-item" data-aos="fade-up" data-aos-delay="200">
            <Image src="/gallery-1.jpg" alt="Corporate Event Gala" width={500} height={500} />
            <div className="gallery-overlay">
              <h3>Corporate Excellence</h3>
            </div>
          </div>
          <div className="gallery-item" data-aos="fade-up" data-aos-delay="400">
            <Image src="/gallery-2.jpg" alt="Luxury Outdoor Wedding" width={500} height={500} />
            <div className="gallery-overlay">
              <h3>Fairytale Weddings</h3>
            </div>
          </div>
          <div className="gallery-item" data-aos="fade-up" data-aos-delay="600">
            <Image src="/gallery-3.jpg" alt="Private Birthday Party" width={500} height={500} />
            <div className="gallery-overlay">
              <h3>Bespoke Parties</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2 className="section-title" data-aos="fade-up">Words of Love</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">What our clients say about us</p>
        
        <div className="testimonials-grid">
          <div className="testimonial-card" data-aos="flip-up" data-aos-delay="200">
            <div className="stars">★★★★★</div>
            <p>"NS Events completely transformed our wedding day. Every little detail was perfect, and we didn't have to worry about a single thing. Truly magical!"</p>
            <span className="testimonial-author">- Sarah & Rahul</span>
          </div>
          <div className="testimonial-card" data-aos="flip-up" data-aos-delay="400">
            <div className="stars">★★★★★</div>
            <p>"The best event planners in Patna! They handled our corporate gala for 500 guests with absolute professionalism and elegance."</p>
            <span className="testimonial-author">- TechFlow Inc.</span>
          </div>
          <div className="testimonial-card" data-aos="flip-up" data-aos-delay="600">
            <div className="stars">★★★★★</div>
            <p>"My 25th birthday party was everything I dreamed of. The decor, the lighting, the vibe—NS Events nailed it."</p>
            <span className="testimonial-author">- Jessica M.</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title" data-aos="fade-up">Get In Touch</h2>
        <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">Let's discuss how we can make your next event extraordinary</p>
        
        <form className="contact-form" data-aos="fade-up" data-aos-delay="300">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email Address" required />
          <select name="event-type" defaultValue="" required>
            <option value="" disabled>Select Event Type</option>
            <option value="wedding">Luxury Wedding</option>
            <option value="corporate">Corporate Gala</option>
            <option value="party">Private Party</option>
            <option value="other">Other Event</option>
          </select>
          <textarea name="message" placeholder="Tell us about your dream event..." required></textarea>
          <button type="submit" className="btn-primary">Send Inquiry</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <h2>Let's Create Magic Together</h2>
          <p>Contact NS Events to begin planning your extraordinary celebration.</p>
          <div className="social-links">
            <a href="https://www.instagram.com/ns.event.patna" target="_blank" rel="noopener noreferrer">Instagram</a>
            <a href="mailto:contact@nseventpatna.com">Email Us</a>
          </div>
          <p className="copyright">&copy; {new Date().getFullYear()} NS Event Patna. All Rights Reserved.</p>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
        </svg>
      </a>
    </main>
  );
}
