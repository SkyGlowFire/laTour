import { FC } from 'react';
import styled, { keyframes } from 'styled-components';
import { motion, Variants } from 'framer-motion';

const StyledNav = styled(motion.div)`
  display: flex;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1001;
`;

const NavLink = styled(motion.a)`
  display: inline-block;
  padding: 0.4rem 0.8rem;
  color: #fff;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.2s linear;
  &:hover {
    background-color: rgba(255, 255, 255, 0.9);
    color: rgba(0, 0, 0, 0.8);
  }
`;

const links = ['About', 'Accomodations', 'Offers', 'Contacts'];

const variants: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
};

const Navbar: FC = () => {
  return (
    <StyledNav
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.3, delayChildren: 3.6 }}
    >
      {links.map((link) => (
        <NavLink href={`#${link}`} variants={variants}>
          {link}
        </NavLink>
      ))}
    </StyledNav>
  );
};

export default Navbar;
