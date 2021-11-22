import React from 'react';
import {HashRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import Tags from 'pages/Tags';
import Money from 'pages/Money';
import Statistics from 'pages/Statistics';
import NoMatch from 'pages/NoMatch';
import styled from 'styled-components';
import {Tag} from 'pages/Tag';

const AppWrapper = styled.div`
  color: #333;
  max-width: 320px;
  margin: 0 auto;
`;

function App() {
  return (
    <AppWrapper>
      <Router>
        <Switch>
          <Route exact path="/tags"><Tags/></Route>
          <Route exact path="/tags/:id"><Tag/></Route>
          <Route exact path="/money"><Money/></Route>
          <Route exact path="/statistics"><Statistics/></Route>
          <Redirect exact from="/" to="/money"/>
          <Route path="*">
            <NoMatch/>
          </Route>
        </Switch>
      </Router>
    </AppWrapper>
  );
}

export default App;

