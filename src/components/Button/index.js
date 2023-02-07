import "./style.css";

const Button = ({ text, destination }) => {
  return (
    <button className="button">
      <a href={destination}>{text}</a>
    </button>
  );
};

export default Button;
