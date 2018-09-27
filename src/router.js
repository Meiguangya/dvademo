import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Order from './routes/Orders';
import Order2 from './routes/Orders2';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/order" exact component={Order} />
        <Route path="/order2" exact component={Order2} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
