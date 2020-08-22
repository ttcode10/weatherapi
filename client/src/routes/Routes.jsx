import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Search from '../pages/Search';
import WeatherDetails from '../pages/WeatherDetails';
// import NotFound from '../pages/NotFound';

const Routes = props => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Search} />
        <Route exact path="/weather/:woeid" component={WeatherDetails} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </>
  );
}

export default Routes;
