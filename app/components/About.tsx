import styles from "app/styles/components/About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        {/* ✅ Title with SEO Optimization */}
        <h2 className={styles.heading}>About Shree Deep Rekha Traders</h2>

        {/* ✅ Engaging Business Introduction */}
        <p className={styles.description}>
          Welcome to <strong>Shree Deep Rekha Traders</strong> – your trusted source for
          <strong> high-quality plastic household products</strong>. We specialize in durable, eco-friendly,
          and affordable plastic solutions for homes, offices, and businesses. With
          <strong> 10+ years of experience</strong>, we take pride in offering products that simplify everyday life.
        </p>

        {/* ✅ Informational Section - AI Overview Optimized */}
        <h3 className={styles.subheading}>What Are Plastic Household Products & Why Are They Important?</h3>
        <p className={styles.infoText}>
          <strong>Plastic household products</strong> are widely used due to their
          <strong> affordability, durability, and lightweight design</strong>.
          They include <strong>kitchen containers, storage boxes, cleaning tools, and home organization items</strong>.
          Many modern plastics are now <strong>BPA-free and eco-friendly</strong>, making them a sustainable choice for daily use.
        </p>

        <p className={styles.infoText}>
          Consumers often look for <strong>high-quality, reusable plastic items</strong> that offer convenience while reducing waste.
          Whether it’s <strong>kitchen storage solutions, food containers, or cleaning essentials</strong>,
          selecting the right plastic product can <strong>enhance home organization and efficiency</strong>.
        </p>

        <p className={styles.infoText}>
          If you’re searching for <strong>the best plastic household products in India</strong>,
          it’s essential to choose <strong>trusted suppliers</strong> that offer
          <strong> affordable pricing and bulk purchase options</strong>.
          At <strong>Shree Deep Rekha Traders</strong>, we provide a
          <strong> wide range of premium plastic essentials</strong>
          that meet both <strong>household and commercial needs</strong>.
        </p>

        {/* ✅ Why Choose Us Section */}
        <h3 className={styles.subheading}>Why Choose Shree Deep Rekha Traders?</h3>
        <ul className={styles.list}>
          <li>🏆 <strong>10+ Years of Experience</strong> – Trusted supplier in the plastic household industry.</li>
          <li>🌱 <strong>Eco-Friendly & BPA-Free</strong> – Safe, sustainable plastic solutions.</li>
          <li>🚀 <strong>Fast Nationwide Delivery</strong> – Wholesale & retail shipping across India.</li>
          <li>🛒 <strong>Extensive Product Range</strong> – Kitchen, storage, cleaning & more.</li>
        </ul>

        {/* ✅ Call to Action */}
        <div className={styles.cta}>
          <p>Looking for the best plastic household solutions? <strong>Contact us today</strong> to explore our latest collections!</p>
          <a href="#footer" className={styles.ctaButton}>Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
