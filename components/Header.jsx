import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  // Sticky Header
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  // Overlay Menu
  const [isMenuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={
          scrollPosition > 0
            ? `${styles.header} ${styles.sticky}`
            : `${styles.header}`
        }
      >
        <div className={styles.logo}>
          <Link href="/" className={styles.mainMenuLink}>
            <h1>LVBLIO</h1>
          </Link>
        </div>
        <span id={styles.profile} className="material-symbols-outlined">
          account_circle
        </span>
        <span
          id={styles.menu}
          className="material-symbols-outlined"
          onClick={() => setMenuOpen(true)}
        >
          menu
        </span>
        <div className={styles.mainMenu}>
          <ul>
            <li>
              <Link href="/" className={styles.mainMenuLink}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/french" className={styles.mainMenuLink}>
                French
              </Link>
            </li>
            <li>
              <Link href="/german" className={styles.mainMenuLink}>
                German
              </Link>
            </li>
            <li>
              <Link href="/russian" className={styles.mainMenuLink}>
                Russian
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.mainMenuLink}>
                About
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <div
        className={
          isMenuOpen
            ? `${styles.overlay} ${styles.overlayActive}`
            : `${styles.overlay}`
        }
      >
        <a className={styles.close} onClick={() => setMenuOpen(false)}>
          &times;
        </a>
        <div className={styles.overlayContent}>
          <ul className={styles.menuList}>
            <li>
              <Link href="/" className={styles.menuLink}>
                <span className="material-symbols-outlined">home</span>
              </Link>
            </li>
            <li>
              <Link href="/french" className={styles.menuLink}>
                <span className="material-symbols-outlined">airwave</span>
              </Link>
            </li>
            <li>
              <Link href="/german" className={styles.menuLink}>
                <span className="material-symbols-outlined">cloud</span>
              </Link>
            </li>
            <li>
              <Link href="/russian" className={styles.menuLink}>
                <span className="material-symbols-outlined">ac_unit</span>
              </Link>
            </li>
            <li>
              <Link href="/" className={styles.menuLink}>
                <span className="material-symbols-outlined">help</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
