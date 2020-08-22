import React from 'react';
import { Route, Switch } from 'react-router-dom';

import SearchPage from './../pages/SearchPage';
import WeatherDetailPage from './../pages/WeatherDetailPage';
import NotFound from './../components/NotFound';

const Routes = props => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SearchPage} />
        <Route exact path="/weather/:woeid" component={WeatherDetailPage} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default Routes;
