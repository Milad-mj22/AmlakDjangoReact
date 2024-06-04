import React, { useState } from 'react';
import './Header.css'; // Import CSS file

const Header = ({ children }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div style={{ direction: 'rtl' }}>
            <header className="header">
                <div className="logo">املاک مَل مُل</div>
                <nav className={`menu ${menuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><a href="/home">خانه</a></li>
                        <li><a href="/about">درباره ما</a></li>
                        <li><a href="/create-home">ایجاد خانه</a></li>
                    </ul>
                </nav>
                <div className="menu-toggle" onClick={toggleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>
            </header>

            <main>
                {children}
            </main>
            <footer>
                <p>&copy; 2024 شرکت ما</p>
            </footer>
        </div>
    );
};

export default Header;
