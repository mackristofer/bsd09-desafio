
import Movie from 'pages/Movie';
import MovieDetails from 'pages/MovieDetails';
import { Switch, Route } from 'react-router-dom';

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