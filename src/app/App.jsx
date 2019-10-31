import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/store';

const App = () => {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        {/* <Route path="/" component={props => <LoginPage {...props} />} /> */}
        <div>Hello Fantasy!</div>
      </Switch>
    </ConnectedRouter>
  );
};

export default App;
