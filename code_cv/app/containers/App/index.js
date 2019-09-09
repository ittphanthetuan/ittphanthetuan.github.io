/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage';
import GlobalStyles from '../../global-styles';

const AppWrapper = styled.div`
  width: 210mm;
  min-height: 297mm;
  padding: 20mm;
  margin: 0 auto;
  background: white;

  border-left: 1px #D3D3D3 solid;
  border-right: 1px #D3D3D3 solid;
  // border-radius: 5px;
  // box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  
`;

export default function App() {
  return (
    <AppWrapper>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="Frontend Developer_Phan The Tuan"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <GlobalStyles />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/features" component={FeaturePage} />
        <Route path="" component={NotFoundPage} /> */}
      </Switch>
    </AppWrapper>
  );
}
