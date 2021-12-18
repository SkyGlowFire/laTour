import styled from 'styled-components';
import { motion } from 'framer-motion';

interface FlexProps {
  align?: 'flex-start' | 'center' | 'flex-end' | 'stretch';
  justify?:
    | 'flex-start'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'flex-end';
  direction?: 'row' | 'column';
}

const Flex = styled(motion.div)<FlexProps>`
  display: flex;
  align-items: ${(p) => p.align || 'flex-start'};
  justify-content: ${(p) => p.justify || 'flex-start'};
  flex-direction: ${(p) => p.direction || 'row'};
`;

export default Flex;
