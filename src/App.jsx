import React from "react";
import "./App.css";
import data from "./data.json";
import Toogle from "./Components/Toogle/Toogle";
import Card from "./Components/Card/Card";
import WaveImg from "/lines-wave.svg";
import CurvedImg from "/lines-curved.svg";
import ScrnSht from "/public/scrnsht.png";

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
      <img className="curved" src={CurvedImg} alt="wave image"></img>
      <img className="wave" src={WaveImg} alt="wave image"></img>
    </div>
  );
}

export default App;
