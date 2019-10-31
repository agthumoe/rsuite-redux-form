import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/store';
import Test from '../pages/Test';

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" component={props => <Test {...props} />} />
        <div>Hello Fantasy!</div>
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
