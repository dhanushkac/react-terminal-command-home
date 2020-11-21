import React from 'react';
import styled from 'styled-components';

const CreditsBase = styled.div`
  text-align: center;
  padding-bottom: 1rem;
`;

const Link = styled.a`
  text-decoration: none;
  font-weight: 500;
  color: mediumpurple;

  &:hover {
    color: rebeccapurple;
  }
`;

const Credits = () => {
  return (
    <CreditsBase>
      Developed with ❤️ by{' '}
      <Link href="https://dhanushka.dev/" target="_blank" rel="noreferrer">
        dhanushka
      </Link>
    </CreditsBase>
  );
};

export default Credits;
