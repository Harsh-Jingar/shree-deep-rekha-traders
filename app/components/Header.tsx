"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image"; // ✅ Import Next Image component
import styles from "app/styles/components/Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [products, setProducts] = useState<{ title: string }[]>([]);
  const pathname = usePathname();

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

  const pages = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About Us", path: "/about" },
    { name: "Customer Reviews", path: "reviews" },
    { name: "FAQs", path: "faq" },
    { name: "Contact Us", path: "footer" },
  ];

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearch(query);

    const filteredResults = [
      ...products.filter((p) => p.title.toLowerCase().includes(query)).map((p) => p.title),
      ...pages.filter((p) => p.name.toLowerCase().includes(query)).map((p) => p.name),
    ];

    setSuggestions(filteredResults.length > 0 ? filteredResults : ["No results found"]);
  };

  const scrollToSection = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
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
        {/* ✅ Logo with Next Image */}
        <Link href="/" className={styles.logo}>
          <Image
            src="/images/logo.png"
            alt="Logo"
            width={60}
            height={60}
            className={styles.logoImage}
            priority // ✅ Loads faster on first paint
          />
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

        {/* ✅ Hamburger Menu */}
        <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        {/* ✅ Navigation Links */}
        <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
          {pages.map((item, index) => (
            <li key={index}>
              {item.path.startsWith("/") ? (
                <Link href={item.path} onClick={() => setMenuOpen(false)}>
                  {item.name}
                </Link>
              ) : (
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
