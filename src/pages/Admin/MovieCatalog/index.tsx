
import { Link } from 'react-router-dom';

import './styles.css';


const MovieCatalog = () => {  
  return (
    <>
      <div className="home-container">
      <div className="home-title">
        <h1>Tela listagem de filmes</h1>
      </div>

      
        <div className="home-item">
        <Link to="/movies/1">
          <p>
            Acessar /movies/1
          </p>
          </Link>
        </div>
        <div className="home-item">
        <Link to="/movies/2">
          <p>
            Acessar /movies/2
          </p>
          </Link>
        </div>
      
    </div>
    </>
  );
};

export default MovieCatalog;
