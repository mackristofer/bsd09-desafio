import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoute';
import Home from 'pages/Home';
import Movie from 'pages/Movie';
import MovieDetails from 'pages/MovieDetails';
import MovieRoute from 'pages/MovieRoute';
import { Switch, Route, Router } from 'react-router-dom';
import history from 'utils/history';

const Routes = () => (
  // Solucao 01: Com Route
  // Positivo..: Rotas Funcionam Normalmente
  // Negativo..: Não Bloqueias Chamadas Diretas na URL pois Nao Utiliza o PrivateRoute

  // <Router history={history}>
  //   <Navbar />
  //   <Switch>
  //     <Route path="/" exact>
  //       <Home />
  //     </Route>
  //     <Route path="/movies" exact>
  //       <Movie />
  //     </Route>
  //     <Route path="/movies/:movieId">
  //       <MovieDetails />
  //     </Route>
  //   </Switch>
  // </Router>

  // Solucao 02: Com PrivateRoute
  // Positivo..: Rota Movies Funciona, Bloqueia Chamadas Diretas
  // Negativo..: Não Funciona A Rota para o MovieDetails, não consigo recuperar o :movieId
  // dentro do PrivateRoute

  <Router history={history}>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <PrivateRoute path="/movies">
        <MovieRoute />
      </PrivateRoute>
    </Switch>
  </Router>
);

export default Routes;
