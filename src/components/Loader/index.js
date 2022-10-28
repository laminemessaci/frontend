import React from 'react';
import ReactLoading from 'react-loading';
import { LoaderContainer } from './index.styles.js';

function Loader({ type, color, width, height }) {
  return (
    <LoaderContainer>
      <ReactLoading type={type} color={color} width={width} height={height} />
    </LoaderContainer>
  );
}

export default Loader;
