"use client";

import React, { useEffect, useState } from "react";
import styles from "app/styles/components/Hero.module.css";
import Link from "next/link";
import Image from "next/image";

const products = [
  "/images/products/cleaning/bucket-mop.jpeg",
  "/images/products/cleaning/bucket3.jpg",
  "/images/products/kids&baby/sipper-bottle.jpg",
  "/images/products/kids&baby/dinner-bell.jpg",
  "/images/products/kitchen/diamond-waterbottle.jpg",
  "/images/products/kitchen/round-storage.jpg",
  "/images/products/storage/container-2kg.jpg",
  "/images/products/storage/transperent-glass.jpg",
];

const typingText = [
  "Stylish & affordable products.",
  "Kitchenware & cleaning products.",
  "Durable & eco-friendly solutions.",
  "Products for your everyday needs.",
];

const Hero = () => {
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < typingText[index].length) {
        setCurrentText((prev) => prev + typingText[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(!isDeleting);
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setIndex((prev) => (prev + 1) % typingText.length);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}> Ahmedabad’s Leading Supplier of Plastic Household Products</h1>
        <p className={styles.subtitle}>{currentText}</p>
        <div className={styles.buttonWrapper}>
        <Link href="/products" className={styles.button}>
          Explore Products
        </Link>
        </div>
      </div>
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          {products.concat(products).map((src, i) => (
            <div key={i} className={styles.productCard}>
              <Image
                src={src}
                alt={`Product ${i + 1}`}
                width={150}
                height={200}
                className={styles.productImage}
                priority={true} // ✅ Loads immediately for better LCP
                loading="eager" // ✅ Prevents browser replacing with placeholders
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
