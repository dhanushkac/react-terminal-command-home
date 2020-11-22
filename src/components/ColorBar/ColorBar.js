import React from 'react';
import styled from 'styled-components';
import SubTitle from '../SubTitle/SubTitle';
import { CompactPicker } from 'react-color';

const ColorBarBase = styled.div`
  display: flex;
  justify-content: center;
`;

const ColorBar = ({ setColor, color }) => {
  return (
    <div>
      <SubTitle>Colors to choose from</SubTitle>
      <ColorBarBase>
        <CompactPicker
          color={{ hex: color }}
          onChange={(_color) => setColor(_color.hex)}
        />
      </ColorBarBase>
    </div>
  );
};

export default ColorBar;
