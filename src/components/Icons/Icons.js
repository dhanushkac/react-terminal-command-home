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
      <Icon>
        <GitHub color="black" size={'20px'} />
      </Icon>
      <Icon>
        <Twitter color="black" size={'20px'} />
      </Icon>
    </IconsBase>
  );
};

export default Icons;
