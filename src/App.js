import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './components/Login';

export const App = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact strict component={Login} />
      </Switch>
    </div>
  </BrowserRouter>
);
