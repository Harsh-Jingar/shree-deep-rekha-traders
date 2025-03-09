"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import styles from "app/styles/components/ProductsCard.module.css";

interface Product {
  id: number;
  title: string;
  category: string;
  image: string;
  price: string;
  description: string;
}

interface Props {
  onProductClick: (product: Product) => void;
}

export default function ProductsCard({ onProductClick }: Props) {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search")?.toLowerCase() || "";

  // ✅ Fetch Products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  // ✅ Categorize Products
  const categories = [
    "Cleaning Products",
    "Kitchen Essentials",
    "Storage Solutions",
    "Kids & Baby",
  ];

  // ✅ Prioritize categories with search matches
  useEffect(() => {
    if (searchQuery) {
      const matchedCategories = new Set<string>();

      products.forEach((product) => {
        if (product.title.toLowerCase().includes(searchQuery)) {
          matchedCategories.add(product.category);
        }
      });

      const sortedCategories = [
        ...matchedCategories,
        ...categories.filter((c) => !matchedCategories.has(c)),
      ];
      setFilteredCategories(sortedCategories);
    } else {
      setFilteredCategories(categories);
    }
  }, [searchQuery, products]);

  return (
    <>
      {filteredCategories.map((category, catIndex) => {
        const categoryProducts = products.filter(
          (p) => p.category === category
        );

        // ✅ Prioritize searched products within each category
        const matchedProducts = categoryProducts.filter((product) =>
          product.title.toLowerCase().includes(searchQuery)
        );
        const remainingProducts = categoryProducts.filter(
          (product) => !matchedProducts.includes(product)
        );

        const sortedProducts = [...matchedProducts, ...remainingProducts];

        return (
          <div key={catIndex} className={styles.categoryBlock}>
            <h3 className={styles.categoryTitle}>{category}</h3>

            <div className={styles.productGrid}>
              {sortedProducts.length > 0 ? (
                sortedProducts.map((product) => (
                  <div
                    key={product.id}
                    className={styles.card}
                    onClick={() => onProductClick(product)}
                  >
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={1130}
                      height={1500}
                      className={styles.image}
                      priority={true} // ✅ Loads immediately for better LCP
                      loading="eager" // ✅ Prevents browser replacing with placeholders
                    />

                    <h4 className={styles.cardTitle}>{product.title}</h4>
                    <p className={styles.price}>{product.price}</p>
                  </div>
                ))
              ) : (
                <p className={styles.noResults}>
                  No products in this category.
                </p>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
}
