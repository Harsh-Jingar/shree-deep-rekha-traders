"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import styles from "app/styles/components/Reviews.module.css";

const reviews = [
  { name: "Raj Patel", review: "Great variety and fantastic durability!", rating: 5 },
  { name: "Hardik Khatri", review: "The owner is very kind & friendly.", rating: 5 },
  { name: "Shrey Shukla", review: "Excellent customer service and great prices.", rating: 5 },
];

export default function Reviews() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("reviews");
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
    <section id="reviews" className={styles.reviews}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className={styles.heading}>What Our Customers Say</h2>

        {/* Reviews Grid with Staggered Animation */}
        <motion.div
          className={styles.grid}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className={styles.avatar}>{review.name.charAt(0)}</div>
              <p className={styles.reviewText}>"{review.review}"</p>
              <div className={styles.reviewerName}>{review.name}</div>
              <div className={styles.stars}>
                {"★".repeat(review.rating).padEnd(5, "☆").split("").map((star, i) => (
                  <span key={i} className={star === "★" ? styles.starFilled : styles.starEmpty}>
                    {star}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
