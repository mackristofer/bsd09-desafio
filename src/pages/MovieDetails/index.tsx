import Evaluation from 'components/Evaluation';
import Comment from 'components/Comment';
import { useParams } from 'react-router-dom';
import './styles.css';
import { hasAnyRoles } from 'utils/auth';

type UrlParams = {
  movieId: string;
};

const MovieDetails = () => {
  const { movieId } = useParams<UrlParams>();

  return (
    <div className="movie-details-container">
      <h1>Tela detalhes do filmes id: {movieId}</h1>
      {hasAnyRoles(['ROLE_MEMBER']) && <Evaluation movieId={movieId} />}
      <div className="movie-details-card">
        <Comment movieId={movieId} />
      </div>
    </div>
  );
};

export default MovieDetails;
