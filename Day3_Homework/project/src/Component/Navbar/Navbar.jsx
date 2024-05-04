import React, { useState } from 'react';
import styles from '../Navbar/Navbar.module.css';

function Navbar() {
  const [selectedItem, setSelectedItem] = useState('Home');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <ul className={styles.navbar}>
        <li className={selectedItem === 'Home' ? styles.selected : ''} onClick={() => handleItemClick('Home')}>Home</li>
        <li className={selectedItem === 'About' ? styles.selected : ''} onClick={() => handleItemClick('About')}>About</li>
        <li className={selectedItem === 'Services' ? styles.selected : ''} onClick={() => handleItemClick('Services')}>Services</li>
        <li className={selectedItem === 'FAQ' ? styles.selected : ''} onClick={() => handleItemClick('FAQ')}>FAQ</li>
        <li className={selectedItem === 'Contact' ? styles.selected : ''} onClick={() => handleItemClick('Contact')}>Contact</li>
      </ul>
    </div>
  );
}

export default Navbar;
