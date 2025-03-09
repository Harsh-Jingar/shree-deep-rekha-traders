"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import styles from "app/styles/components/PreviewProduct.module.css";

interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  price: string;
  description: string;
  images?: string[];
}

interface Props {
  product: Product;
  onClose: () => void;
}

export default function PreviewProduct({ product, onClose }: Props) {
  const [selectedImage, setSelectedImage] = useState(product.image);

  // Generate WhatsApp message link
  const whatsappMessage = `Hello, I am interested in this product:
🛍 *${product.title}*
💰 Price: ${product.price}
📌 Category: ${product.category}
🔍 Description: ${product.description}
Can you provide more details?`;

  const whatsappLink = `https://wa.me/919876543210?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // Handle back button press to close preview
  useEffect(() => {
    const handleBackButton = () => {
      onClose(); // Close the preview when back button is pressed
      return false; // Prevents default behavior (optional)
    };

    window.history.pushState(null, "", window.location.href); // Add state to history
    window.addEventListener("popstate", handleBackButton); // Listen for back button press

    return () => {
      window.removeEventListener("popstate", handleBackButton); // Cleanup
    };
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        {/* ✅ Close Button */}
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>

        {/* ✅ Product Image & Thumbnails */}
        <div className={styles.imageContainer}>
          {/* ✅ Main Product Image - LCP Optimized */}
          <Image
            src={selectedImage}
            alt={product.title}
            width={500}
            height={600}
            className={styles.image}
            priority={true} // ✅ Forces eager loading for LCP
            loading="eager" // ✅ Ensures no lazy-loading delay
            quality={85} // ✅ Optimized compression
          />

          {/* ✅ Thumbnails - Keep lazy-loading */}
          {product.images && product.images.length > 1 && (
            <div className={styles.thumbnails}>
              {product.images.map((img, index) => (
                <Image
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  width={50}
                  height={50}
                  className={styles.thumbnail}
                  loading="lazy" // ✅ Thumbnails can still load lazily
                  onClick={() => setSelectedImage(img)}
                />
              ))}
            </div>
          )}
        </div>

        {/* ✅ Product Details */}
        <div className={styles.details}>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.price}>{product.price}</p>
          <p className={styles.description}>{product.description}</p>

          {/* ✅ WhatsApp Button (with icon) */}
          <div className={styles.buttonWrapper}>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappButton}
            >
              <FaWhatsapp className={styles.whatsappIcon} />
              Ask Price on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
