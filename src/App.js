import { ReactTerminalCommand, CommandColor } from 'react-terminal-command';
import { useState } from 'react';
import styled from 'styled-components';

import 'react-terminal-command/dist/index.css';

import Features from './components/Features/Features';
import Credits from './components/Credits/Credits';
import ColorBar from './components/ColorBar/ColorBar';
import ViewModeBar from './components/ViewModeBar/ViewModeBar';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Options from './components/Options/Options';
import Icons from './components/Icons/Icons';
import Container from './components/Container/Container';
import UpperContainer from './components/UpperContainer/UpperContainer';
import Hero from './components/Hero/Hero';
import HeroContent from './components/HeroContent/HeroContent';

const AppBase = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: 'Montserrat', sans-serif;
`;

function App() {
  const [color, setColor] = useState(CommandColor.RED);
  const [isDark, setDark] = useState(false);

  return (
    <AppBase>
      <Hero>
        <HeroContent>
          <UpperContainer>
            <Icons />
            <Header />
          </UpperContainer>
          <Container>
            <Options>
              <ColorBar setColor={setColor} color={color} />
              <ViewModeBar isDark={isDark} setDark={setDark} />
            </Options>
            <ReactTerminalCommand
              command="yarn install react-terminal-command"
              color={color}
              withDark={isDark}
            />
          </Container>
        </HeroContent>
      </Hero>
      <Footer>
        <Features />
        <Credits />
      </Footer>
    </AppBase>
  );
}

export default App;
