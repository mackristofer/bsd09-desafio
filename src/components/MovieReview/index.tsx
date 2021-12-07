import ResultCard from 'components/ResultCard';

import './styles.css';

type Props ={
  text: string;
  name: string;
}

const MoveiReview = ({text, name } : Props) => {
  return (
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
              <button type="submit" className="btn btn-primary review-button">
              SALVAR AVALIAÇÃO
              </button>
            </div>
          </form>
        </div>
        <>
          <div className="details-card">
            <div className="container-details">
              <ResultCard username={name}
               description={text} />
            </div>
            <div className="container-details">
              <ResultCard username="Mirian Souza: "
               description="Lorem ipsum dolor sit amet consectetur adipisicing elit Lorem ipsum dolor sit amet consectetur adipisicing elit " />
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default MoveiReview;
