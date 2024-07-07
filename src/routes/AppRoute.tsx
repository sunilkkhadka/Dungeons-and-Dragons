import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as view from './app.view';
import Header from '../components/Header';
import Footer from '../components/Footer';

function NotFound() {
  return <h1>Page Not Found</h1>;
}

function Favourite() {
  return <h1>Favourite Here</h1>;
}

function AppRoute() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={view.Home} />
        <Route exact path="/spell/:index" component={view.Spell} />
        <Route exact path="/favourtie" component={Favourite} />
        <Route exact path="*" component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoute;
