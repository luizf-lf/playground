import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaMousePointer } from 'react-icons/fa';

import styles from '../assets/styles/components/sidebarMenu.module.scss';
import { motion } from 'framer-motion';

// array containing all the menu buttons
const menuItems = [
  {
    link: '/',
    icon: <FaHome />,
  },
  {
    link: '/clicker',
    icon: <FaMousePointer />,
  },
];

const sidebarVariants = {
  hidden: {
    x: -100,
  },
  visible: {
    x: 0,
    transition: {
      duration: 0.75,
      ease: 'easeInOut',
    },
  },
};

export default function SidebarMenu() {
  return (
    <motion.div
      variants={sidebarVariants}
      initial="hidden"
      animate="visible"
      className={styles.sidebarContainer}
    >
      {menuItems.map((item) => {
        return <Link to={item.link}>{item.icon}</Link>;
      })}
    </motion.div>
  );
}
