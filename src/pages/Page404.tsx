import React from 'react';
import { motion } from 'framer-motion';
import globalContainerVariants from 'src/utils/globalContainerVariants';

import styles from '../assets/styles/pages/page404.module.scss';
import ParrotIllustration from '../assets/img/svg/parrot.svg';

function Page404() {
  return (
    <motion.div
      variants={globalContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className={styles.pageContainer}
    >
      <h1>404 - Não Encontrado</h1>
      <h2>O que você procura não está aqui.</h2>
      <h2>(Ou não foi implementado ainda)</h2>
      <img src={ParrotIllustration} alt="Parrot" />
    </motion.div>
  );
}

export default Page404;
