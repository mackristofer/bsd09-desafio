
import { Switch, Route } from 'react-router-dom';
import MovieCatalog from './MovieCatalog';
import MoviesDetails from './MoviesDetails';

const MovieRoute = () => (
    <Switch>
    <Route path="/movies" exact>
      <MovieCatalog />
    </Route>
    <Route path="/movies/:movieId">
      <MoviesDetails />
    </Route>
  </Switch>
)
export default MovieRoute;
