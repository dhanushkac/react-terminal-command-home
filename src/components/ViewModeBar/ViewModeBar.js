import React from 'react';
import Switch from 'react-switch';
import SubTitle from '../SubTitle/SubTitle';

const ViewModeBar = ({ setDark, isDark }) => {
  return (
    <div>
      <SubTitle>Dark/Light Mode</SubTitle>
      <Switch
        onChange={() => setDark(!isDark)}
        checked={isDark}
        checkedIcon={false}
        uncheckedIcon={false}
        onColor={'#34aeeb'}
      />
    </div>
  );
};

export default ViewModeBar;
