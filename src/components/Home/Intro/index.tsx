import { motion, Variants } from 'framer-motion';
import { FC } from 'react';
import styled from 'styled-components';
import Container from '~/components/styled/Container';

const StyledIntro = styled.div`
  height: auto;
  overflow: hidden;
  @media ${(p) => p.theme.breakpoints.lg} {
    height: 470px;
    margin-bottom: 10px;
  }
`;

const Image = styled(motion.div)`
  background: url('/images/image1.jpg') center center no-repeat;
  height: 300px;
  width: 100%;
  background-size: cover;

  @media ${(p) => p.theme.breakpoints.lg} {
    width: 60%;
    float: right;
    shape-outside: polygon(0 0, 100% 0, 100% 100%, 30% 100%);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 100%);
    shape-margin: 10px;
    height: 100%;
  }
`;

const Content = styled.div`
  padding: 2rem;
  @media ${(p) => p.theme.breakpoints.lg} {
    padding: 1rem;
  }
`;

const contentVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.4,
      delayChildren: 0.3,
    },
  },
};

const imageVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 140,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const Intro: FC<{ offsetY: number | null }> = ({ offsetY }) => {
  return (
    <Container style={{ marginTop: '38vh' }}>
      <StyledIntro id="About">
        {offsetY !== null && (
          <motion.div
            style={{
              height: '100%',
            }}
            initial="hidden"
            animate="visible"
            transition={{ delayChildren: offsetY > 0 ? 0.3 : 2.1 }}
          >
            <Image variants={imageVariants} />
            <Content as={motion.div} variants={contentVariants}>
              <motion.h1 variants={textVariants}>
                Escape to a sunny, tropical paradise
              </motion.h1>
              <motion.h2 variants={textVariants}>
                Enjoy a perfect island getaway with Holiday Inn Resort Kandooma
                Maldives
              </motion.h2>
              <motion.div variants={textVariants}>
                <p>Welcome to Holiday Inn Resort Kandooma Maldives.</p>
                <br />
                <p>
                  Create unforgettable memories on our family resort in the
                  Maldives, located 40 minutes by speedboat from Velana
                  International Airport, Male. Our beachfront hotel offers 160
                  spacious and modern, Overwater, Beach or Garden villas, with
                  stunning views of the glistening Maldivian sea and the
                  unspoiled beach that surrounds our resort. Soak up the sun as
                  you partake in a range of activities, whether you’re looking
                  for adventure or relaxation; from surfing along the grand
                  waves to indulging in soothing spa treatments at the Kandooma
                  Spa by COMO Shambhala. Our little guests can play all day at
                  the Kandoo Kids Club while you explore the treasures of the
                  sea, assisted by our PADI certified 5-star Dive Centre. Feast
                  on scrumptious meals, be it international or local cuisine as
                  you dine with us.
                </p>
                <br />
                <p>
                  At Holiday Inn Resort Kandooma Maldives, we create a unique
                  experience that is memorable for everyone.
                </p>
              </motion.div>
            </Content>
          </motion.div>
        )}
      </StyledIntro>
    </Container>
  );
};

export default Intro;
