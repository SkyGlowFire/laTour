import { motion, Variants } from 'framer-motion';
import { FC } from 'react';
import Footer from '../Footer';

const variants: Variants = {
  hidden: {
    // x: '100vw',
    opacity: 0,
  },
  visible: {
    opacity: 1,
    // x: 0,
    transition: {
      when: 'beforeChildren',
      duration: 0.4,
    },
  },
  exit: {
    opacity: 0,
  },
};

const Layout: FC = ({ children }) => {
  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {children}
      <Footer />
    </motion.div>
  );
};

export default Layout;
