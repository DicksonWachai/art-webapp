import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

    useEffect(() => {
        document.body.className = theme + '-mode';
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <button onClick={toggleTheme} id="theme-toggle">
            <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
        </button>
    );
};

export default ThemeToggle;