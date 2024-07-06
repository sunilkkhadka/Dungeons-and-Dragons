import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as view from './app.view';

function NotFound() {
  return <h1>Page Not Found</h1>;
}

function AppRoute() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={view.Home} />
        <Route exact path="*" component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default AppRoute;
