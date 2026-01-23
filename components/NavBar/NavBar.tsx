'use client';
import Link from 'next/link';
import styles from './NavBar.module.css';
export const NavBar = () => {
  return (
        <nav className={styles.navbar}>
            <Link href="/">MyApp</Link>
            <menu>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </menu>
        </nav>
  );
};

export default NavBar;
