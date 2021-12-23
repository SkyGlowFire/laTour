import { motion, useViewportScroll, Variants } from 'framer-motion';
import { FC, useRef, useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Logo from './Logo';
import Navbar from './Navbar';

const wrap = keyframes`
  to{
    clip-path: circle(400vh at 50% -365vh);
  }
`;

const resizeHeader = keyframes`
  to{
    height: 35vh;
  }
`;

const StyledHeader = styled.header<{ wrapped: boolean }>`
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(p) => (p.wrapped ? '35vh' : '100vh')}
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: ${(p) =>
    p.wrapped ? 'circle(400vh at 50% -365vh)' : 'circle(400vh at 50% -270vh)'};
`;

const StyledVideo = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  pointer-events: none;
`;

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [offsetY, setoffsetY] = useState<null | number>(null);

  useEffect(() => {
    setoffsetY(window.scrollY);
  }, []);

  const headerVariants: Variants = {
    from: {
      clipPath: 'circle(400vh at 50% -270vh)',
      height: '100vh',
    },
    to: {
      clipPath: 'circle(400vh at 50% -365vh)',
      height: '35vh',
      transition: {
        height: {
          delay: 2.4,
          duration: 0.7,
        },
        clipPath: {
          delay: 2.4,
          duration: 0.7,
        },
      },
    },
  };

  return offsetY !== null ? (
    <StyledHeader
      wrapped={offsetY > 0}
      id="Home"
      as={motion.header}
      initial="from"
      whileInView="to"
      viewport={{ once: true }}
      variants={offsetY === 0 ? headerVariants : undefined}
    >
      <Navbar wrapped={offsetY > 0} />
      <StyledVideo
        src="https://latour.s3.eu-north-1.amazonaws.com/video/header.mp4"
        autoPlay
        muted
        loop
      />
      <Logo wrapped={offsetY > 0} />
    </StyledHeader>
  ) : (
    <></>
  );
};

export default Header;
