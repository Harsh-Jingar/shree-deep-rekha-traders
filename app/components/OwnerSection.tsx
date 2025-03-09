"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "app/styles/components/OwnerSection.module.css"; // Import CSS Module

export default function OwnerSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("owner");
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
    <section
      id="owner"
      className={`${styles.owner} ${isVisible ? styles.visible : ""}`}
    >
      <div className={styles.container}>
        {/* ✅ Animated Title */}
        <h2 className={styles.heading}>
          Meet the Visionary Behind Shree Deep Rekha Traders
        </h2>

        <div className={styles.ownerWrapper}>
          {/* 🔹 Owner's Photo with Subtle Animation */}
          <div className={styles.ownerPhoto}>
            <Image
              src="/images/dipak-jingar.png"
              alt="Mr. Dipak Jingar - Owner of Shree Deep Rekha Traders"
              width={400}
              height={400}
              className={styles.image}
              priority={true} // ✅ Forces eager loading for LCP
              loading="eager" // ✅ Ensures no lazy-loading delay
            />
          </div>

          {/* 🔹 Owner's Details */}
          <div className={styles.ownerDetails}>
            <h3 className={styles.subheading}>Mr. Dipak Jingar</h3>
            <p className={styles.description}>
              Founder & Visionary Leader of Shree Deep Rekha Traders
            </p>
            <p className={styles.paragraph}>
              With a decade of experience in the{" "}
              <strong>plastic household industry</strong>,
              <strong>Mr. Dipak Jingar</strong> established Shree Deep Rekha
              Traders with a mission to offer{" "}
              <strong>
                high-quality, eco-friendly, and innovative plastic solutions
              </strong>{" "}
              for modern homes and businesses. His deep industry expertise and
              commitment to excellence have positioned the company as a{" "}
              <strong>trusted supplier in Ahmedabad and across India</strong>.
            </p>

            <p className={styles.paragraph}>
              Under his leadership, Shree Deep Rekha Traders has become a{" "}
              <strong>go-to destination</strong>
              for customers seeking durable and budget-friendly plastic
              products. His vision includes expanding eco-conscious product
              lines to meet{" "}
              <strong>India’s evolving sustainability needs</strong>.
            </p>

            {/* 📞 Contact Details */}
            <h4 className={styles.contactHeading}>
              Get in Touch with Mr. Dipak Jingar
            </h4>
            <ul className={styles.contactList}>
              <li>
                <strong>📞 Phone:</strong>
                <a href="tel:+919824541902" className={styles.link}>
                  {" "}
                  +91 9824541902
                </a>
              </li>
              <li>
                <strong>📍 Visit Us:</strong>
                Shree Deep Rekha Traders - Opp. Rajiv Gandhi Bhavan, Near Memco
                Cross Road, Naroda Road, Ahmedabad, Gujarat 382345.
              </li>
            </ul>

            {/* 📢 Message from the Owner */}
            <h4 className={styles.contactHeading}>
              A Message from the Founder
            </h4>
            <blockquote className={styles.quote}>
              "At <strong>Shree Deep Rekha Traders</strong>, we strive to bring
              quality and innovation to every household and business. Our focus
              is on{" "}
              <strong>affordability, sustainability, and durability</strong>.
              Join us in creating a smarter, more organized world with our
              premium plastic solutions."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
