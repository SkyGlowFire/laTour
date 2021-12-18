import { motion, Variants } from 'framer-motion';
import { CSSProperties, FC } from 'react';

const main: Variants = {
  animate: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const letterVariants: Variants = {
  initial: { y: -40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1,
    },
  },
};

interface Props {
  text: string;
  id?: string;
  style?: CSSProperties;
}

const AnimatedLetters: FC<Props> = ({ text, id, ...props }) => {
  return (
    <motion.h4
      {...props}
      id={id}
      variants={main}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {text.split('').map((letter) => (
        <motion.span
          style={{
            position: 'relative',
            display: 'inline-block',
            minWidth: '1rem',
          }}
          variants={letterVariants}
        >
          {letter}
        </motion.span>
      ))}
    </motion.h4>
  );
};

export default AnimatedLetters;
