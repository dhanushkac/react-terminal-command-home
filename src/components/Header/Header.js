import React from 'react';
import styled from 'styled-components';

const HeaderBase = styled.div`
  position: relative;
  top: 30px;
`;
const Header = () => {
  return (
    <HeaderBase>
      <h1>React Terminal Command</h1>
      <div>A terminal command viewer in React 🚀</div>
    </HeaderBase>
  );
};

export default Header;
