
import { ReactComponent as StarIcon } from 'assets/images/star.svg';

import './styles.css';

type Props = {
    username: string;
  description: string;
};

const ResultCard = ({ username, description }: Props) => {
  return (
      <>
      <div className="result-container-info-user">
        <StarIcon />
        <h3 className="result-user">{username}</h3>        
      </div>
      <div className="result-container-info-review">
      <p className="result-description">{description}</p>        
      </div>
      
      </>
  );
};

export default ResultCard;