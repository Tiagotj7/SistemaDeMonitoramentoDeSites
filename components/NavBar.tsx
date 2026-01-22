'use client';
import React from 'react';
import Link from 'next/link';

export const NavBar = () => {
  return (
        <nav className="navbar">
            <Link href="/" className="navbar-logo">MyApp</Link>
            <menu className="navbar-links">
                <li><Link href="/about">About</Link></li>
                <li><Link href="/services">Services</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </menu>
        </nav>
  );
};

export default NavBar;