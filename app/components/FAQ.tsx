"use client";
import { useState } from "react";
import styles from "app/styles/components/FAQ.module.css"; // ✅ Import Modern CSS

const faqs = [
  { question: "What products do you offer?", answer: "We offer a wide range of plastic household products." },
  { question: "Do you offer wholesale pricing?", answer: "Yes, we offer both wholesale and retail pricing." },
  { question: "How can I place an order?", answer: "You can order through our website or contact us on WhatsApp." },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Frequently Asked Questions</h2>

        {faqs.map((faq, index) => (
          <div key={index} className={styles.faqItem}>
            {/* ✅ FAQ Question */}
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className={`${styles.question} ${openIndex === index ? styles.active : ""}`}
            >
              {faq.question}
              <span className={styles.icon}>{openIndex === index ? "▲" : "▼"}</span>
            </button>

            {/* ✅ FAQ Answer with Smooth Transition */}
            <div className={`${styles.answer} ${openIndex === index ? styles.show : ""}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
