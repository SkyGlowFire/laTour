import { FC } from 'react';
import styled from 'styled-components';
import Spinner from 'react-loader-spinner';

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #fffffff6;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loader: FC = () => {
  return (
    <Overlay>
      <Spinner
        type="Bars"
        color="rgba(78, 129, 231, 0.678)"
        width={60}
        height={60}
      />
    </Overlay>
  );
};

export default Loader;
