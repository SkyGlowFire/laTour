import styled from 'styled-components';

const Container = styled.div<{ maxWidth?: number }>`
  max-width: ${(p) => p.maxWidth || 1200}px;
  width: 100%;
  padding: 1rem 0;
  margin: 1rem auto;
  /* min-height: 100vh; */
`;

export default Container;
