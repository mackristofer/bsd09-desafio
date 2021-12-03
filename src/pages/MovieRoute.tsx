
import PrivateRoute from 'components/PrivateRoute';
import Home from 'pages/Home';
import Movie from 'pages/Movie';
import MovieDetails from 'pages/MovieDetails';
import { Switch, Route, Router } from 'react-router-dom';
import history from 'utils/history';

const MovieRoute = () => (
    <Switch>
    <Route path="/movies" exact>
      <Movie />
    </Route>
    <Route path="/movies/:movieId">
      <MovieDetails />
    </Route>
  </Switch>
)
export default MovieRoute;