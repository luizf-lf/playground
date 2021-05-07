import { motion } from 'framer-motion';
import React from 'react';
import globalContainerVariants from 'src/utils/globalContainerVariants';

function Clicker() {
  return (
    <motion.div
      variants={globalContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      Clicker
    </motion.div>
  );
}

export default Clicker;
