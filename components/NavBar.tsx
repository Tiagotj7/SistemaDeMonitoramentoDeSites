'use client';
import React from 'react';

export const Main = () => {
  return (
   
    <div className="navbar-container">
        <nav className="navbar">
            <a href="/" className="navbar-logo">MyApp</a>
            <ul className="navbar-links">
                <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </div>

  );
};