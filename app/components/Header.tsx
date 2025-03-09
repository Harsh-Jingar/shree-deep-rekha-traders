"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // ✅ Detects current page
import Link from "next/link";
import styles from "app/styles/components/Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [products, setProducts] = useState<{ title: string }[]>([]);
  const pathname = usePathname(); // ✅ Get current page URL

  // ✅ Fetch Products from API on Mount
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

  // ✅ Define menu links (dynamic)
  const pages = [
    { name: "Home", path: "/" }, // External Page
    { name: "Products", path: "/products" }, // External Page
    { name: "About Us", path: "/about" }, // External Page
    { name: "Customer Reviews", path: "reviews" }, // Internal Section
    { name: "FAQs", path: "faq" }, // Internal Section
    { name: "Contact Us", path: "footer" }, // Internal Section
  ];

  // ✅ Handle Search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    // ✅ Filter results (Products + Navigation Links)
    const filteredResults = [
      ...products.filter((p) => p.title.toLowerCase().includes(query)).map((p) => p.title),
      ...pages.filter((p) => p.name.toLowerCase().includes(query)).map((p) => p.name),
    ];

    setSuggestions(filteredResults.length > 0 ? filteredResults : ["No results found"]);
  };

  // ✅ Smooth scroll for internal links
  const scrollToSection = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    if (pathname !== "/") {
      // ✅ If on another page, redirect to home and pass section id
      window.location.href = `/#${id}`;
    } else {
      // ✅ Scroll smoothly if already on the home page
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
        setMenuOpen(false);
      }
    }
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        {/* ✅ Logo */}
        <Link href="/" className={styles.logo}>
          <img src="/images/logo.png" alt="Logo" />
          <h1>Shree Deep Rekha Traders</h1>
        </Link>

        {/* ✅ Search Bar */}
        <div className={styles.searchContainer}>
          <input
            type="text"
            className={styles.searchInput}
            placeholder="Search for Product..."
            value={search}
            onChange={handleSearch}
          />
          {search && (
            <ul className={styles.suggestions}>
              {suggestions.map((s, index) => (
                <li key={index}>
                  <Link href={`/products?search=${encodeURIComponent(s)}`} onClick={() => setSearch("")}>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* ✅ Mobile Menu Button */}
        <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* ✅ Navigation Menu */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          {pages.map((item, index) => (
            <li key={index}>
              {item.path.startsWith("/") ? (
                // ✅ External Pages (Products, About Us) use <Link>
                <Link href={item.path} onClick={() => setMenuOpen(false)}>
                  {item.name}
                </Link>
              ) : (
                // 🔹 Internal Sections use smooth scroll
                <a href={`#${item.path}`} onClick={(e) => scrollToSection(item.path, e)}>
                  {item.name}
                </a>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
