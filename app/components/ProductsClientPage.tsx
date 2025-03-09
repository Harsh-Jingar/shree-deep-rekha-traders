"use client";
import { useState } from "react";
import ProductsCard from "app/components/ProductsCard";
import PreviewProduct from "app/components/PreviewProduct";
import styles from "app/styles/components/Products.module.css";

interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  price: string;
  description: string;
}

export default function ProductsClientPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <section className={styles.productsSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Explore Our Products</h2>
        <ProductsCard onProductClick={setSelectedProduct} />
        {selectedProduct && (
          <PreviewProduct product={selectedProduct} onClose={() => setSelectedProduct(null)} />
        )}
      </div>
    </section>
  );
}
