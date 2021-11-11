import React from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import styled from 'styled-components';
import Nav from 'components/Nav';
import Layout from 'components/Layout';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/tags"> <Tags/> </Route>
        <Route path="/money"><Money/></Route>
        <Route path="/statistics"><Statistics/></Route>
        <Redirect exact from="/" to="/money"/>
        <Route path="*">
          <NoMatch/>
        </Route>
      </Switch>
    </Router>
  );
}

function NoMatch() {
  return (
    <div>Wrong Url input</div>
  );
}

function Statistics() {
  return (
    <Layout>
      <h2>Statistics</h2>
    </Layout>
  );
}

function Tags() {
  return (
    <Layout>
      <h2>标签</h2>
    </Layout>
  );
}

function Money() {
  return (
    <Layout>
      <h2>支出</h2>
    </Layout>
  );
}

export default App;

