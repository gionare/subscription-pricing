import "./App.css";
import data from "./data.json";
import Toogle from "./Components/Toogle/Toogle";
import Card from "./Components/Card/Card";

import Wave from "/public/lines-wave.svg";

function App() {
  console.log(data);

  return (
    <div className="main-container-app">
      <Toogle />

      <ul className="list-container">
        {data.map((item, index) => (
          <Card key={index} item={item} index={index} />
        ))}
      </ul>
    </div>
  );
}

export default App;
