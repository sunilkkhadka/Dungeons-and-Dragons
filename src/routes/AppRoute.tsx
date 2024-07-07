import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as view from './app.view';
import AppLayout from '../layouts/AppLayout';
import Navigation from '../components/Navigation';

function NotFound() {
  return <h1>Page Not Found</h1>;
}

function Favourite() {
  return <h1>Favourite Here</h1>;
}

function AppRoute() {
  return (
    <BrowserRouter>
      <AppLayout.Header>
        <Navigation />
      </AppLayout.Header>
      <Switch>
        <Route exact path="/" component={view.Home} />
        <Route exact path="/spell/:index" component={view.Spell} />
        <Route exact path="/favourtie" component={Favourite} />
        <Route exact path="*" component={NotFound} />
      </Switch>
      <AppLayout.Footer>
        <p className="footer_text">&copy; Example website 2024</p>
      </AppLayout.Footer>
    </BrowserRouter>
  );
}

export default AppRoute;
