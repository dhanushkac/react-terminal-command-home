import React from 'react';
import styled from 'styled-components';
import Feature from '../Feature/Feature';

const FeatureBase = styled.div`
  width: 70%;
  margin: 0 auto;
  text-align: center;
  margin-top: 5rem;
`;

const Features = () => {
  return (
    <FeatureBase>
      <Feature>Switchable dark mode and light mode 🌞</Feature>
      <Feature>Command copy option 📃</Feature>
      <Feature>Customizable command color options 💅</Feature>
      <Feature>Container preferred width 📦</Feature>
      <Feature>Written in Typescript 💻</Feature>
      <Feature>Built with styled-components 🖌️</Feature>
    </FeatureBase>
  );
};

export default Features;
