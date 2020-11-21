import React from 'react';
import styled from 'styled-components';
import { GitHub } from 'react-feather';

const IconBase = styled.i`
  background: white;
  padding: 0.75rem;
  border-radius: 2rem;
  text-align: center;
  display: inline-flex;
  transition: all 0.3s;
  cursor: pointer;
  margin-right: 1rem;

  &:hover {
    background: #aaaaaa;
  }
`;

const Icon = ({ children }) => {
  return <IconBase>{children}</IconBase>;
};

export default Icon;
