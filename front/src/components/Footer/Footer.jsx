import React from 'react';

const Footer = ({ toggleTheme, theme }) => {
    return (
        <div id="footer">
            <span className="gh-mark"></span> <a href="https://github.com/suklaanen/2024-Q2-Leffis-Elokuvasivusto/">Github repositio</a><br/>
            <p>© OAMK Tietotekniikan opiskelija, 2024</p>
            <button onClick={toggleTheme}>Vaihda teemaa</button>
            <p>Tämä on {theme === 'light' ? 'vaalea' : 'tumma'} teema.</p>
        </div>
    );
};

export default Footer;