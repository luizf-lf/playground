import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import styles from '../assets/styles/sidebarMenu.module.scss';

// array containing all the menu buttons
const menuItems = [
  {
    link: '/',
    icon: <FaHome />,
  },
];

export default function SidebarMenu() {
  return (
    <div className={styles.sidebarContainer}>
      {menuItems.map((item) => {
        return <Link to={item.link}>{item.icon}</Link>;
      })}
    </div>
  );
}
