import { motion, Variants } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components';
import Container from '~/components/styled/Container';

const StyledVideo = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
  pointer-events: none;
`;

const Content = styled.div`
  position: absolute;
  top: 15%;
  right: 5%;
  width: 45%;
  overflow: hidden;

  & h1 {
    color: #fff;
    font-size: 2rem;
    line-height: 2rem;
    margin-bottom: 1rem;
    letter-spacing: 0.2rem;
    @media ${(p) => p.theme.breakpoints.md} {
      font-size: 3rem;
      margin-bottom: 2rem;
      line-height: 3rem;
    }
  }
  & p {
    color: #fff;
    font-size: 1.4rem;
    line-height: 1.5rem;
    @media ${(p) => p.theme.breakpoints.md} {
      font-size: 2rem;
      line-height: 2rem;
    }
  }
`;

const mainVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

interface VideoBannerProps {
  video: string;
  title: string;
  text: string[];
}

const VideoBanner: FC<VideoBannerProps> = ({ video, title, text }) => {
  return (
    <Container
      style={{ height: '600px', position: 'relative' }}
      maxWidth={1300}
      as={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <StyledVideo src={video} autoPlay muted loop as={motion.video} />
      <Content variants={mainVariants} as={motion.div}>
        <motion.h1 variants={textVariants}>{title}</motion.h1>
        {text.map((item) => (
          <>
            <motion.p variants={textVariants}>{item}</motion.p>
            <br />
          </>
        ))}
      </Content>
    </Container>
  );
};

export default VideoBanner;
