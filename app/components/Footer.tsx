import Link from "next/link";
import { FaInstagram } from "react-icons/fa"; // ✅ Import Instagram icon
import styles from "app/styles/components/Footer.module.css";

export default function Footer() {
  return (
    <footer id="footer" className={styles.footer}>
      <div className={styles.footerContainer}>
        {/* Logo and Name */}
        <div className={styles.logoContainer}>
          <img src="/images/logo.png" alt="Shree Deep Rekha Traders Logo" />
          <h3>Shree Deep Rekha Traders</h3>
        </div>

        {/* Contact Information */}
        <div className={styles.contactGrid}>
          {[
            {
              title: "📍 Visit Shop",
              link: "https://maps.app.goo.gl/AGPraoZmeuD9NSRK8",
              text: "Ahmedabad, Gujarat, India.",
            },
            {
              title: "📞 Call Us",
              link: "tel:+919824541902",
              text: "+91 9824541902",
            },
            {
              title: "💬 WhatsApp Us",
              link: "https://wa.me/9328991856",
              text: "24/7 Available",
            },
            {
              title: "📧 Email Us",
              link: "mailto:harshdjingar20@gmail.com",
              text: "Send Your Queries",
            },
          ].map((item, index) => (
            <div key={index} className={styles.contactBox}>
              <h4>{item.title}</h4>
              <p>
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.text}
                </a>
              </p>
            </div>
          ))}
        </div>

        {/* Social Media & Quick Links */}
        <div className={styles.footerBottom}>
          <div className={styles.footerLinks}>
            <Link href="/products">Products</Link>
            <Link href="/about">About Us</Link>
            <Link href="/#reviews">Customer Reviews</Link>
            <Link href="/#faq">FAQs</Link>
            <Link href="/#footer">Contact Us</Link>
          </div>

          <div className={styles.instagramBox}>
            <Link
              href="https://www.instagram.com/shree_deep_rekha_traders/"
              target="_blank"
            >
              Follow Us on{" "}
              <span className={styles.icon}>
                <FaInstagram />
              </span>{" "}
              Instagram
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className={styles.copyright}>
        <p>
          &copy; 2025{" "}
          <Link href="https://www.linkedin.com/in/harsh-jingar19/">
            Harsh Jingar
          </Link>
          . All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
