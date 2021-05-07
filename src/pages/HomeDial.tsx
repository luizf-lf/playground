import { motion } from 'framer-motion';

import globalContainerVariants from '../utils/globalContainerVariants';

import styles from '../assets/styles/homeDial.module.scss';

function HomeDial() {
  return (
    <motion.div
      variants={globalContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.homeDialContainer}
    >
      <h1>Bem vindo</h1>
      <div className={styles.spotlightContainer}>
        <div></div>
        <div></div>
      </div>
      <h2>Apps disponíveis:</h2>
      <div className={styles.appsMenuContainer}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </motion.div>
  );
}

export default HomeDial;