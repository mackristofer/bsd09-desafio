import { AxiosRequestConfig } from 'axios';
import ResultCard from 'components/ResultCard';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Movie } from 'type/movie';
import { hasAnyRoles } from 'util/auth';
import { requestBackend } from 'util/request';
import './styles.css';

type urlParams = {
  movieId: string;
};

const MoviesDetails = () => {
  const { movieId } = useParams<urlParams>();

 // const [isLoading, setIsLoading] = useState(false);
  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    //setIsLoading(true);
    const params: AxiosRequestConfig = {
      method: 'GET',
      url: '/movies/' + movieId,
      withCredentials: true,
    };
    requestBackend(params)
      .then((response) => {
        setMovie(response.data);
      })
      .finally(() => {
        //setIsLoading(false);
      });
  }, [movieId]);

  return (
    <>
      <div className="movie-details-container">
        <div className="base-card movie-details-card">
          <div className="row">
            <div className="col-xl-6">
              <div className="movie-img-container">
                <img src={movie?.imgUrl} alt={movie?.title}></img>
              </div>
              <div className="movie-title-container">
                <h1>{movie?.title} </h1>
              </div>
              <div className="movie-sub-title-container">
                <h4>{movie?.subTitle}</h4>
                <h6>Ano: {movie?.year}</h6>
              </div>
              <div className="movie-genre-container">
                {movie && <p> {movie?.genre.name}</p>}
              </div>
            </div>
            <div className="col-xl-6">
              <div className="movie-synopsis-container">
                <h2>Sinopse do filme:</h2>
                <h4>{movie?.synopsis}</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-12">
          {hasAnyRoles(['ROLE_MEMBER']) && (
            <>
              <div className="review-container">
                <div className="review-card">
                  <form>
                    <div className="form-container">
                      <input
                        type="text"
                        name="review"
                        className="review-input"
                        placeholder="Deixe sua avaliação aqui"
                      />
                      <button
                        type="submit"
                        className="btn btn-primary review-button"
                      >
                        SALVAR AVALIAÇÃO
                      </button>
                    </div>
                  </form>
                </div>
                <>
                  <div className="details-card">
                    <div className="container-details">
                      {movie && (
                        <ResultCard
                          username="{movie?.reviews.user.name}"
                          description=" teste ainda{movie?.review.text}"
                        />
                      )}
                    </div>
                    <div className="container-details">
                      <ResultCard
                        username="Mirian Souza: "
                        description="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit "
                      />
                    </div>
                  </div>
                </>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MoviesDetails;
