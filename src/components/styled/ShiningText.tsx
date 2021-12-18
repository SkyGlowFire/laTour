import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const shine = keyframes`
   	from {
		background-position: -4000px;
	}
	to {
		background-position: 4000px;
	}
`;

export const ShiningText = styled(motion.h1)`
  font-weight: 800;
  animation: ${shine} 10s linear infinite;
  background: linear-gradient(120deg, transparent 30%, #fff, transparent 70%);
  background-repeat: no-repeat;
  -webkit-background-size: 400px;
  background-size: 400px;
  background-clip: text;
  -webkit-background-clip: text;
  color: rgba(186, 198, 245, 0.5);
`;
