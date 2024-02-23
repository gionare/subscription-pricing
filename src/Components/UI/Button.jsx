import "./button.css";

const Button = ({ index }) => {
  return (
    <button className={`learn-button${index === 1 ? "-active" : ""}`}>
      learn more
    </button>
  );
};

export default Button;
