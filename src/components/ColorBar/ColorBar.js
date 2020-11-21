import React from 'react';
import { CommandColor } from 'react-terminal-command';
import styled from 'styled-components';
import ColorSelector from '../ColorSelector/ColorSelector';
import SubTitle from '../SubTitle/SubTitle';

const colors = [
  { color: CommandColor.RED, code: '#e43500' },
  { color: CommandColor.BLUE, code: '#0061e0' },
  { color: CommandColor.GREEN, code: '#1ca51c' },
  { color: CommandColor.YELLOW, code: '#ffa600' },
  { color: CommandColor.PURPLE, code: '#b137f8' }
];

const ColorBarBase = styled.div`
  display: flex;
  justify-content: center;
`;

const ColorBar = ({ setColor, color }) => {
  return (
    <div>
      <SubTitle>Colors to choose from</SubTitle>
      <ColorBarBase>
        {colors.map((_color, index) => (
          <ColorSelector
            key={index}
            color={_color.code}
            onClick={() => setColor(_color.color)}
            selected={_color.color === color}
          />
        ))}
      </ColorBarBase>
    </div>
  );
};

export default ColorBar;
