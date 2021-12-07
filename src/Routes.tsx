import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoute';
import Auth from 'pages/Admin/Auth';

import MovieRoute from 'pages/Admin/MovieRoute';

import { Router, Route, Switch } from 'react-router-dom';
import history from 'util/history';

const Routes = () => (
  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Auth />
      </Route>
      <PrivateRoute path="/movies">
      <MovieRoute />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
