import React from "react";
import Image from "next/image";
import styles from "app/styles/components/ProductsHome.module.css";

const categories = [
  {
    title: "Stay Cool & Organized This Summer",
    products: [
      {
        name: "Water Bottles for Fridges",
        discount: "Min. 50% Off",
        image: "/images/products/kitchen/water-bottle.jpg",
      },
      {
        name: "Stylish water Bottles",
        discount: "Min. 50% Off",
        image: "/images/products/kitchen/stylish-bottle.jpg",
      },
      {
        name: "Diamond Shaped Water Bottles",
        discount: "Min. 30% Off",
        image: "/images/products/kitchen/diamond-waterbottle.jpg",
      },
      {
        name: "Water Bottles for Kids",
        discount: "Min. 50% Off",
        image: "/images/products/kids&baby/water-bottle-kids.jpg",
      },
      {
        name: "Kids Sipper Water Bottles",
        discount: "Min. 50% Off",
        image: "/images/products/kids&baby/sipper-bottle.jpg",
      },
      {
        name: "Kids Designer Water Bottles",
        discount: "Min. 50% Off",
        image: "/images/products/kids&baby/printed-waterbottle.jpg",
      },
      {
        name: "Round Tiffin Boxes",
        discount: "Min. 50% Off",
        image: "/images/products/kitchen/round-storage.jpg",
      },
      {
        name: "Transperent Glass for Juice",
        discount: "Min. 50% Off",
        image: "/images/products/storage/transperent-glass.jpg",
      },
    ],
  },
  {
    title: "School & Office Essentials",
    products: [
      {
        name: "Dinner Bell Lunch Box",
        discount: "Min. 50% Off",
        image: "/images/products/kids&baby/dinner-bell.jpg",
      },
      {
        name: "Happy Meal Lunch Box",
        discount: "Min. 50% Off",
        image: "/images/products/kids&baby/happy-meal.jpg",
      },
      {
        name: "Lunch Time Lunch Box",
        discount: "Min. 50% Off",
        image: "/images/products/kids&baby/lunch-time.jpg",
      },
      {
        name: "Lunch Box for Kids",
        discount: "Min. 50% Off",
        image: "/images/products/kids&baby/lunch-box.jpg",
      },
      {
        name: "Tiffin Box",
        discount: "Min. 50% Off",
        image: "/images/products/kitchen/tiffin-box.jpg",
      },
      
    ],
  },
];

const gridCategories = [
  {
    title: "Ultimate Storage Solutions",
    products: [
      {
        name: "2Kg Printed Grain Container",
        discount: "Min. 40% Off",
        image: "/images/products/storage/container-2kg.jpg",
      },
      {
        name: "5Kg Grain Container",
        discount: "Top Picks",
        image: "/images/products/storage/container-5kg.jpg",
      },
      {
        name: "1Kg Spices Container",
        discount: "Special Offer",
        image: "/images/products/storage/container-1kg.jpg",
      },
      {
        name: "3 Layer Storage Box",
        discount: "Special Offer",
        image: "/images/products/storage/stack.jpg",
      },
    ],
  },
  {
    title: "Cleaning Essentials",
    products: [
      {
        name: "Bucket Mop Set",
        discount: "Min. 40% Off",
        image: "/images/products/cleaning/bucket-mop.jpeg",
      },
      {
        name: "Floor Cleaning Mop",
        discount: "Top Picks",
        image: "/images/products/cleaning/bottle-mop.jpg",
      },
      {
        name: "Water Buckets",
        discount: "Special Offer",
        image: "/images/products/cleaning/bucket3.jpg",
      },
      {
        name: "Kharata Broom",
        discount: "Special Offer",
        image: "/images/products/cleaning/nath-kharata.jpg",
      },
    ],
  },
  {
    title: "Wedding & Gifting Specials",
    products: [
      {
        name: "Sqaure Sweet Box",
        discount: "Min. 40% Off",
        image: "/images/products/kitchen/square-conatiner.jpg",
      },
      {
        name: "Round Sweet Box",
        discount: "Top Picks",
        image: "/images/products/kitchen/bowl.jpg",
      },
      {
        name: "Mango Style Sweet Box",
        discount: "Special Offer",
        image: "/images/products/kitchen/mango-jar.jpg",
      },
      {
        name: "Snacks Tray Set",
        discount: "Special Offer",
        image: "/images/products/kitchen/snacks-tray-4.jpg",
      },
    ],
  },
];

const Products = () => {
  return (
    <div className={styles.container}>
      {/* Horizontal Slider Section */}
      {categories.map((category, index) => (
        <div key={index} className={styles.horizontalSliderBox}>
          <div className={styles.horizontalSliderContainer}>
            <h2 className={styles.title}>{category.title}</h2>
            <div className={styles.horizontalSlider}>
              {category.products.map((product, i) => (
                <a key={i} href="/products" className={styles.horizontalCard}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={150}
                      height={200}
                      priority // Loads faster if it's LCP
                      loading="eager" // Prevents lazy-loading placeholder issues
                      style={{ width: "auto", height: "auto" }} // Fixes aspect ratio issue
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.cardDetails}>
                    <p className={styles.name}>{product.name}</p>
                    <span className={styles.discount}>{product.discount}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      ))}

      {/* Grid Category Section */}
      <div className={styles.gridContainer}>
        {gridCategories.map((category, index) => (
          <div key={index} className={styles.gridCategory}>
            <h2 className={styles.title}>{category.title}</h2>
            <div className={styles.grid}>
              {category.products.map((product, i) => (
                <a key={i} href="/products" className={styles.gridCard}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={150}
                      height={200}
                      priority // Loads faster if it's LCP
                      loading="eager" // Prevents lazy-loading placeholder issues
                      style={{ width: "auto", height: "auto" }} // Fixes aspect ratio issue
                      className={styles.image}
                    />
                  </div>
                  <div className={styles.cardDetails}>
                    <p className={styles.name}>{product.name}</p>
                    <span className={styles.discount}>{product.discount}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
