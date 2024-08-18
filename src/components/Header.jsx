'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaShoppingCart, FaHeart, FaUserPlus } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import Logo from "../assets/logo2.png";
import styles from './Header.module.css';

export default function Header() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    const searchURL = `/search?query=${encodeURIComponent(searchQuery)}`;
    router.push(searchURL);
  };

  return (
    <header>
      <div className={styles.bgWhite}>
        <div className={`${styles.container} ${styles.py4}`}>
          <div className={`${styles.flex} ${styles.justifyEnd} ${styles.itemsCenter}`}>
            <div className={styles.flexItemsCenter}>
              <ul className={`${styles.flex} ${styles.spaceX4}`}>
                <li>
                  <Link href="/shop/Login" className={styles.navLink}>
                    Login
                  </Link>
                </li>
                <li>
                  <Link href="/shop/contato" className={styles.navLink}>
                    Contato
                  </Link>
                </li>
                <li>
                  <Link href="/shop/patrocinio" className={styles.navLink}>
                    Meus pedidos!
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bgBlack}>
        <div className={`${styles.container} ${styles.py4}`}>
          <div className={`${styles.flex} ${styles.itemsCenter}`}>
            <div className={styles.mtNegative10}>
              <Image src={Logo} alt="Logo do Empresa" width={200} height={100} />
            </div>
            <nav className={`${styles.wFull} ${styles.navbar}`}>
              <ul className={`${styles.flex} ${styles.spaceX10}`}>
                <li>
                  <Link href="/" className={styles.navbarLink}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/shop/feminino" className={styles.navbarLink}>
                    Feminino
                  </Link>
                </li>
                <li className={styles.relative}>
                  <Link href="/shop/masculino" className={styles.navbarLink}>
                    Masculino
                    <i className={`${styles.icon} ${styles.ml1}`}></i>
                  </Link>
                </li>
                <li>
                  <Link href="/shop/esportes" className={styles.navbarLink}>
                    Esporte
                  </Link>
                </li>
                <li>
                  <Link href="/shop/beleza" className={styles.navbarLink}>
                    Beleza
                    <i className={`${styles.icon} ${styles.ml1}`}></i>
                  </Link>
                </li>
              </ul>
              <form onSubmit={handleSearch} className={styles.searchForm}>
                <span className={styles.iconLarge}>
                  <i className="ri-search-line"></i>
                </span>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Procure por seu produto"
                  className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}>
                  Procure
                </button>
              </form>
              <div className={`${styles.flex} ${styles.spaceX4} ${styles.divnav}`}>
                <Link href="/shop/cadastro">
                  <FaUserPlus className={styles.iconWhite} />
                </Link>
                <Link href="/shop/favoritos">
                  <FaHeart className={styles.iconWhite} />
                </Link>
                <Link href="/cart">
                  <FaShoppingCart className={styles.iconWhite} />
                </Link>
              </div>
            </nav>
            <div className={styles.freeShipping}>
              <p className={styles.freeShippingText}>
                Free Shipping on Orders Over $200
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
