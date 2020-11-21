import React from 'react';
import { GitHub, Twitter } from 'react-feather';
import styled from 'styled-components';
import Icon from '../Icon/Icon';

const IconsBase = styled.div`
  padding-top: 1rem;
`;

const Icons = () => {
  return (
    <IconsBase>
      <Icon
        onClick={() =>
          window.open(
            'https://github.com/dhanushkac/react-terminal-command',
            '_blank'
          )
        }
      >
        <GitHub color="black" size={'20px'} />
      </Icon>
      <Icon
        onClick={() => window.open('https://twitter.com/_dhanushkac', '_blank')}
      >
        <Twitter color="black" size={'20px'} />
      </Icon>
    </IconsBase>
  );
};

export default Icons;
