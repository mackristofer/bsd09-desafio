import './styles.css';

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <>
      <div className="btn-normal-container">
        <button className="btn-normal bg-primary">
          <h6>{text}</h6>
        </button>
      </div>
    </>
  );
};

export default Button;
