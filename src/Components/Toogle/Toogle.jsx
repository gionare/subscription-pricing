import "./toogle.css";

const Toogle = () => {
  return (
    <div className="toggle-component">
      <h1 className="headline">Our Pricing</h1>

      <div className="pricing-toggle">
        <p className="options">Annually</p>

        <input id="checkboxInput" type="checkbox" />
        <label class="toggleSwitch" for="checkboxInput"></label>

        <p className="options">Monthly</p>
      </div>
    </div>
  );
};

export default Toogle;
