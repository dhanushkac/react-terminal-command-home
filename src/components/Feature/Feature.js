import React from 'react';
import styled from 'styled-components';

const FeatureBase = styled.div`
  background-color: #1d1d1d;
  padding: 1rem;
  border-radius: 0.5rem;
  display: inline-block;
  color: white;
  font-weight: 500;
  margin: 1rem;
`;

const Feature = ({ children }) => {
  return <FeatureBase>{children}</FeatureBase>;
};

export default Feature;
