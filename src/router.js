import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Order from './routes/Orders';
import Order2 from './routes/Orders2';
import Test from './routes/Test';
import EventOrder from './routes/EventOrder';
import OtherRecord from './routes/OtherRecord';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/order" exact component={Order} />
        <Route path="/order2" exact component={Order2} />
        <Route path="/test" exact component={Test} />
        <Route path="/eventorder" exact component={EventOrder} />
        <Route path="/other/record" exact component={OtherRecord} />

      </Switch>
    </Router>
  );
}

export default RouterConfig;
