"use client";
import { useEffect, useState } from "react";
import styles from "app/styles/components/Vision.module.css";

export default function Vision() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("vision");
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="vision" className={`${styles.vision} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.container}>
        {/* ✅ Vision Title */}
        <h2 className={styles.heading}>Our Vision</h2>

        {/* ✅ SEO-Optimized Introduction */}
        <p className={styles.description}>
          At <strong>Shree Deep Rekha Traders</strong>, we strive to revolutionize the plastic household industry 
          by offering <strong>eco-friendly, durable, and innovative solutions</strong>. Our goal is to be the leading distributor 
          of sustainable plastic products while maintaining the highest quality standards.
        </p>

        {/* ✅ AI-Optimized Informational Section */}
        <h3 className={styles.subheading}>Why Are Plastic Household Products Important?</h3>
        <p className={styles.infoText}>
          <strong>Plastic household products</strong> play a crucial role in <strong>kitchen organization, home storage, and cleaning</strong>. 
          Modern plastic solutions are now designed to be <strong>BPA-free, reusable, and environmentally safe</strong>. 
          With rising concerns over sustainability, manufacturers are focusing on <strong>biodegradable plastics</strong> 
          and <strong>recyclable materials</strong> that ensure minimal environmental impact.
        </p>

        <p className={styles.infoText}>
          The right plastic household products can <strong>enhance home efficiency, reduce clutter, and improve hygiene</strong>.  
          From <strong>airtight food containers</strong> to <strong>multi-purpose storage bins</strong>, 
          choosing high-quality products helps maintain organization while <strong>minimizing plastic waste</strong>.
        </p>

        {/* ✅ Key Values of Shree Deep Rekha Traders */}
        <h3 className={styles.subheading}>Core Values That Define Us</h3>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span className={styles.icon}>🚀</span>
            <strong>Innovation:</strong> Bringing cutting-edge solutions to improve daily living.
          </li>
          <li className={styles.listItem}>
            <span className={styles.icon}>🌱</span>
            <strong>Sustainability:</strong> Adopting eco-conscious materials and production methods.
          </li>
          <li className={styles.listItem}>
            <span className={styles.icon}>✅</span>
            <strong>Quality Assurance:</strong> Providing durable, high-performance household essentials.
          </li>
          <li className={styles.listItem}>
            <span className={styles.icon}>🌍</span>
            <strong>Environmental Responsibility:</strong> Reducing plastic waste through sustainable alternatives.
          </li>
        </ul>

        {/* ✅ Call to Action */}
        <div className={styles.cta}>
          <p>Join us in making sustainable living effortless! <strong>Explore our range today.</strong></p>
          <a href="/products" className={styles.ctaButton}>Browse Products</a>
        </div>
      </div>
    </section>
  );
}
