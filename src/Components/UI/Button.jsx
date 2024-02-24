import "./button.css";

const Button = ({ index }) => {
  return (
    <button className={`btn${index === 1 ? "-active" : ""}`}>
      <i className="animation"></i>
      learn more
      <i class="animation"></i>
    </button>
  );
};

export default Button;
