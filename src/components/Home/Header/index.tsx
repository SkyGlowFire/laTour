import { FC, useEffect, useState } from 'react';
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
  z-index: 1000;
  top: 0;
  left: 0;
  width: 100%;
  height: ${(p) => (p.wrapped ? '35vh' : '100vh')};
  overflow: visible;
  display: flex;
  align-items: center;
  justify-content: center;
  clip-path: ${(p) =>
    p.wrapped ? 'circle(400vh at 50% -365vh)' : 'circle(400vh at 50% -270vh)'};
  animation: ${wrap} 0.5s linear 2.1s 1 forwards,
    ${resizeHeader} 0.5s linear 2.2s 1 forwards;
  animation-play-state: ${(p) => (p.wrapped ? 'paused' : 'running')};
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

const Header: FC<{ offsetY: number | null }> = ({ offsetY }) => {
  return (
    <StyledHeader wrapped={Boolean(offsetY)} id="Home">
      <Navbar />
      <StyledVideo src="/video/header.mp4" autoPlay muted loop />
      <Logo wrapped={Boolean(offsetY)} />
    </StyledHeader>
  );
};

export default Header;
