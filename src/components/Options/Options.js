import React from 'react';
import styled from 'styled-components';

const OptionsBase = styled.div`
  text-align: center;
`;

const Options = ({ children }) => {
  return (
    <OptionsBase>
      <h2>Options</h2>
      {children}
    </OptionsBase>
  );
};

export default Options;
