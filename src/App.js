import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled, {ThemeProvider} from 'styled-components';

import Home from './components/home';
import SignUp from './components/sign-up';
import THEME from './assets/theme';

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FAFAFA;  
  min-height: 100vh; 
  width: 100%;
  position: relative;
  z-index: 1 ;
`;

function App() {

  const [pack, setPack] = useState("basic");

  return (
    <Router>
    <ThemeProvider theme={THEME}>
      <AppStyled>
        <Switch>
          <Route path="/sign-up">
            <SignUp pack={pack}/>
          </Route>
          <Route path="/">
            <Home setPack={setPack}/>
          </Route>
        </Switch>
      </AppStyled>
    </ThemeProvider>
    </Router>
  );
}

export default App;
