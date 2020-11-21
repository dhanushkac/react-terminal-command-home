import React from 'react';
import styled from 'styled-components';

const ColorSelector = ({ color, onClick, selected }) => {
  return (
    <ColorBox
      color={color}
      onClick={() => onClick()}
      selected={selected}
    ></ColorBox>
  );
};

const ColorBox = styled.div`
  background-color: ${(props) => props.color};
  width: 2rem;
  height: 2rem;
  border-radius: 2rem;
  margin-right: 0.75rem;
  border: ${({ selected }) =>
    selected ? '2px solid white' : '2px solid transparent'};
  cursor: pointer;
  transtion: all 0.3s;
`;

export default ColorSelector;
